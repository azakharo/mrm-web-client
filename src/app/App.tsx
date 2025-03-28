import {useEffect} from 'react';
import ModalContainer from 'react-modal-promise';
import {BrowserRouter} from 'react-router-dom';
import {AuthProvider} from '@features/auth';
import {ThemeProvider} from '@mui/material/styles';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {setDefaultOptions} from 'date-fns';
import {ru as ruLocale} from 'date-fns/locale';
import {SnackbarProvider} from 'notistack';

import {isDevelopment, isProduction} from '@shared/constants';
import GlobalStyles from './GlobalStyles';

import './font.css';
import 'react-day-picker/style.css';

import Routes from '@/app/Routes';
import theme from '@/theme';

// Set global locale for date-fns
setDefaultOptions({locale: ruLocale});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: !isDevelopment,
    },
  },
});

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
      <QueryClientProvider client={queryClient}>
        <BrowserRouter basename={import.meta.env.VITE_PUBLIC_PATH}>
          <GlobalStyles />
          <SnackbarProvider>
            <AuthProvider>
              <Routes />
              <ModalContainer />
            </AuthProvider>
          </SnackbarProvider>
        </BrowserRouter>

        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition="bottom-left"
        />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
