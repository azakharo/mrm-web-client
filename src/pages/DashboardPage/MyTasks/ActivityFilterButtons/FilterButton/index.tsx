import {FC} from 'react';
import {ToggleButton, Typography} from '@mui/material';

import {ActivityFilter, useFilters} from '../../FilterContext';

import {COLOR__BACK, COLOR__MAIN_BLACK, COLOR__WHITE} from '@/theme/colors';

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
  const isSelected = activityFilter === value;
  const color = isSelected ? COLOR__WHITE : COLOR__MAIN_BLACK;

  return (
    <ToggleButton
      value={value}
      selected={isSelected}
      onChange={() => {
        setActivityFilter(value);
      }}
      sx={{
        borderRadius: '20px',
        border: '1px solid transparent',
        padding: '7px 12px',
        backgroundColor: COLOR__BACK,
        color,
        '&:hover': {
          backgroundColor: hoverColor,
          '& > span': {
            color: COLOR__MAIN_BLACK,
          },
        },
        '&:active': {
          backgroundColor: hoverColor,
        },
        '&.Mui-selected': {
          backgroundColor: COLOR__MAIN_BLACK,
        },
        '&:hover.Mui-selected': {
          backgroundColor: COLOR__MAIN_BLACK,
          '& > span': {
            color: COLOR__WHITE,
          },
        },
      }}
    >
      <Typography
        variant="b2regular"
        sx={{
          color,
        }}
      >
        {valueToText[value]}
      </Typography>
    </ToggleButton>
  );
};
