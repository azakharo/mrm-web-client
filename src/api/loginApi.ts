import {AxiosResponse} from 'axios';

import {axi} from './loginApiAxiosSetup';

import {LoginProvider} from '@/types/auth';

export const getLoginProviders = async (): Promise<LoginProvider[]> => {
  const response = await axi.get<
    Array<{
      id: number;
      name: string;
      app_id: string;
      auth_page_url: string;
    }>
  >('/api/oauth/providers');

  return response.data.map(({id, name, app_id, auth_page_url}) => ({
    id,
    appName: name,
    appId: app_id,
    authPageUrl: auth_page_url,
  }));
};

export const getAuthToken = async (
  loginProviderId: number,
  authCode: string,
): Promise<string> => {
  const response = await axi.post<
    {
      auth_code: string;
    },
    AxiosResponse<{
      access_token: string;
    }>
  >(`/api/oauth/callback/${loginProviderId}`, {
    auth_code: authCode,
  });

  return response.data.access_token;
};
