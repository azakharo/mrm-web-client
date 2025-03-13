import {
  axi,
  createBackendDateIsoString,
  GetListOutput,
  GetListParams,
} from '@shared/api';
import {ActivityFilter, Comment, Task} from '../types';
import {
  GetCommentsResponse,
  GetTasksResponse,
  TaskOnBackend,
} from './backendTypes';
import {mapCommentFromBackend, mapTaskFromBackend} from './dataMappers';

export interface GetTasksParams extends GetListParams {
  activityFilter?: ActivityFilter;
}

export const getTasks = async ({
  activityFilter,
  page,
  pageSize,
}: GetTasksParams = {}): Promise<GetListOutput<Task>> => {
  const resp = await axi.get<GetTasksResponse>(
    activityFilter ? '/api/tasks/by/status' : '/api/tasks',
    {
      params: {
        status: activityFilter || undefined,
        page,
        per_page: pageSize,
      },
    },
  );

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

interface CreateTaskParams {
  title: string;
  description: string;
  typeId: number;
  startDate: Date;
  endDate: Date;
  executorId?: number;
  validatorId?: number;
}

export const createTask = ({
  title,
  description,
  typeId,
  startDate,
  endDate,
  executorId,
  validatorId,
}: CreateTaskParams): Promise<void> =>
  axi.post('/api/internal/tasks', {
    title,
    description,
    type_id: typeId,
    date_from: createBackendDateIsoString(startDate),
    date_to: createBackendDateIsoString(endDate),
    executor_id: executorId ?? null,
    validator_id: validatorId ?? null,
  });

export const getTask = async (id: number): Promise<Task> => {
  const resp = await axi.get<TaskOnBackend>(`/api/tasks/${id}`);

  return mapTaskFromBackend(resp.data);
};

export interface GetCommentsParams extends GetListParams {
  taskId: number;
}

export const getComments = async ({
  taskId,
  page,
  pageSize,
}: GetCommentsParams): Promise<GetListOutput<Comment>> => {
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

export interface CreateCommentParams {
  taskId: number;
  text: string;
}

export const createComment = async ({
  taskId,
  text,
}: CreateCommentParams): Promise<void> => {
  return axi.post(`/api/tasks/${taskId}/comments`, {
    text,
  });
};
