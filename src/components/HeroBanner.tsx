import React from 'react';
import { Box, useTheme } from '@mui/material';

interface HeroBannerProps {
  width?: number | string;
  height?: number | string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ width = '100%', height = 320 }) => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const accentA = '#22d3ee';
  const accentB = '#a78bfa';
  const line = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.45)';

  return (
    <Box sx={{ width, height }} aria-hidden role="img">
      <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="g1" cx="20%" cy="20%" r="60%">
            <stop offset="0%" stopColor={primary} stopOpacity="0.6" />
            <stop offset="100%" stopColor={primary} stopOpacity="0" />
          </radialGradient>
          <radialGradient id="g2" cx="85%" cy="25%" r="55%">
            <stop offset="0%" stopColor={accentA} stopOpacity="0.45" />
            <stop offset="100%" stopColor={accentA} stopOpacity="0" />
          </radialGradient>
          <radialGradient id="g3" cx="60%" cy="85%" r="65%">
            <stop offset="0%" stopColor={accentB} stopOpacity="0.35" />
            <stop offset="100%" stopColor={accentB} stopOpacity="0" />
          </radialGradient>
          <filter id="blur10" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="28" />
          </filter>
        </defs>
        <rect x="0" y="0" width="800" height="400" fill="transparent" />
        <g filter="url(#blur10)">
          <circle cx="100" cy="70" r="180" fill="url(#g1)" />
          <circle cx="680" cy="90" r="170" fill="url(#g2)" />
          <circle cx="520" cy="350" r="200" fill="url(#g3)" />
        </g>
        {/* Brain-like network */}
        <g stroke={line} strokeWidth="1.6" fill="none">
          <path d="M200 240 C220 150, 320 120, 380 180 S520 260, 620 210" opacity="0.6" />
          <path d="M210 280 C260 240, 330 220, 410 260 S540 340, 640 300" opacity="0.5" />
          <path d="M230 200 C260 150, 340 140, 420 190 S560 240, 610 190" opacity="0.35" />
        </g>
        <g fill={line}>
          {[
            [200, 240], [240, 200], [300, 180], [360, 200], [420, 240], [480, 260], [540, 240], [600, 210]
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={3.2} />
          ))}
        </g>
      </svg>
    </Box>
  );
};

export default HeroBanner;

