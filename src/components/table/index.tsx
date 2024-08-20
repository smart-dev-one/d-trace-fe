import { Box, TablePagination, Typography } from '@mui/material';

export const Table = () => {
  return (
    <Box
      sx={{
        width: '100%',
        border: '1px solid #ECECEC',
        borderRadius: '12px',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          padding: '15px',
          borderBottom: '1px solid #ECECEC',
        }}
      >
        <Typography>Produto</Typography>
      </Box>
      <Box
        sx={{
          flex: 1,
          padding: '15px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography>No rows</Typography>
      </Box>
      <Box
        sx={{
          padding: '0 15px',
          borderTop: '1px solid #ECECEC',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <TablePagination
          component="div"
          count={100}
          page={1}
          onPageChange={() => {}}
          rowsPerPage={10}
          onRowsPerPageChange={() => {}}
        />
      </Box>
    </Box>
  );
};
