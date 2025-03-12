import {useQuery, UseQueryResult} from '@tanstack/react-query';

import {GetListOutput} from '@shared/api';
import {getComments, GetCommentsParams} from '../api';
import {QUERY__TASK_COMMENTS, QUERY__TASK_ROOT} from '../queryKeys';
import {Comment} from '../types';

import {QueryOptionsForList} from '@/shared/api';

export const useGetComments = <SelectedData = GetListOutput<Comment>>(
  params: GetCommentsParams,
  options?: QueryOptionsForList<Comment, SelectedData>,
): UseQueryResult<SelectedData> => {
  return useQuery({
    queryKey: [QUERY__TASK_ROOT, QUERY__TASK_COMMENTS, params],
    queryFn: () => getComments(params),
    ...options,
  });
};
