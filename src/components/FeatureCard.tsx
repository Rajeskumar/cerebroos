
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
} from '@mui/material';

interface FeatureCardProps {
  icon: React.ReactElement;
  title: string;
  status: 'Live' | 'Coming Soon';
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, status, description }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          {icon}
          <Typography variant="h5" component="h3" sx={{ ml: 2 }}>
            {title}
          </Typography>
        </Box>
        <Chip
          label={status}
          color={status === 'Live' ? 'success' : 'info'}
          size="small"
          sx={{ mb: 2 }}
        />
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
