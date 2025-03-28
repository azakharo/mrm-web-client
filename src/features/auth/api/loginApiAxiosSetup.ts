import axios, {isAxiosError} from 'axios';

import {getErrorMessageFromApiError} from '@shared/api';
import {isDevelopment} from '@shared/constants';

export const axi = axios.create({
  baseURL: (isDevelopment ? '' : import.meta.env.VITE_API_URL) + '/mrm-tasks',
});

axi.interceptors.response.use(
  response => response,
  (error: unknown) => {
    if (isAxiosError(error)) {
      const errorMessage = getErrorMessageFromApiError(error);

      if (errorMessage) {
        return Promise.reject(new Error(errorMessage));
      }
    }

    return Promise.reject(error);
  },
);
