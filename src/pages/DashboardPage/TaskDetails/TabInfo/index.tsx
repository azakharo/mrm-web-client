import {FC} from 'react';
import {Box, Typography} from '@mui/material';

import {Task} from '@entities/task';

interface Props {
  task: Task;
}

export const TabInfo: FC<Props> = ({task}) => {
  const {startDate} = task;

  return (
    <Box>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: 32,
        }}
      >
        Дата начала: {startDate.toLocaleDateString()}
      </Typography>
    </Box>
  );
};
