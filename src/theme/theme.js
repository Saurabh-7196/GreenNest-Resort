import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#1d5434' },
    secondary: { main: '#8bc34a' },
    tertiary: { main: '#2e7d32' },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

export default theme;
