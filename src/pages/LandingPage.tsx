
import React, { useRef } from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Link as MuiLink,
} from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import NotesIcon from '@mui/icons-material/Notes';
import FeatureCard from '../components/FeatureCard';

const features = [
  {
    icon: <MonetizationOnIcon fontSize="large" />,
    title: 'VaravuSelavu',
    status: 'Live' as const,
    description: 'Track your expenses and manage your finances with ease.',
  },
  {
    icon: <SmartToyIcon fontSize="large" />,
    title: 'Personal AI Assistant',
    status: 'Coming Soon' as const,
    description: 'Your own AI to help you with daily tasks and queries.',
  },
  {
    icon: <NotesIcon fontSize="large" />,
    title: 'Notes & Productivity',
    status: 'Coming Soon' as const,
    description: 'Organize your thoughts, plans, and work in one place.',
  },
];

const LandingPage: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  const handleScrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Hero Section */}
      <Container maxWidth="md" sx={{ pt: 8, pb: 6, textAlign: 'center' }}>
        <Box
          sx={{
            backgroundColor: 'rgba(18, 18, 18, 0.6)',
            backdropFilter: 'blur(12px)',
            borderRadius: '20px',
            p: { xs: 3, sm: 4 },
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <Typography
            component="h1"
            variant="h1"
            color="text.primary"
            gutterBottom
          >
            CerebroOS
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Your Personal Operating System for Life.
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Unifying your essential personal applications, from finance management to productivity and knowledge, all in one secure place.
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid>
                <MuiLink href="/expense" underline="none">
                  <Button variant="contained" size="large">
                    Try Expense Tracker
                  </Button>
                </MuiLink>
              </Grid>
              <Grid>
                <Button variant="outlined" size="large" onClick={handleScrollToFeatures}>
                  Learn More
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

      {/* Features Section */}
      <Container ref={featuresRef} maxWidth="lg" sx={{ py: 8 }} component="main">
        <Typography variant="h2" align="center" color="text.primary" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4} alignItems="stretch">
          {features.map((feature) => (
            <Grid key={feature.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                status={feature.status}
                description={feature.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingPage;
