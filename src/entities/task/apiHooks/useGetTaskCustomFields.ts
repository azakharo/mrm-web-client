import {useQuery} from '@tanstack/react-query';

import {QueryOptionsForOne} from '@shared/api';
import {getTaskCustomFields} from '../api';
import {QUERY__TASK_CUSTOM_FIELDS, QUERY__TASK_ROOT} from '../queryKeys';
import {TaskCustomField} from '../types';

export const useGetTaskCustomFields = <SelectedData = TaskCustomField[]>(
  taskId: number,
  options?: QueryOptionsForOne<TaskCustomField[], SelectedData>,
) => {
  return useQuery({
    queryKey: [QUERY__TASK_ROOT, QUERY__TASK_CUSTOM_FIELDS, taskId],
    queryFn: () => getTaskCustomFields(taskId),
    ...options,
  });
};
