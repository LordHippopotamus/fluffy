import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
  useMediaQuery,
} from '@mui/material';
import { LoginDialog } from 'components';
import ContextProvider from 'context';

const App = ({ Component, pageProps }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  let theme = createTheme({
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
      primary: {
        main: '#a5d6a7',
      },
      secondary: {
        main: '#d6a5d4',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 16,
          },
        },
      },
    },
    typography: {
      fontSize: 20,
      fontFamily: 'Comfortaa, cursive',
    },
  });

  theme = responsiveFontSizes(theme);

  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
        <LoginDialog />
      </ThemeProvider>
    </ContextProvider>
  );
};

export default App;
