import {useMutation, useQueryClient} from '@tanstack/react-query';

import {createTaskAction, CreateTaskActionParams} from '../api';
import {QUERY__TASK_ACTIONS, QUERY__TASK_ROOT} from '../queryKeys';

export const useCreateTaskAction = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: CreateTaskActionParams) => createTaskAction(params),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [QUERY__TASK_ROOT, QUERY__TASK_ACTIONS],
      });
    },
  });
};
