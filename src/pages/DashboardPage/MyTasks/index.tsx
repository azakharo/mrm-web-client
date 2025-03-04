import {FC} from 'react';
import {Box} from '@mui/material';

import {Header} from '../Header';
import {FilterProvider} from './FilterContext';

export const MyTasks: FC = () => {
  return (
    <FilterProvider>
      <Header title="Мои задачи" />

      <Box px={4}>
        <Box display="flex" gap={4} flexWrap="wrap" mb={4}>
          <div>ha</div>
          <div>ha</div>
          <div>ha</div>
        </Box>
      </Box>
    </FilterProvider>
  );
};
