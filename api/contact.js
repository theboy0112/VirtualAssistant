import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const RECIPIENT_EMAIL = 'clifboycabrera1202@gmail.com';

const sanitizeInput = (value) => {
  if (typeof value !== 'string') return '';
  return value.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
};

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
    if (!process.env.RESEND_API_KEY) {
      throw new Error('Missing RESEND_API_KEY environment variable.');
    }

    const emailResponse = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [RECIPIENT_EMAIL],
      reply_to: user_email,
      subject: `New Portfolio Inquiry: ${subject}`,
      text: `--------------------------------------\nNew Contact Form Submission\n\nName:\n${from_name}\n\nEmail:\n${user_email}\n\nSubject:\n${subject}\n\nMessage:\n${message}\n--------------------------------------`,
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
