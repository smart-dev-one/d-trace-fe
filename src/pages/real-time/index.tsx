import { Box, Typography } from '@mui/material';
import { Card } from '@/components';

export const RealTime = () => {
  return (
    <Box>
      <Box sx={{ mb: '30px' }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            color: '#5F5F5F',
          }}
        >
          Dados em tempo real
        </Typography>
        <Typography variant="subtitle2">Listagem de máquinas</Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        <Card />
        <Card />
        <Card />
        <Card />
      </Box>
    </Box>
  );
};
