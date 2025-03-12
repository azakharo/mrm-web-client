import {useQuery, UseQueryResult} from '@tanstack/react-query';

import {GetListOutput} from '@shared/api';
import {getTasks, GetTasksParams} from '../api';
import {QUERY__TASK_LIST, QUERY__TASK_ROOT} from '../queryKeys';
import {Task} from '../types';

import {QueryOptionsForList} from '@/shared/api';

export const useGetTasks = <SelectedData = GetListOutput<Task>>(
  params?: GetTasksParams,
  options?: QueryOptionsForList<Task, SelectedData>,
): UseQueryResult<SelectedData> => {
  return useQuery({
    queryKey: [QUERY__TASK_ROOT, QUERY__TASK_LIST, params],
    queryFn: () => getTasks(params),
    ...options,
  });
};
