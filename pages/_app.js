import { createTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';

const App = ({ Component, pageProps }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = createTheme({
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
      primary: {
        main: '#62d2aa',
      },
      secondary: {
        main: '#d26289',
      },
    },
    typography: {
      fontSize: 18,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
