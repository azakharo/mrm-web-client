import {FC} from 'react';
import {Box, LinearProgress, Typography} from '@mui/material';

import {
  COLOR__INFO,
  COLOR__LIGHT_BACK,
  COLOR__LIGHT_GRAY,
  COLOR__WHITE,
} from '@/theme/colors';

export const TasksForToday: FC = () => {
  return (
    <Box
      p={2.25}
      width="fit-content"
      minWidth={330}
      sx={{
        backgroundColor: COLOR__WHITE,
        borderRadius: '15px',
      }}
    >
      <Typography variant="b1semibold" mb={1.5} component="div">
        Задачи на сегодня
      </Typography>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        <Typography variant="b2semibold" color={COLOR__LIGHT_GRAY}>
          6 задач
        </Typography>

        <Typography variant="b1semibold">25%</Typography>
      </Box>

      <LinearProgress
        variant="determinate"
        value={25}
        color="info"
        sx={{
          height: 12,
          borderRadius: '3px',
          backgroundColor: COLOR__LIGHT_BACK,
          '& .MuiLinearProgress-bar': {
            background: COLOR__INFO,
          },
        }}
      />
    </Box>
  );
};
