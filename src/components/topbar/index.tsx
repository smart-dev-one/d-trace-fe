import { Box } from '@mui/material';
import { Avatar } from './avatar';

export const Navbar = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '70px',
        padding: '20px 60px 0 130px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <Avatar />
      </Box>
    </Box>
  );
};
