import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const BetaBanner: React.FC = () => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const bg = isLight
    ? 'linear-gradient(90deg, rgba(59,130,246,0.12) 0%, rgba(34,211,238,0.12) 50%, rgba(167,139,250,0.12) 100%)'
    : 'linear-gradient(90deg, rgba(59,130,246,0.18) 0%, rgba(34,211,238,0.18) 50%, rgba(167,139,250,0.18) 100%)';

  return (
    <Box
      role="region"
      aria-label="CerebroOS beta notice"
      sx={{
        width: '100%',
        bgcolor: 'transparent',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Box
        sx={{
          background: bg,
          py: 1,
          px: 2,
        }}
      >
        <Typography
          variant="body2"
          color="text.primary"
          align="center"
          sx={{ fontWeight: 500 }}
        >
          Early Beta — We’ve just launched and are evolving quickly. New apps and features are on the way.
        </Typography>
      </Box>
    </Box>
  );
};

export default BetaBanner;
