import React, {createContext, FC, ReactNode, useMemo} from 'react';
import {useQueryState} from 'react-router-use-location-state';

export enum ActivityFilter {
  all = 'all',
  active = 'active',
  archive = 'archive',
}

export interface ContextProps {
  activityFilter: ActivityFilter | '';
  setActivityFilter: (category: ActivityFilter | '') => void;
}

export const FilterContext = createContext<ContextProps>({
  activityFilter: '',
  setActivityFilter: () => {},
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

  const contextValue = useMemo(
    () => ({
      activityFilter,
      setActivityFilter,
    }),
    [activityFilter, setActivityFilter],
  );

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};
