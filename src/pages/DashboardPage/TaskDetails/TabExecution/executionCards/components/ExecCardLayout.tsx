import {FC, ReactNode} from 'react';
import {Box, Typography} from '@mui/material';
import isNil from 'lodash/isNil';

import {StatusString, TaskProgress, TaskStatus} from '@entities/task';
import {CardBox} from '@shared/components';

interface Props {
  execRightPart?: ReactNode;
  status: TaskStatus;
  progress?: number;
  thirdRow?: ReactNode;
}

export const ExecCardLayout: FC<Props> = ({
  status,
  execRightPart,
  progress,
  thirdRow,
}) => {
  return (
    <CardBox>
      {/* 1st row */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={4}
        mb={2}
      >
        <Typography variant="b2semibold">Выполнение</Typography>

        {execRightPart}
      </Box>

      {/* 2nd row */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={4}
      >
        <StatusString status={status} variant="b1semibold" />

        {!isNil(progress) && (
          <Typography variant="b1semibold">{progress}%</Typography>
        )}
      </Box>

      {/* 3rd row (optional) - progress bar */}
      {!isNil(progress) && <TaskProgress progress={progress} status={status} />}

      {/* 3rd row (optional) - any other stuff */}
      {thirdRow}
    </CardBox>
  );
};
