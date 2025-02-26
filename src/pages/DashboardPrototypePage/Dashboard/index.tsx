import {FC} from 'react';
import {Box} from '@mui/material';

import {Header} from '../Header';
import {TasksCompletedStat} from './TasksCompletedStat';

export const Dashboard: FC = () => {
  return (
    <>
      <Header title="Дашборд" />

      <Box px={4}>
        <Box width={{mobile: '100%', tablet: '50%', desktop: '50%'}}>
          <TasksCompletedStat />
        </Box>
      </Box>
    </>
  );
};
