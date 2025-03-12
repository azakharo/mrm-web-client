import {axi, GetListInputParams, GetListOutput} from '@shared/api';
import {Comment, Task} from '../types';
import {
  GetCommentsResponse,
  GetTasksResponse,
  TaskOnBackend,
} from './backendTypes';
import {mapCommentFromBackend, mapTaskFromBackend} from './dataMappers';

export type GetTasksInputParams = GetListInputParams;

export const getTasks = async ({
  page,
  pageSize,
}: GetTasksInputParams = {}): Promise<GetListOutput<Task>> => {
  const resp = await axi.get<GetTasksResponse>('/api/tasks', {
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
  const items = array.map(item => mapTaskFromBackend(item));

  return {
    items,
    page: pageFromBackend,
    pageSize: pageSizeFromBackend,
    total,
    totalPages: total_pages,
  };
};

export const createTask = (title: string, description: string): Promise<void> =>
  axi.post('/api/internal/tasks', {
    title,
    type_id: 1,
    description,
    date_from: '2025-04-06T13:05:56.134',
    date_to: '2025-04-09T13:05:56.134',
    executor_id: null,
    validator_id: null,
  });

export const getTask = async (id: number): Promise<Task> => {
  const resp = await axi.get<TaskOnBackend>(`/api/tasks/${id}`);

  return mapTaskFromBackend(resp.data);
};

export interface GetCommentsInputParams extends GetListInputParams {
  taskId: number;
}

export const getComments = async ({
  taskId,
  page,
  pageSize,
}: GetCommentsInputParams): Promise<GetListOutput<Comment>> => {
  const resp = await axi.get<GetCommentsResponse>(
    `/api/tasks/${taskId}/comments`,
    {
      params: {
        page,
        per_page: pageSize,
      },
    },
  );

  const {comments, pagination} = resp.data;
  const {
    total,
    total_pages,
    page: pageFromBackend,
    items_per_page: pageSizeFromBackend,
  } = pagination;

  const items = comments.map(item => mapCommentFromBackend(item));

  return {
    items,
    page: pageFromBackend,
    pageSize: pageSizeFromBackend,
    total,
    totalPages: total_pages,
  };
};
