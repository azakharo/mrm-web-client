import {FC, ReactNode} from 'react';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import {
  Badge,
  badgeClasses,
  Box,
  ButtonBase,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';

import {statusToLabel, Task, TaskStatus} from '@entities/task';
import {Color} from '@shared/types';

import {
  COLOR__LIGHT_BACK,
  COLOR__LIGHT_GRAY,
  COLOR__SUCCESS,
  COLOR__WARNING,
  COLOR__WHITE,
} from '@/theme/colors';

const statusBadgeCommonProps = {
  variant: 'dot',
  sx: {
    [`& .${badgeClasses.dot}`]: {
      width: 12,
      height: 12,
      borderRadius: '50%',
    },
    '& .MuiBadge-badge': {
      right: 0,
      top: -3,
    },
  },
} as const;
const statusToIcon: Record<TaskStatus, ReactNode> = {
  [TaskStatus.notAssigned]: <Badge color="error" {...statusBadgeCommonProps} />,
  [TaskStatus.inProgress]: <Badge color="error" {...statusBadgeCommonProps} />,
  [TaskStatus.completed]: <Badge color="success" {...statusBadgeCommonProps} />,
};

const statusToColor: Record<TaskStatus, Color> = {
  [TaskStatus.notAssigned]: COLOR__WARNING,
  [TaskStatus.inProgress]: COLOR__WARNING,
  [TaskStatus.completed]: COLOR__SUCCESS,
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
  const {title, description, status, completionPercent} = task;

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
        <Box display="flex" alignItems="center" gap={1.5}>
          <Typography variant="b1semibold">{statusToIcon[status]}</Typography>

          <Typography variant="b1semibold">{title}</Typography>
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

            <Typography variant="b2medium" sx={{color: '#B5B5B5'}}>
              380 000₽/400 000₽
            </Typography>
          </Box>

          {status === TaskStatus.inProgress && (
            <Box {...progressBarContainerProps}>{progressBar}</Box>
          )}
        </Stack>

        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="b2regular">🕒 12 часов | до 22.01.25</Typography>

          <Stack direction="row" spacing={0.5}>
            <Typography variant="b1semibold">{completionPercent}%</Typography>
            <EastOutlinedIcon />
          </Stack>
        </Box>
      </Stack>
    </ButtonBase>
  );
};
