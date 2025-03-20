import {useQuery} from '@tanstack/react-query';

import {QueryOptionsForOne} from '@shared/api';
import {getTkStatItems, GetTkStatItemsParams} from '../api';
import {QUERY__DASHBOARD_ROOT, QUERY__TK_STAT} from '../queryKeys';
import {TkStatItem} from '../types';

export const useGetTkStatItems = <SelectedData = TkStatItem[]>(
  params: GetTkStatItemsParams,
  options?: QueryOptionsForOne<TkStatItem[], SelectedData>,
) => {
  return useQuery({
    queryKey: [QUERY__DASHBOARD_ROOT, QUERY__TK_STAT, params],
    queryFn: () => getTkStatItems(params),
    ...options,
  });
};
