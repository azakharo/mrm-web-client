import {axi, GetListInputParams, GetListOutput} from '@shared/api';
import {Task} from '../types';
import {GetTasksBackendResponse} from './backendTypes';
import {mapFromBackend} from './dataMappers';

export type GetTasksInputParams = GetListInputParams;

export const getTasks = async ({
  page,
  pageSize,
}: GetTasksInputParams = {}): Promise<GetListOutput<Task>> => {
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
