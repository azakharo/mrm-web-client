import {FC} from 'react';
import {Box} from '@mui/material';

import {Value} from './Value';

import {COLOR__WHITE} from '@/theme/colors';

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
      <Value count={2} backgroundColor="#FDEBED" label="Не начато" />
      <Value count={3} backgroundColor="#FAEED8" label="В работе" />
      <Value count={3} backgroundColor="#E4F6DF" label="Завершено" />
    </Box>
  );
};
