import {FC} from 'react';
import {Box} from '@mui/material';

import {Value} from './Value';

import {COLOR__ERROR, COLOR__SUCCESS, COLOR__WHITE} from '@/theme/colors';

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
      <Value count={2} badgeColor={COLOR__ERROR} label="Не начато" />
      <Value count={3} badgeColor="#FF9900" label="В работе" />
      <Value count={3} badgeColor={COLOR__SUCCESS} label="Завершено" />
    </Box>
  );
};
