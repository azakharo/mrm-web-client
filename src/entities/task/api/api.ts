import {axi, GetListInputParams, GetListOutput} from '@shared/api';
import {Task} from '../types';
import {GetTasksBackendResponse} from './backendTypes';
import {mapFromBackend} from './dataMappers';

type GetUsersInputParams = GetListInputParams;

export const getTasks = async ({
  page,
  pageSize,
}: GetUsersInputParams = {}): Promise<GetListOutput<Task>> => {
  const resp = await axi.get<GetTasksBackendResponse>('/api/tasks', {
    params: {
      page,
      per_page: pageSize,
    },
  });

  const {
    array,
    total,
    total_pages,
    page: pageFromBackend,
    items_per_page: pageSizeFromBackend,
  } = resp.data;
  const items = array.map(item => mapFromBackend(item));

  return {
    items,
    page: pageFromBackend,
    pageSize: pageSizeFromBackend,
    total,
    totalPages: total_pages,
  };
};
