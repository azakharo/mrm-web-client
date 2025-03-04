import {FC, ReactNode} from 'react';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import {
  Box,
  ButtonBase,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';

import {
  COLOR__LIGHT_BACK,
  COLOR__LIGHT_GRAY,
  COLOR__WARNING,
  COLOR__WHITE,
} from '@/theme/colors';
import {Task, TaskStatus} from '@/types/tasks';

const statusToIcon: Record<TaskStatus, ReactNode> = {
  [TaskStatus.inProgress]: '🔥',
  [TaskStatus.completed]: '✅',
};

const statusToColor: Record<TaskStatus, string> = {
  [TaskStatus.inProgress]: 'warning',
  [TaskStatus.completed]: 'success',
};

const statusToLabel: Record<TaskStatus, string> = {
  [TaskStatus.inProgress]: 'В процессе',
  [TaskStatus.completed]: 'Выполнено',
};

interface Props {
  task: Task;
}

export const TaskCard: FC<Props> = ({task}) => {
  const {name, description, status, completionPercent} = task;

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
          <Typography variant="b1semibold">{statusToIcon[status]}</Typography>

          <Typography variant="b1semibold">{name}</Typography>
        </Box>

        <Typography variant="b2regular" sx={{color: COLOR__LIGHT_GRAY}}>
          {description}
        </Typography>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={1}
        >
          <Typography variant="b2semibold" sx={{color: statusToColor[status]}}>
            {statusToLabel[status]}
          </Typography>

          <Typography variant="b1semibold">{completionPercent}%</Typography>
        </Box>

        {status === TaskStatus.inProgress && (
          <LinearProgress
            variant="determinate"
            value={completionPercent}
            color="info"
            sx={{
              // height: 12,
              // borderRadius: '3px',
              backgroundColor: COLOR__LIGHT_BACK,
              '& .MuiLinearProgress-bar': {
                background: COLOR__WARNING,
              },
            }}
          />
        )}

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
