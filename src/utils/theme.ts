import { createTheme, Theme } from '@mui/material/styles';

const theme: Theme = createTheme({
  palette: {
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    primary: {
      light: '#3B93DA',
      main: '#155E99',
      dark: '#1338B0',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    grey: {
      '100': '#F6F6F6',
      '900': '#4B4B4B',
    },
    text: {
      primary: '#5F5F5F',
      secondary: '#FFFFFF',
      disabled: '#F6F6F6',
    },
    success: {
      main: '#C8F3C1',
    },
  },
});

export { theme };
