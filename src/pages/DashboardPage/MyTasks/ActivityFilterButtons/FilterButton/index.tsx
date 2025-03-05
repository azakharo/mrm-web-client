import {FC} from 'react';
import {ToggleButton, Typography} from '@mui/material';

import {ActivityFilter, useFilters} from '../../FilterContext';

import {COLOR__BACK, COLOR__LINE} from '@/theme/colors';

const hoverColor = '#E5E7ED';

const valueToText: Record<ActivityFilter, string> = {
  [ActivityFilter.all]: '📝️ Все',
  [ActivityFilter.active]: '💪 В работе',
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
      sx={{
        borderRadius: '20px',
        border: '1px solid transparent',
        padding: '7px 12px',
        backgroundColor: COLOR__BACK,
        '&:hover': {
          backgroundColor: hoverColor,
        },
        '&:active': {
          backgroundColor: hoverColor,
        },
        '&.Mui-selected': {
          backgroundColor: COLOR__LINE,
        },
      }}
    >
      <Typography variant="b2regular">{valueToText[value]}</Typography>
    </ToggleButton>
  );
};
