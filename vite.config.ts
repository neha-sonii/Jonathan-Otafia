import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

function localLeadMailer() {
  return {
    name: 'local-lead-mailer',
    configureServer(server: any) {
      server.middlewares.use('/api/send-lead', async (req: any, res: any) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ ok: false, error: 'Method not allowed' }));
          return;
        }

        let body = '';
        req.on('data', (chunk: any) => {
          body += chunk;
        });

        req.on('end', async () => {
          try {
            const lead = body ? JSON.parse(body) : {};
            const host = process.env.SMTP_HOST;
            const port = Number(process.env.SMTP_PORT || '587');
            const secure = process.env.SMTP_SECURE === 'true' || port === 465;
            const user = process.env.SMTP_USER;
            const pass = process.env.SMTP_PASS;
            const from = process.env.SMTP_FROM || process.env.LEAD_EMAIL_FROM || 'Jonathan Website <noreply@example.com>';

            if (!host || !user || !pass) {
              throw new Error('SMTP credentials are not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS.');
            }

            const transporter = nodemailer.createTransport({
              host,
              port,
              secure,
              auth: { user, pass },
            });

            await transporter.sendMail({
              from,
              to: process.env.LEAD_EMAIL_TO || lead.to || 'jonathanpaulinus32@gmail.com',
              replyTo: lead.email,
              subject: `New ${lead.planLabel || 'LinkedIn'} application from ${lead.name || 'website'}`,
              html: `<div><h2>New LinkedIn fit-check lead</h2><p><strong>Name:</strong> ${lead.name || ''}</p><p><strong>Email:</strong> ${lead.email || ''}</p><p><strong>LinkedIn:</strong> ${lead.linkedinUrl || ''}</p></div>`,
            });

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ ok: true }));
          } catch (error) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ ok: false, error: error instanceof Error ? error.message : 'Unknown email error' }));
          }
        });
      });
    },
  };
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    localLeadMailer(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used - do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
