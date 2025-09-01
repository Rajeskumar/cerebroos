import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        bgcolor: 'background.paper',
        backdropFilter: 'blur(8px)',
        borderTop: '1px solid',
        borderColor: 'divider',
        position: 'relative',
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: 'linear-gradient(90deg, #34D399 0%, #F59E0B 50%, #3B82F6 100%)',
          opacity: 0.65,
        }}
      />
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} CerebroOS. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
