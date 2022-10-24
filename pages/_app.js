import { createTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';

const App = ({ Component, pageProps }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = createTheme({
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
      primary: {
        main: '#81c784',
      },
      secondary: {
        main: '#ec407a',
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
