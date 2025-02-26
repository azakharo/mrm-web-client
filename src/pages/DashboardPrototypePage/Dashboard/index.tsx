import {FC} from 'react';
import {Box} from '@mui/material';

import {Header} from '../Header';
import {TasksCompletedStat} from './TasksCompletedStat';

export const Dashboard: FC = () => {
  return (
    <>
      <Header title="Дашборд" />

      <Box px={4}>
        <Box width="fit-content">
          <TasksCompletedStat />
        </Box>
      </Box>
    </>
  );
};
