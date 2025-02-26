import {FC} from 'react';
import {Box, Typography} from '@mui/material';

import {COLOR__LIGHT_GRAY} from '@/theme/colors';

interface Props {
  count: number;
  label: string;
}

export const StatForPeriod: FC<Props> = ({count, label}) => {
  return (
    <Box display="flex" flexWrap="nowrap" alignItems="flex-end" py={1} gap={1}>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: 32,
          color: '#3991E5',
        }}
      >
        {count}
      </Typography>

      <Typography
        sx={{
          fontWeight: 400,
          fontSize: 16,
          lineHeight: '16px',
          color: COLOR__LIGHT_GRAY,
        }}
        noWrap
      >
        {label}
      </Typography>
    </Box>
  );
};
