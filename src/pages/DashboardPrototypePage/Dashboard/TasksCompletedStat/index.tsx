import {FC} from 'react';
import {Box, Stack, Typography} from '@mui/material';

import {COLOR__WHITE} from '@/theme/colors';

export const TasksCompletedStat: FC = () => {
  return (
    <Stack
      p={2.5}
      spacing={1.5}
      sx={{
        backgroundColor: COLOR__WHITE,
        borderRadius: '15px',
      }}
    >
      <Typography variant="b1regular">🗓️ Задач выполнено</Typography>

      <Box p={1} display="flex" alignItems="center" gap={2}>
        ha-ha
      </Box>
    </Stack>
  );
};
