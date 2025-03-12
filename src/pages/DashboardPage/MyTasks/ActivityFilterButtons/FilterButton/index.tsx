import {FC} from 'react';

import {TabButton} from '@shared/components';
import {ActivityFilter, useFilters} from '../../FilterContext';

const valueToText: Record<ActivityFilter, string> = {
  [ActivityFilter.all]: 'Все',
  [ActivityFilter.notStarted]: 'Не начаты',
  [ActivityFilter.active]: 'В работе',
  [ActivityFilter.finished]: 'Завершены',
};

interface Props {
  value: ActivityFilter;
}

export const FilterButton: FC<Props> = ({value}) => {
  const {activityFilter, setActivityFilter} = useFilters();
  const isSelected = activityFilter === value;

  const handleSelect = () => {
    setActivityFilter(value);
  };

  return (
    <TabButton
      value={value}
      label={valueToText[value]}
      isSelected={isSelected}
      onSelect={handleSelect}
    />
  );
};
