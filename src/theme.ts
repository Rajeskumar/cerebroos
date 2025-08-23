
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
      main: '#007AFF',
    },
    secondary: {
      main: '#FF3B30',
    },
    background: {
      default: '#f0f2f5',
      paper: 'rgba(255, 255, 255, 0.8)',
    },
    text: {
      primary: '#1c1c1e',
      secondary: '#3c3c43',
    },
  },
  typography: {
    fontFamily: '"SF Pro Display", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: '3rem', fontWeight: 700, letterSpacing: '-0.5px', '@media (min-width:600px)': { fontSize: '4.5rem' } },
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
          ...glassmorphismStyle(0.7),
          borderRadius: 20,
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 12px 40px 0 rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 12, textTransform: 'none', fontWeight: 600 },
        contained: { boxShadow: '0 4px 12px rgba(0, 122, 255, 0.3)', '&:hover': { boxShadow: '0 6px 16px rgba(0, 122, 255, 0.4)' } },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          ...glassmorphismStyle(0.5),
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
      default: '#000000',
      paper: 'rgba(28, 28, 30, 0.7)',
    },
    text: {
      primary: '#ffffff',
      secondary: '#8e8e93',
    },
  },
  components: {
    ...lightThemeOptions.components,
    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(28, 28, 30, 0.6)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: 20,
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 12px 40px 0 rgba(0, 0, 0, 0.25)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(18, 18, 18, 0.6)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: 'none',
        },
      },
    },
  },
});
