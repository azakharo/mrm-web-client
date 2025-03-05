import {FC, ReactNode} from 'react';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import {
  Box,
  ButtonBase,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';

import {Task, TaskStatus} from '@entities/task';
import {Color} from '@shared/types';

import {
  COLOR__LIGHT_BACK,
  COLOR__LIGHT_GRAY,
  COLOR__SUCCESS,
  COLOR__WARNING,
  COLOR__WHITE,
} from '@/theme/colors';

const statusToIcon: Record<TaskStatus, ReactNode> = {
  [TaskStatus.inProgress]: '🔥',
  [TaskStatus.completed]: '✅',
};

const statusToColor: Record<TaskStatus, Color> = {
  [TaskStatus.inProgress]: COLOR__WARNING,
  [TaskStatus.completed]: COLOR__SUCCESS,
};

const statusToLabel: Record<TaskStatus, string> = {
  [TaskStatus.inProgress]: 'В процессе',
  [TaskStatus.completed]: 'Выполнено',
};

const progressBarContainerProps = {
  minHeight: 23,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
} as const;

interface Props {
  task: Task;
}

export const TaskCard: FC<Props> = ({task}) => {
  const {name, description, status, completionPercent} = task;

  const progressBar = (
    <LinearProgress
      variant="determinate"
      value={completionPercent}
      color="info"
      sx={{
        height: 6,
        borderRadius: '3px',
        backgroundColor: COLOR__LIGHT_BACK,
        '& .MuiLinearProgress-bar': {
          background: COLOR__WARNING,
        },
      }}
    />
  );

  return (
    <ButtonBase
      onClick={() => {
        alert(
          'Ещё не реализовано - по клику, возможно, будет переход на отдельную страницу задачи',
        );
      }}
    >
      <Stack
        p={2.25}
        spacing={1}
        width="fit-content"
        maxWidth={360}
        sx={{
          backgroundColor: COLOR__WHITE,
          borderRadius: '15px',
        }}
      >
        <Box display="flex">
          <Typography variant="b1semibold">
            {statusToIcon[status]}&nbsp;
          </Typography>

          <Typography variant="b1semibold">{name}</Typography>
        </Box>

        <Typography
          variant="b2regular"
          sx={{color: COLOR__LIGHT_GRAY}}
          textAlign="left"
          display="block"
        >
          {description}
        </Typography>

        <Stack>
          {/* Here we render a hidden progress bar.
          It's necessary for proper vertical alignment of the components.
           The progress bar's height equals to the height of the status text. */}
          {status !== TaskStatus.inProgress && (
            <Box {...progressBarContainerProps} visibility="hidden">
              {progressBar}
            </Box>
          )}

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              variant="b2semibold"
              sx={{color: statusToColor[status]}}
            >
              {statusToLabel[status]}
            </Typography>

            <Typography variant="b1semibold">{completionPercent}%</Typography>
          </Box>

          {status === TaskStatus.inProgress && (
            <Box {...progressBarContainerProps}>{progressBar}</Box>
          )}
        </Stack>

        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="b3regular" sx={{color: COLOR__LIGHT_GRAY}}>
            380 000₽/400 000₽
          </Typography>

          <EastOutlinedIcon />
        </Box>
      </Stack>
    </ButtonBase>
  );
};
