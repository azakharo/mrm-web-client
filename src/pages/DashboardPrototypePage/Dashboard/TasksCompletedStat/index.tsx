import {FC} from 'react';
import {Box, Stack, Typography} from '@mui/material';

import {StatForPeriod} from './StatForPeriod';

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

      <Box display="flex" gap={8}>
        <StatForPeriod count={17} label={'За месяц'} />
        <StatForPeriod count={5} label={'За неделю'} />
        <StatForPeriod count={1} label={'Сегодня'} />
      </Box>
    </Stack>
  );
};
