Idea Submission Service (Cloud Run)

Purpose: Receive POSTs from the CerebroOS website and forward idea submissions to email without exposing the recipient in client code.

Environment variables (configure in Cloud Run or Secret Manager):
- MAIL_TO: Destination email (e.g., rajeskumarcse@gmail.com)
- SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS: SMTP configuration (e.g., Gmail with app password)
- ALLOWED_ORIGINS: Comma-separated list of allowed origins (default: https://cerebroos.com)

Run locally:
  npm install
  MAIL_TO=you@example.com SMTP_HOST=smtp.example.com SMTP_PORT=587 SMTP_USER=user SMTP_PASS=pass npm start

Deploy to Cloud Run:
  - Build container from this folder and deploy
  - Set env vars (prefer storing secrets in Secret Manager)
  - Configure HTTPS Load Balancer path rule to route /api/ideas to this service

Frontend integration:
  - The React app posts to /api/ideas
  - Optionally set REACT_APP_API_BASE to your API base path if different

Security notes:
  - The recipient email lives only in MAIL_TO on the server
  - CORS restricted, rate limited, basic honeypot and timing checks in place
  - Consider adding reCAPTCHA and storing submissions to a DB for audit

