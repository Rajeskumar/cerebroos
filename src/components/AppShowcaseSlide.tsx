import React from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';

interface AppShowcaseSlideProps {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  accent: string; // hex color
  variant?: 'left' | 'right';
  ariaLabel?: string;
}

const AppShowcaseSlide: React.FC<AppShowcaseSlideProps> = ({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  accent,
  variant = 'right',
  ariaLabel,
}) => {
  const theme = useTheme();
  const bg = theme.palette.mode === 'dark' ? 'rgba(20,20,24,0.82)' : 'rgba(255,255,255,0.9)';
  const border = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)';

  const Illustration = (
    <Box aria-hidden sx={{ width: { xs: '100%', md: '45%' }, height: 200 }}>
      <svg width="100%" height="100%" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.6" />
            <stop offset="100%" stopColor={accent} stopOpacity="0.05" />
          </linearGradient>
          <radialGradient id="rg" cx="70%" cy="30%" r="60%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.45" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="600" height="300" fill="transparent" />
        <g>
          <circle cx="500" cy="70" r="140" fill="url(#rg)" />
          <path d="M0 240 C120 180, 240 300, 360 220 S600 180, 600 260 L600 300 L0 300 Z" fill="url(#lg)" />
          <path d="M0 220 C130 160, 230 240, 380 200 S600 150, 600 210" stroke={accent} strokeOpacity="0.35" strokeWidth="4" fill="none" />
        </g>
      </svg>
    </Box>
  );

  return (
    <Box
      role="group"
      aria-label={ariaLabel || title}
      sx={{
        minWidth: { xs: '90%', sm: '80%', md: '70%' },
        scrollSnapAlign: 'center',
        bgcolor: bg,
        border: `1px solid ${border}`,
        borderRadius: 3,
        p: { xs: 3, sm: 4 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 3,
      }}
    >
      {variant === 'left' ? Illustration : null}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h5" gutterBottom>{title}</Typography>
        <Typography color="text.secondary" sx={{ mb: 2 }}>{subtitle}</Typography>
        <Button href={ctaHref} variant="contained" size="large">{ctaLabel}</Button>
      </Box>
      {variant === 'right' ? Illustration : null}
    </Box>
  );
};

export default AppShowcaseSlide;

