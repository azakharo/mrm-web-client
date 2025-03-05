import React, {createContext, FC, ReactNode, useMemo} from 'react';
import {useQueryState} from 'react-router-use-location-state';

import {TaskStatus} from '@/types/tasks';

export enum ActivityFilter {
  all = 'all',
  active = 'active',
  archive = 'archive',
}

export interface ContextProps {
  activityFilter: ActivityFilter | '';
  setActivityFilter: (category: ActivityFilter | '') => void;

  statusFilter: TaskStatus | '';
  setStatusFilter: (status: TaskStatus | '') => void;
}

export const FilterContext = createContext<ContextProps>({
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
  const [activityFilter, setActivityFilter] = useQueryState<
    ActivityFilter | ''
  >('activity', ActivityFilter.all);

  const [statusFilter, setStatusFilter] = useQueryState<TaskStatus | ''>(
    'status',
    '',
  );

  const contextValue = useMemo(
    () => ({
      activityFilter,
      setActivityFilter,
      statusFilter,
      setStatusFilter,
    }),
    [activityFilter, setActivityFilter, statusFilter, setStatusFilter],
  );

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};
