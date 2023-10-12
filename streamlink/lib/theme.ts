import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: { 
      default: "#F3F4F6"
    },
    primary: {
      light: '#326da8',
      main: '#030712',
      dark: '#E7E7E7',
      contrastText: '#000000',
    },
    secondary: {
      light: '#7A7A7A',
      main: '#ffffff',
      dark: '#326da8',
      contrastText: '#000',
    },
  },
  typography: {
    "fontFamily": `"Inter", "Poppins", "Helvetica", "Arial", sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
   }
});

export default theme;