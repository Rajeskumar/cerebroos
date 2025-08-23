
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, GlobalStyles } from '@mui/material';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';

const auroraKeyframes = `
  @keyframes aurora {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const App: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        position: 'relative',
        bgcolor: 'background.default',
        overflow: 'hidden',
      }}
    >
      <GlobalStyles styles={auroraKeyframes} />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          background: `radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 1) 0px, transparent 50%),
                       radial-gradient(at 97% 21%, hsla(125, 98%, 72%, 1) 0px, transparent 50%),
                       radial-gradient(at 52% 99%, hsla(355, 98%, 76%, 1) 0px, transparent 50%),
                       radial-gradient(at 10% 29%, hsla(256, 96%, 68%, 1) 0px, transparent 50%),
                       radial-gradient(at 97% 96%, hsla(38, 97%, 70%, 1) 0px, transparent 50%),
                       radial-gradient(at 33% 50%, hsla(222, 97%, 70%, 1) 0px, transparent 50%),
                       radial-gradient(at 79% 53%, hsla(343, 98%, 74%, 1) 0px, transparent 50%)`,
          filter: 'blur(100px) saturate(150%)',
          animation: 'aurora 20s ease-in-out infinite',
        }}
      />
      <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <NavBar brandName="CerebroOS" />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default App;
