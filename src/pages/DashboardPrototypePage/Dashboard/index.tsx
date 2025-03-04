import {FC} from 'react';
import {Box} from '@mui/material';

import {Header} from '../Header';
import {TaskProgressStat} from './TaskProgressStat';
import {Tasks} from './Tasks';
import {TasksForToday} from './TasksForToday';
import {TkIndex} from './TkIndex';

export const Dashboard: FC = () => {
  return (
    <>
      <Header title="Дашборд" />

      <Box px={4}>
        <Box display="flex" gap={4} flexWrap="wrap" mb={4}>
          <TkIndex />
          <TasksForToday />
          <TaskProgressStat />
        </Box>

        <Tasks />
      </Box>
    </>
  );
};
