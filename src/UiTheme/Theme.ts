import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F45C34',
    },
    secondary: {
      main: '#8f5f5a',
    },
    background: {
      default: '#fff',
      paper: '#E4E0DC',
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export const themeGlobal = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: '#DBC9CD',
      },
    },
    MuiButton: {
      root: {
        fontSize: '1rem',
      },
    },
  },
});
