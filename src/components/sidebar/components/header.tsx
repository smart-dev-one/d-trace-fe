import { Box } from '@mui/material';

export const Header = () => {
  return (
    <Box
      sx={{
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box component="img" src="/d-trace.png" alt="Logo" />
      <Box
        id="tracer-sidebar"
        sx={{
          overflow: 'hidden',
          width: 0,
          transition: '130ms',
        }}
      >
        <img src="/trace.png" alt="Trace" />
      </Box>
    </Box>
  );
};
