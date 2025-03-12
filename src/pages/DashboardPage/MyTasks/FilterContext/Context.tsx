import React, {createContext, FC, ReactNode, useCallback, useMemo} from 'react';
import {useQueryState} from 'react-router-use-location-state';

import {TaskStatus} from '@entities/task';

export enum ActivityFilter {
  all = 'all',
  notStarted = 'not-started',
  active = 'active',
  finished = 'finished',
}

const DEFAULT_PAGE = 1;
const DEFAULT_PAGE_SIZE = 9;

export interface ContextProps {
  page: number;
  setPage: (value: number) => void;

  pageSize: number;
  setPageSize: (value: number) => void;

  activityFilter: ActivityFilter | '';
  setActivityFilter: (category: ActivityFilter | '') => void;

  statusFilter: TaskStatus | '';
  setStatusFilter: (status: TaskStatus | '') => void;
}

export const FilterContext = createContext<ContextProps>({
  page: DEFAULT_PAGE,
  setPage: () => {},
  pageSize: DEFAULT_PAGE_SIZE,
  setPageSize: () => {},
  activityFilter: '',
  setActivityFilter: () => {},
  statusFilter: '',
  setStatusFilter: () => {},
});

interface Props {
  children: ReactNode;
}

export const FilterProvider: FC<React.PropsWithChildren<Props>> = ({
  children,
}) => {
  const [page, setPage] = useQueryState<number>('page', DEFAULT_PAGE);
  const [pageSize, setPageSize] = useQueryState<number>(
    'pageSize',
    DEFAULT_PAGE_SIZE,
  );
  const handlePageSizeChange = useCallback(
    (newPageSize: number) => {
      setPage(DEFAULT_PAGE);
      setPageSize(newPageSize);
    },
    [setPage, setPageSize],
  );

  const [activityFilter, setActivityFilter] = useQueryState<
    ActivityFilter | ''
  >('activity', ActivityFilter.all);

  const [statusFilter, setStatusFilter] = useQueryState<TaskStatus | ''>(
    'status',
    '',
  );

  const contextValue = useMemo(
    () => ({
      page,
      setPage,
      pageSize,
      setPageSize: handlePageSizeChange,
      activityFilter,
      setActivityFilter,
      statusFilter,
      setStatusFilter,
    }),
    [
      activityFilter,
      setActivityFilter,
      statusFilter,
      setStatusFilter,
      page,
      setPage,
      pageSize,
      handlePageSizeChange,
    ],
  );

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};
