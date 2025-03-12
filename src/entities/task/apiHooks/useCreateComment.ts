import {useMutation, useQueryClient} from '@tanstack/react-query';

import {createComment, CreateCommentParams} from '../api';
import {QUERY__TASK_COMMENTS, QUERY__TASK_ROOT} from '../queryKeys';

export const useCreateComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: CreateCommentParams) => createComment(params),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [QUERY__TASK_ROOT, QUERY__TASK_COMMENTS],
      });
    },
  });
};
