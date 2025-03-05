import {memo, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {AuthProvider} from '@features/auth';
import {ThemeProvider} from '@mui/material/styles';

import {isProduction} from '@shared/constants';
import GlobalStyles from './GlobalStyles';

import './font.css';

import Routes from '@/app/Routes';
import theme from '@/theme';

const vitePreloadErrorEvent = 'vite:preloadError';
const vitePreloadErrorHandler = () => {
  window.location.reload();
};

const App = () => {
  // Need to apply the following useEffect only for production
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  useEffect(() => {
    if (isProduction) {
      window.addEventListener(vitePreloadErrorEvent, vitePreloadErrorHandler);

      return () => {
        window.removeEventListener(
          vitePreloadErrorEvent,
          vitePreloadErrorHandler,
        );
      };
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={import.meta.env.VITE_PUBLIC_PATH}>
        <GlobalStyles />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default memo(App);
