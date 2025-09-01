
import React, { useRef } from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Link as MuiLink,
} from '@mui/material';
// Icons removed; slider uses illustrations instead of icon grid
// import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
// import SmartToyIcon from '@mui/icons-material/SmartToy';
// import NotesIcon from '@mui/icons-material/Notes';
import HeroBanner from '../components/HeroBanner';
import AppShowcaseSlide from '../components/AppShowcaseSlide';

// Removed legacy features grid to avoid repetition in Apps section

const LandingPage: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  const handleScrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ pt: 10, pb: 8 }}>
        <Box sx={{ bgcolor: 'background.paper', borderRadius: 3, border: '1px solid rgba(255,255,255,0.12)', p: { xs: 3, sm: 5 } }}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography component="h1" variant="h1" gutterBottom>
                CerebroOS
              </Typography>
              <Typography variant="h5" color="text.secondary" paragraph>
                Your Personal Operating System for Life.
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Clean, privacy-first, and modular apps for everyday life — starting with VaravuSelavu, our expense tracker, and growing into knowledge, planning, and an intelligent AI assistant.
              </Typography>
              <Box sx={{ mt: 3, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <MuiLink href="/expense" underline="none">
                  <Button variant="contained" size="large">Try Expense Tracker</Button>
                </MuiLink>
                <Button variant="outlined" size="large" onClick={handleScrollToFeatures}>Learn More</Button>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <HeroBanner height={320} />
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Vision & Mission */}
      <Container id="vision" ref={featuresRef} maxWidth="lg" sx={{ py: 8 }} component="section">
        <Typography variant="h2" align="center" color="text.primary" gutterBottom>
          Vision & Mission
        </Typography>
        <Grid container spacing={4} alignItems="stretch">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ p: 3, borderRadius: 3, border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper' }}>
              <Typography variant="h5" gutterBottom>
                What is CerebroOS?
              </Typography>
              <Typography color="text.secondary">
                CerebroOS is a personal operating system for life—a unified, yet modular suite of apps designed to orchestrate everyday life with intelligence and simplicity.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ p: 3, borderRadius: 3, border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper' }}>
              <Typography variant="h5" gutterBottom>
                Mission & Values
              </Typography>
              <Typography color="text.secondary" component="div">
                • Empower individuals to manage finances, planning, knowledge, and productivity in one connected ecosystem.<br />
                • Core values: clean, modern design; privacy-first architecture; flexibility to grow organically.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Apps in the Ecosystem */}
      <Container id="apps" maxWidth="lg" sx={{ py: 8 }} component="section">
        <Box sx={{
          p: { xs: 3, sm: 4 },
          borderRadius: 3,
          border: '1px solid',
          borderColor: 'divider',
          background: 'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(34,211,238,0.06) 50%, rgba(167,139,250,0.08) 100%)',
        }}>
        <Typography variant="h2" align="center" color="text.primary" gutterBottom>
          Apps in the Ecosystem
        </Typography>
        <Typography align="center" color="text.secondary" sx={{ mb: 3 }}>
          A quick glance at what’s live and what’s coming.
        </Typography>

        <Box sx={{ position: 'relative' }}>
          <Box id="apps-slider" sx={{ display: 'flex', gap: 3, overflowX: 'auto', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', pb: 1, px: 1 }}>
            <AppShowcaseSlide
              title="VaravuSelavu — Expense Tracker"
              subtitle="Track spending, categorize expenses, and stay on top of your money."
              ctaLabel="Open VaravuSelavu"
              ctaHref="/expense"
              accent="#22d3ee"
              variant="right"
              ariaLabel="VaravuSelavu expense tracker slide"
            />
            <AppShowcaseSlide
              title="Personal AI Assistant"
              subtitle="A context-aware AI to help with planning, knowledge, and everyday actions."
              ctaLabel="Join the journey"
              ctaHref="#vision"
              accent="#a78bfa"
              variant="left"
              ariaLabel="Personal AI assistant slide"
            />
            <AppShowcaseSlide
              title="Notes & Knowledge"
              subtitle="Journaling, tasks, and a personal knowledge base that just flows."
              ctaLabel="See roadmap"
              ctaHref="#roadmap"
              accent="#34d399"
              variant="right"
              ariaLabel="Notes and knowledge tools slide"
            />
          </Box>
          {/* Prev/Next controls removed — swipe or scroll to navigate */}
        </Box>

        </Box>
      </Container>

      {/* Technology & Architecture */}
      {/* <Container id="tech" maxWidth="lg" sx={{ py: 8 }} component="section">
        <Typography variant="h2" align="center" color="text.primary" gutterBottom>
          Technology & Architecture
        </Typography>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ p: 3, borderRadius: 3, border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', height: '100%' }}>
              <Typography variant="h6" gutterBottom>Frontend</Typography>
              <Typography color="text.secondary">
                React (TypeScript) with Material UI for a clean, modern UI and a consistent design system.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ p: 3, borderRadius: 3, border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', height: '100%' }}>
              <Typography variant="h6" gutterBottom>Routing & Hosting</Typography>
              <Typography color="text.secondary">
                Each app runs as a separate Cloud Run service, unified under one domain via Google Cloud HTTPS Load Balancer with path-based routing.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ p: 3, borderRadius: 3, border: '1px solid rgba(255,255,255,0.1)', bgcolor: 'background.paper', height: '100%' }}>
              <Typography variant="h6" gutterBottom>Infrastructure</Typography>
              <Typography color="text.secondary">
                Built on Google Cloud Run with code in GitHub; SSL and traffic routing managed through GCP for secure, scalable delivery.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ p: 3, borderRadius: 3, border: '1px solid rgba(255,255,255,0.1)', bgcolor: 'background.paper', height: '100%' }}>
              <Typography variant="h6" gutterBottom>Privacy-First</Typography>
              <Typography color="text.secondary">
                Designed with data minimization and user control at the core. Future AI features will be user-private and context-aware.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container> */}

      {/* Roadmap Snapshot */}
      <Container id="roadmap" maxWidth="lg" sx={{ py: 8 }} component="section">
        <Box sx={{
          p: { xs: 3, sm: 4 },
          borderRadius: 3,
          border: '1px solid',
          borderColor: 'divider',
          background: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(245,158,11,0.06) 100%)',
        }}>
          <Typography variant="h2" align="center" color="text.primary" gutterBottom>
            Roadmap Snapshot
          </Typography>
          <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ p: 3, borderRadius: 3, border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper' }}>
              <Typography variant="h6" gutterBottom>1. Launch Phase</Typography>
              <Typography color="text.secondary">VaravuSelavu live and stable.</Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ p: 3, borderRadius: 3, border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper' }}>
              <Typography variant="h6" gutterBottom>2. Growth Phase</Typography>
              <Typography color="text.secondary">Add new apps (AI assistant, notes, planners) and enhance UI/UX.</Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ p: 3, borderRadius: 3, border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper' }}>
              <Typography variant="h6" gutterBottom>3. AI Integration</Typography>
              <Typography color="text.secondary">Introduce a user-private AI with intelligent workflows.</Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ p: 3, borderRadius: 3, border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper' }}>
              <Typography variant="h6" gutterBottom>4. Ecosystem Maturity</Typography>
              <Typography color="text.secondary">Modular apps share identity and align in design language.</Typography>
            </Box>
          </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Share Your Idea CTA */}
      <Container id="share-idea" maxWidth="lg" sx={{ py: 8 }} component="section">
        <Box sx={{
          p: { xs: 3, sm: 5 },
          borderRadius: 3,
          border: '1px solid',
          borderColor: 'divider',
          background: 'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(16,185,129,0.06) 100%)',
          textAlign: 'center',
        }}>
          <Typography variant="h2" gutterBottom>
            Share Your Idea
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Do you have a wonderful idea we can turn into a product? Throw in your idea and we’ll do the hard work of converting it into reality.
          </Typography>
          <Button href="/ideas" variant="contained" size="large">
            Submit Your Idea
          </Button>
        </Box>
      </Container>

      {/* About & Values */}
      <Container id="about" maxWidth="lg" sx={{ py: 8 }} component="section">
        <Typography variant="h2" align="center" color="text.primary" gutterBottom>
          About CerebroOS
        </Typography>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ p: 3, borderRadius: 3, border: '1px solid rgba(255,255,255,0.1)', bgcolor: 'background.paper', height: '100%' }}>
              <Typography variant="h5" gutterBottom>Our Story</Typography>
              <Typography color="text.secondary">
                We’re building an ecosystem that feels like a personal operating system—simple, focused, and helpful. It starts with managing money well, then grows to planning, notes, knowledge, and an intelligent personal assistant.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ p: 3, borderRadius: 3, border: '1px solid rgba(255,255,255,0.1)', bgcolor: 'background.paper', height: '100%' }}>
              <Typography variant="h6" gutterBottom>Core Values</Typography>
              <Typography color="text.secondary" component="div">
                • Clean, modern design<br />
                • Privacy-first architecture<br />
                • Flexible, modular growth
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingPage;
