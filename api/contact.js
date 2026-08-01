import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Resend } from 'resend';

const RECIPIENT_EMAIL = process.env.CONTACT_RECIPIENT_EMAIL || 'clifboycabrera1202@gmail.com';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ---------- Env loading ----------
function loadLocalEnv() {
  const envPath = path.resolve(__dirname, '../.env.local');
  if (!fs.existsSync(envPath)) return;

  const content = fs.readFileSync(envPath, 'utf8');
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const separatorIndex = trimmed.indexOf('=');
    if (separatorIndex === -1) continue;

    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();

    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

loadLocalEnv();

// ---------- Helpers ----------
const sanitizeInput = (value) => {
  if (typeof value !== 'string') return '';
  return value.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
};

const escapeHtml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const rateLimitMap = new Map();

const checkRateLimit = (ip) => {
  const now = Date.now();
  const windowMs = 60_000;
  const maxRequests = 3;

  const requests = rateLimitMap.get(ip) || [];
  const filtered = requests.filter((timestamp) => now - timestamp < windowMs);

  if (filtered.length >= maxRequests) {
    return false;
  }

  filtered.push(now);
  rateLimitMap.set(ip, filtered);
  return true;
};

// ---------- Email template ----------
function buildEmailHtml({ from_name, user_email, subject, message }) {
  const safeName = escapeHtml(from_name);
  const safeEmail = escapeHtml(user_email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

  return `
  <!DOCTYPE html>
  <html>
    <body style="margin:0; padding:0; background-color:#0f1115; font-family:'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px; background-color:#0f1115;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px; background-color:#171a21; border-radius:12px; overflow:hidden; border:1px solid #262a33;">
              <tr>
                <td style="padding:24px 28px; background:linear-gradient(135deg,#6366f1,#8b5cf6); text-align:left;">
                  <p style="margin:0; font-size:12px; letter-spacing:1.5px; text-transform:uppercase; color:rgba(255,255,255,0.85); font-weight:600;">
                    Portfolio Contact
                  </p>
                  <h1 style="margin:6px 0 0; font-size:20px; color:#ffffff; font-weight:700;">
                    New message from ${safeName}
                  </h1>
                </td>
              </tr>
              <tr>
                <td style="padding:28px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                    <tr>
                      <td style="padding:4px 0;">
                        <p style="margin:0; font-size:11px; letter-spacing:1px; text-transform:uppercase; color:#8b8f9a;">From</p>
                        <p style="margin:2px 0 0; font-size:15px; color:#f4f5f7; font-weight:600;">${safeName}</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:12px 0 4px;">
                        <p style="margin:0; font-size:11px; letter-spacing:1px; text-transform:uppercase; color:#8b8f9a;">Email</p>
                        <p style="margin:2px 0 0; font-size:15px;">
                          <a href="mailto:${safeEmail}" style="color:#a5b4fc; text-decoration:none;">${safeEmail}</a>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:12px 0 4px;">
                        <p style="margin:0; font-size:11px; letter-spacing:1px; text-transform:uppercase; color:#8b8f9a;">Subject</p>
                        <p style="margin:2px 0 0; font-size:15px; color:#f4f5f7; font-weight:600;">${safeSubject}</p>
                      </td>
                    </tr>
                  </table>

                  <div style="height:1px; background-color:#262a33; margin:20px 0;"></div>

                  <p style="margin:0 0 8px; font-size:11px; letter-spacing:1px; text-transform:uppercase; color:#8b8f9a;">Message</p>
                  <p style="margin:0; font-size:15px; line-height:1.6; color:#e2e4e9; white-space:pre-wrap;">${safeMessage}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:18px 28px; background-color:#12141a; text-align:center;">
                  <p style="margin:0; font-size:12px; color:#5f6472;">
                    Sent from your portfolio contact form &middot; Reply-to is set to ${safeEmail}
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>`;
}

function buildEmailText({ from_name, user_email, subject, message }) {
  return [
    '--------------------------------------',
    'New Contact Form Submission',
    '',
    'Name:',
    from_name,
    '',
    'Email:',
    user_email,
    '',
    'Subject:',
    subject,
    '',
    'Message:',
    message,
    '--------------------------------------',
  ].join('\n');
}

// ---------- Handler ----------
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, message: 'Method not allowed.' });
  }

  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  if (!checkRateLimit(ip)) {
    return res.status(429).json({ success: false, message: 'Too many requests. Please try again later.' });
  }

  const body = req.body || {};
  const from_name = sanitizeInput(body.from_name);
  const user_email = sanitizeInput(body.user_email);
  const subject = sanitizeInput(body.subject);
  const message = sanitizeInput(body.message);
  const honeypot = sanitizeInput(body.honeypot);

  if (honeypot || !from_name || !user_email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'Validation failed.' });
  }

  if (!isValidEmail(user_email)) {
    return res.status(400).json({ success: false, message: 'Invalid email address.' });
  }

  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error('Missing RESEND_API_KEY environment variable.');
    }

    const resend = new Resend(apiKey);
    const payload = { from_name, user_email, subject, message };
    const senderName = process.env.RESEND_FROM_NAME || 'Portfolio Contact';
    const senderEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

    const emailResponse = await resend.emails.send({
      from: `${senderName} <${senderEmail}>`,
      to: [RECIPIENT_EMAIL],
      reply_to: user_email,
      subject: `New Portfolio Inquiry: ${subject}`,
      html: buildEmailHtml(payload),
      text: buildEmailText(payload),
    });

    if (emailResponse.error) {
      throw new Error(emailResponse.error.message || 'Resend failed to send the email.');
    }

    return res.status(200).json({ success: true, message: 'Email sent successfully.' });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ success: false, message: 'Server error while sending email.' });
  }
}