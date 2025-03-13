import {FC} from 'react';
import {Stack} from '@mui/material';

import {ActivityFilter} from '@entities/task';
import {FilterButton} from './FilterButton';

export const ActivityFilterButtons: FC = () => {
  return (
    <Stack direction="row" gap={1.5}>
      {Object.values(ActivityFilter).map(val => (
        <FilterButton key={val} value={val} />
      ))}
    </Stack>
  );
};
