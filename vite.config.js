import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function vercelContactApi() {
  return {
    name: 'vercel-contact-api',
    async configureServer(server) {
      const { default: contactHandler } = await import('./api/contact.js');

      server.middlewares.use(async (req, res, next) => {
        if (req.url?.startsWith('/api/contact') && req.method === 'POST') {
          let body = '';

          req.on('data', (chunk) => {
            body += chunk;
          });

          req.on('end', async () => {
            let parsedBody = {};

            if (body) {
              try {
                parsedBody = JSON.parse(body);
              } catch {
                parsedBody = {};
              }
            }

            const mockReq = {
              method: req.method,
              headers: req.headers,
              socket: { remoteAddress: req.socket?.remoteAddress || '127.0.0.1' },
              body: parsedBody,
            };

            const mockRes = {
              statusCode: 200,
              headers: {},
              setHeader(name, value) {
                this.headers[name] = value;
              },
              status(code) {
                this.statusCode = code;
                return this;
              },
              json(payload) {
                this.headers['content-type'] = 'application/json';
                res.writeHead(this.statusCode, this.headers);
                res.end(JSON.stringify(payload));
              },
              end(payload) {
                res.writeHead(this.statusCode, this.headers);
                res.end(payload);
              },
            };

            try {
              await contactHandler(mockReq, mockRes);
            } catch (error) {
              console.error('Local contact API error:', error);
              res.writeHead(500, { 'content-type': 'application/json' });
              res.end(JSON.stringify({ success: false, message: 'Server error while sending email.' }));
            }
          });

          return;
        }

        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), vercelContactApi()],
})