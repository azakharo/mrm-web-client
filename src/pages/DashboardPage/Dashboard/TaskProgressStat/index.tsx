import {FC} from 'react';
import {Box} from '@mui/material';

import {Value} from './Value';

import {
  COLOR__ERROR_LIGHT,
  COLOR__SUCCESS_LIGHT,
  COLOR__WARNING_LIGHT,
  COLOR__WHITE,
} from '@/theme/colors';

export const TaskProgressStat: FC = () => {
  return (
    <Box
      p={2.25}
      sx={{
        backgroundColor: COLOR__WHITE,
        borderRadius: '15px',
      }}
      display="flex"
      gap={1.5}
    >
      <Value count={2} backgroundColor={COLOR__ERROR_LIGHT} label="Не начато" />
      <Value
        count={3}
        backgroundColor={COLOR__WARNING_LIGHT}
        label="В работе"
      />
      <Value
        count={3}
        backgroundColor={COLOR__SUCCESS_LIGHT}
        label="Завершено"
      />
    </Box>
  );
};
