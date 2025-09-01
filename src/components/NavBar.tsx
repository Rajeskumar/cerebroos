
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Link as MuiLink,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface NavBarProps {
  brandName: string;
}

const NavBar: React.FC<NavBarProps> = ({ brandName }) => {
  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`, position: 'sticky' }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          component={RouterLink}
          to="/"
          sx={{ flexGrow: 1, textDecoration: 'none' }}
        >
          {brandName}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Button href="#vision" color="inherit" sx={{ my: 1, mx: 0.5 }}>
            Vision
          </Button>
          <Button href="#apps" color="inherit" sx={{ my: 1, mx: 0.5 }}>
            Apps
          </Button>
          <Button href="#tech" color="inherit" sx={{ my: 1, mx: 0.5 }}>
            Tech
          </Button>
          <Button href="#roadmap" color="inherit" sx={{ my: 1, mx: 0.5 }}>
            Roadmap
          </Button>
          <Button href="#about" color="inherit" sx={{ my: 1, mx: 0.5 }}>
            About
          </Button>
          <Button href="/ideas" variant="contained" sx={{ my: 1, mx: 1 }}>
            Share Idea
          </Button>
          <MuiLink
            href="/expense"
            underline="none"
            aria-label="Go to Expense Tracker application"
          >
            <Button variant="outlined" sx={{ my: 1, mx: 1.5 }}>
              Expense Tracker
            </Button>
          </MuiLink>
        </Box>
      </Toolbar>
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 3,
          background: 'linear-gradient(90deg, #3B82F6 0%, #22D3EE 50%, #A78BFA 100%)',
          opacity: 0.7,
        }}
      />
    </AppBar>
  );
};

export default NavBar;
