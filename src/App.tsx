
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, GlobalStyles, useTheme } from '@mui/material';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import IdeaSubmission from './pages/IdeaSubmission';
import BetaBanner from './components/BetaBanner';

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
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const alpha = isLight ? 0.18 : 0.35;
  const saturate = isLight ? 105 : 115;
  const bgAurora = `radial-gradient(at 27% 37%, hsla(215, 98%, 61%, ${alpha}) 0px, transparent 50%),
                    radial-gradient(at 97% 21%, hsla(125, 98%, 72%, ${alpha * 0.8}) 0px, transparent 50%),
                    radial-gradient(at 52% 99%, hsla(355, 98%, 76%, ${alpha * 0.8}) 0px, transparent 50%),
                    radial-gradient(at 10% 29%, hsla(256, 96%, 68%, ${alpha * 0.8}) 0px, transparent 50%),
                    radial-gradient(at 97% 96%, hsla(38, 97%, 70%, ${alpha * 0.8}) 0px, transparent 50%),
                    radial-gradient(at 33% 50%, hsla(222, 97%, 70%, ${alpha * 0.8}) 0px, transparent 50%),
                    radial-gradient(at 79% 53%, hsla(343, 98%, 74%, ${alpha * 0.8}) 0px, transparent 50%)`;
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
          background: bgAurora,
          filter: `blur(100px) saturate(${saturate}%)`,
          opacity: isLight ? 0.5 : 0.65,
          animation: 'aurora 20s ease-in-out infinite',
        }}
      />
      <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <NavBar brandName="CerebroOS" />
        <BetaBanner />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/ideas" element={<IdeaSubmission />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default App;
