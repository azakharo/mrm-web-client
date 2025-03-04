import {FC} from 'react';
import {ToggleButton} from '@mui/material';

import {ActivityFilter, useFilters} from '../../FilterContext';

const valueToText: Record<ActivityFilter, string> = {
  [ActivityFilter.all]: '📝️ Все',
  [ActivityFilter.active]: '💪 Активные',
  [ActivityFilter.archive]: '📦 Архив',
};

interface Props {
  value: ActivityFilter;
}

export const FilterButton: FC<Props> = ({value}) => {
  const {activityFilter, setActivityFilter} = useFilters();

  return (
    <ToggleButton
      value={value}
      selected={activityFilter === value}
      onChange={() => {
        setActivityFilter(value);
      }}
    >
      {valueToText[value]}
    </ToggleButton>
  );
};
