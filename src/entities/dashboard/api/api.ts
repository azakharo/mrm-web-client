import {TkStatItem} from '../types';
import {axi} from './axiosSetup';
import {GetTkStatItemsResponse} from './backendTypes';

export interface GetTkStatItemsParams {
  tkId: string;
}

export const getTkStatItems = async ({
  tkId,
}: GetTkStatItemsParams): Promise<TkStatItem[]> => {
  const resp = await axi.get<GetTkStatItemsResponse>('/api/reports/stores', {
    params: {
      number: tkId,
      page: 1,
      per_page: 20,
    },
  });

  return resp.data.array;
};
