import {
  getAuthTokenFromLocalStorage,
  remAuthTokenFromLocalStorage,
} from '@features/auth';
import axios, {isAxiosError} from 'axios';

import {getErrorMessageFromApiError} from './helpers';

import {isDevelopment} from '@/shared/constants';

export const axi = axios.create({
  baseURL: (isDevelopment ? '' : import.meta.env.VITE_API_URL) + '/mrm-tasks',
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

      const errorMessage = getErrorMessageFromApiError(error);

      if (errorMessage) {
        return Promise.reject(new Error(errorMessage));
      }
    }

    return Promise.reject(error);
  },
);
