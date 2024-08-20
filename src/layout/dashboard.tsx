import { Box, Card } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/components';
import { Navbar } from '@/components';

export const LayoutDashboard = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        maxWidth: '100vw',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: '#F5F5F5',
      }}
    >
      <Sidebar />
      <Navbar />
      <Box
        sx={{
          padding: '20px 60px 20px 130px',
          flex: 1,
          display: 'flex',
        }}
      >
        <Card
          sx={{
            flex: 1,
            padding: '40px',
            borderRadius: '20px',
          }}
        >
          <Outlet />
        </Card>
      </Box>
    </Box>
  );
};
