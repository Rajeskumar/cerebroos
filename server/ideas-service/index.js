import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';

const app = express();
app.use(helmet());
app.use(express.json({ limit: '64kb' }));

// Restrict CORS to your domain; adjust as needed in deployment
const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'https://cerebroos.com').split(',');
app.use(cors({ origin: allowedOrigins, methods: ['POST', 'OPTIONS'] }));

// Basic rate limiting
const limiter = rateLimit({ windowMs: 60 * 1000, limit: 10 });
app.use('/api/ideas', limiter);

// Configure transporter (use SMTP or a provider API)
// Recommended: set SMTP credentials or provider API key via environment variables
const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  MAIL_TO, // Set this to your destination email in the deployment environment
} = process.env;

if (!MAIL_TO) {
  console.warn('MAIL_TO is not set. The service will start but emails will fail.');
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT || 587),
  secure: false,
  auth: SMTP_USER && SMTP_PASS ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
});

app.post('/api/ideas', async (req, res) => {
  try {
    const { name, contactEmail, title, summary, links, consent, t, honey } = req.body || {};

    // Basic validations and bot checks
    if (honey) return res.status(200).send('ok');
    if (!consent) return res.status(400).send('consent_required');
    if (!title || typeof title !== 'string' || title.trim().length < 3) return res.status(400).send('invalid_title');
    if (!summary || typeof summary !== 'string' || summary.trim().length < 30) return res.status(400).send('invalid_summary');
    if (!t || t < 1000) return res.status(400).send('invalid_t');

    const fromLine = contactEmail ? `${name || 'CerebroOS User'} <${contactEmail}>` : 'CerebroOS Idea Form <no-reply@cerebroos.com>';

    const text = `New idea submission\n\n` +
      `Name: ${name || '-'}\n` +
      `Contact: ${contactEmail || '-'}\n` +
      `Title: ${title}\n` +
      `Links: ${links || '-'}\n` +
      `\nSummary:\n${summary}\n`;

    const html = `
      <h2>New idea submission</h2>
      <p><strong>Name:</strong> ${name || '-'}<br/>
      <strong>Contact:</strong> ${contactEmail || '-'}<br/>
      <strong>Title:</strong> ${title}<br/>
      <strong>Links:</strong> ${links || '-'}
      </p>
      <h3>Summary</h3>
      <pre style="white-space:pre-wrap;font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif">${summary}</pre>
    `;

    if (!MAIL_TO) return res.status(500).send('mail_to_not_configured');

    await transporter.sendMail({
      to: MAIL_TO,
      from: fromLine,
      subject: `CerebroOS Idea: ${title}`,
      text,
      html,
    });

    return res.status(200).send('ok');
  } catch (err) {
    console.error(err);
    return res.status(500).send('error');
  }
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`ideas-service listening on ${port}`));

