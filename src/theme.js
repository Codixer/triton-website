import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#008ff8',
    },
    secondary: {
      main: '#d84315',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    typography: {
      fontFamily: [
        'Quicksand',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  },
});

export default theme;
