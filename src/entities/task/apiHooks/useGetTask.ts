import {useQuery, UseQueryResult} from '@tanstack/react-query';

import {QueryOptionsForOne} from '@shared/api';
import {getTask} from '../api';
import {QUERY__TASK_ONE, QUERY__TASK_ROOT} from '../queryKeys';
import {Task} from '../types';

export const useGetTask = <SelectedData = Task>(
  id: number,
  options?: QueryOptionsForOne<Task, SelectedData>,
): UseQueryResult<SelectedData> => {
  return useQuery({
    queryKey: [QUERY__TASK_ROOT, QUERY__TASK_ONE, id],
    queryFn: () => getTask(id),
    ...options,
  });
};
