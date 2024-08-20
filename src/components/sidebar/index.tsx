import { Box } from '@mui/material';
import { ListMenu } from './components/list';
import { Header } from './components/header';
import { mockMenu } from './mock';

export const Sidebar = () => {
  return (
    <Box
      sx={{
        width: '80px',
        height: '100vh',
        overflow: 'hidden',
        position: 'fixed',
        zIndex: 100,
        top: 0,
        left: 0,
        background:
          'linear-gradient(180deg, rgba(21,94,153,1) 47%, rgba(48,201,242,1) 100%);',
        transition: '300ms',
        '.active': {
          transition: '100ms',
          background: 'transparent',
        },
        ':hover': {
          width: '390px',
          '#tracer-sidebar': {
            width: '110px',
            overflow: 'hidden',
          },
          '.active': {
            background: '#146AAF',
          },
        },
      }}
    >
      <Header />
      <ListMenu data={mockMenu} />
    </Box>
  );
};
