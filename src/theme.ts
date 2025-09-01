
import { createTheme, ThemeOptions } from '@mui/material/styles';

// Common styles for glassmorphism effect
const glassmorphismStyle = (opacity: number) => ({
  backdropFilter: 'blur(12px)',
  backgroundColor: `rgba(255, 255, 255, ${opacity})`,
  border: '1px solid rgba(255, 255, 255, 0.2)',
});

export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#2563EB',
    },
    secondary: {
      main: '#F97316',
    },
    background: {
      default: '#f5f6f8',
      paper: 'rgba(255, 255, 255, 0.9)',
    },
    text: {
      primary: '#0b0b0f',
      secondary: '#30323a',
    },
  },
  typography: {
    fontFamily: '"SF Pro Display", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: '3rem', fontWeight: 700, letterSpacing: '-0.5px', '@media (min-width:600px)': { fontSize: '4rem' } },
    h2: { fontSize: '2.25rem', fontWeight: 700, '@media (min-width:600px)': { fontSize: '3rem' } },
    h5: { fontWeight: 600 },
    body1: { fontSize: '1.05rem', lineHeight: 1.6, '@media (min-width:600px)': { fontSize: '1.15rem' } },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          ...glassmorphismStyle(0.85),
          borderRadius: 20,
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 12px 34px 0 rgba(0, 0, 0, 0.14)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 12, textTransform: 'none', fontWeight: 600 },
        containedPrimary: {
          boxShadow: '0 4px 12px rgba(37, 99, 235, 0.22)',
          '&:hover': { boxShadow: '0 6px 16px rgba(37, 99, 235, 0.28)' },
          '&:focus-visible': { boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.35)' },
        },
        outlined: {
          borderColor: 'rgba(0,0,0,0.18)',
          '&:hover': { borderColor: 'rgba(0,0,0,0.32)' },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          ...glassmorphismStyle(0.7),
          boxShadow: 'none',
        },
      },
    },
  },
};

export const lightTheme = createTheme(lightThemeOptions);

// Dark theme variant
export const darkTheme = createTheme({
  ...lightThemeOptions,
  palette: {
    ...lightThemeOptions.palette,
    mode: 'dark',
    background: {
      default: '#0b0b0f',
      paper: 'rgba(20, 20, 24, 0.82)',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b9',
    },
    primary: {
      main: '#3B82F6',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#F97316',
      contrastText: '#0b0b0f',
    },
  },
  components: {
    ...lightThemeOptions.components,
    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(20, 20, 24, 0.82)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: 20,
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.35)',
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 12px 40px 0 rgba(0, 0, 0, 0.4)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(12, 12, 16, 0.7)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: '#3B82F6',
          color: '#ffffff',
          '&:hover': { backgroundColor: '#2563EB' },
          '&:focus-visible': { boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.4)' },
        },
        outlined: {
          borderColor: 'rgba(255,255,255,0.24)',
          color: '#ffffff',
          '&:hover': { borderColor: 'rgba(255,255,255,0.4)' },
        },
      },
    },
  },
});
