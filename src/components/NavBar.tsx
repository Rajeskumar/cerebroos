
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
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
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
        <Box>
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
    </AppBar>
  );
};

export default NavBar;
