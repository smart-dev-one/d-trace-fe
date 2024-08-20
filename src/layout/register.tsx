import { Navbar, Sidebar } from '@/components';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

export const LayoutRegister = () => {
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
        component="main"
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: '20px 60px',
          backgroundColor: '#ffffff',
          marginLeft: '100px',
          borderRadius: '20px',
          boxShadow: 2,
          marginRight: '60px',
          marginTop: '20px',
          marginBottom: '20px',
          '@media (max-width: 600px)': {
            marginLeft: '0',
          },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};
