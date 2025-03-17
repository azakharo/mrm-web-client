import {useQuery} from '@tanstack/react-query';

import {QueryOptionsForOne} from '@shared/api';
import {getTaskActions} from '../api';
import {QUERY__TASK_ACTIONS, QUERY__TASK_ROOT} from '../queryKeys';
import {TaskAction} from '../types';

export const useGetTaskActions = <SelectedData = TaskAction[]>(
  taskId: number,
  options?: QueryOptionsForOne<TaskAction[], SelectedData>,
) => {
  return useQuery({
    queryKey: [QUERY__TASK_ROOT, QUERY__TASK_ACTIONS, taskId],
    queryFn: () => getTaskActions(taskId),
    ...options,
  });
};
