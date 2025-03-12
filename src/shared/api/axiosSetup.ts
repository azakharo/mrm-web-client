import {
  getAuthTokenFromLocalStorage,
  remAuthTokenFromLocalStorage,
} from '@features/auth';
import axios, {isAxiosError} from 'axios';

import {isDevelopment} from '@/shared/constants';

export const axi = axios.create({
  baseURL: isDevelopment ? '' : import.meta.env.VITE_API_URL,
});

axi.interceptors.request.use(function (config) {
  const token = getAuthTokenFromLocalStorage();
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

axi.interceptors.response.use(
  response => response,
  (error: unknown) => {
    if (isAxiosError(error)) {
      const resp = error.response;

      if (resp?.status === 401) {
        remAuthTokenFromLocalStorage();
        window.location.reload();
      }

      // Здесь не описываю detail в Typescript, просто проверяю наличие в runtime
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const errorMessage1 = error.response?.data?.detail?.msg as string;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const errorMessage2 = error.response?.data?.detail as string;
      const errorMessage = errorMessage1 || errorMessage2;
      if (errorMessage) {
        return Promise.reject(new Error(errorMessage));
      }
    }

    return Promise.reject(error);
  },
);
