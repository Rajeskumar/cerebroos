import React, { useMemo, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Alert,
  Snackbar,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { getApiUrl } from '../config/api';

type SendEmailRequest = {
  form_type: string;
  user_email: string;
  subject: string;
  message_body: string;
  name?: string;
};



const IdeaSubmission: React.FC = () => {
  const [name, setName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [links, setLinks] = useState('');
  const [consent, setConsent] = useState(false);
  const [honey, setHoney] = useState(''); // hidden field
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successOpen, setSuccessOpen] = useState(false);
  const startTime = useMemo(() => Date.now(), []);

  const validTitle = title.trim().length >= 3;
  const validSummary = summary.trim().length >= 30;
  const validConsent = consent;
  const canSubmit = validTitle && validSummary && validConsent && !submitting;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!validTitle || !validSummary || !validConsent) {
      const problems = [
        !validTitle ? 'Title needs at least 3 characters' : null,
        !validSummary ? 'Summary needs at least 30 characters' : null,
        !validConsent ? 'Please agree to the review/contact consent' : null,
      ].filter(Boolean).join('. ');
      setError(problems || 'Please complete the form.');
      return;
    }
    // Minimum interaction time to deter bots
    const minMs = 2000;
    const elapsed = Date.now() - startTime;
    if (elapsed < minMs) {
      setError('Please take a little more time to complete the form.');
      return;
    }
    setSubmitting(true);
    try {
      const messageBody = `Title: ${title.trim()}

Summary:
${summary.trim()}

Links/References: ${links || 'None'}

Consent given: ${consent ? 'Yes' : 'No'}
Time on form: ${elapsed}ms
Honeypot: ${honey || 'empty'}`;

      const payload: SendEmailRequest = {
        form_type: 'feature_request',
        user_email: contactEmail || 'anonymous@cerebroos.com',
        subject: `Feature Request: ${title.trim()}`,
        message_body: messageBody,
        name: name || undefined,
      };

      const token = localStorage.getItem('user_token') || '';
      const headers: Record<string, string> = { 'Content-Type': 'application/json' };
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const res = await fetch(getApiUrl('/api/v1/email/send'), {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorText = await res.text().catch(() => 'Failed to submit idea');
        throw new Error(errorText);
      }
      setSuccessOpen(true);
      setName('');
      setContactEmail('');
      setTitle('');
      setSummary('');
      setLinks('');
      setConsent(false);
    } catch (err: any) {
      setError(err?.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Box sx={{
          p: { xs: 3, sm: 5 },
          borderRadius: 3,
          border: '1px solid',
          borderColor: 'divider',
          bgcolor: 'background.paper',
        }}>
          <Typography variant="h2" align="center" gutterBottom>
            Co‑Create With CerebroOS
          </Typography>
          <Typography align="center" color="text.secondary" sx={{ mb: 4 }}>
            Do you have a wonderful idea we can turn into a product? Share your vision — we’ll do the hard work of shaping it into reality.
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Your Name (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Contact Email (optional)"
                  type="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  autoComplete="email"
                  helperText="We’ll use this to follow up if needed."
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Idea Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  inputProps={{ maxLength: 120 }}
                  required
                  helperText={`${title.length}/120`}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Describe your idea"
                  multiline
                  minRows={5}
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  required
                  helperText={summary.length < 30 ? 'Please provide at least 30 characters' : `${summary.length} characters`}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Links or references (optional)"
                  value={links}
                  onChange={(e) => setLinks(e.target.value)}
                  placeholder="e.g., docs, mockups, examples"
                />
              </Grid>

              {/* Honeypot (hidden) */}
              <Grid size={{ xs: 12 }} sx={{ display: 'none' }}>
                <TextField
                  fullWidth
                  label="Your website"
                  value={honey}
                  onChange={(e) => setHoney(e.target.value)}
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <FormControlLabel
                  control={<Checkbox checked={consent} onChange={(e) => setConsent(e.target.checked)} />}
                  label="I agree that CerebroOS can review and contact me about this idea."
                />
              </Grid>

              {error && (
                <Grid size={{ xs: 12 }}>
                  <Alert severity="error">{error}</Alert>
                </Grid>
              )}

              <Grid size={{ xs: 12 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                  <Button type="submit" variant="contained" size="large" disabled={submitting}>
                    {submitting ? 'Submitting…' : 'Submit Idea'}
                  </Button>
                  <Typography variant="body2" color="text.secondary">
                    Tip: include a clear problem, audience, and a minimal first version.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

      <Snackbar
        open={successOpen}
        autoHideDuration={6000}
        onClose={() => setSuccessOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setSuccessOpen(false)} severity="success" sx={{ width: '100%' }}>
          Thank you! Your idea has been received. We’ll review it and reach out if we need more details.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default IdeaSubmission;
