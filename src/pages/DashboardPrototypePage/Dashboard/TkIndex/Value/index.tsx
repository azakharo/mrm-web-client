import {FC} from 'react';
import {Stack, Typography} from '@mui/material';

import {COLOR__LIGHT_GRAY} from '@/theme/colors';

interface Props {
  count: number;
  countColor: string;
  label: string;
}

export const Value: FC<Props> = ({count, countColor, label}) => {
  return (
    <Stack>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: 46,
          lineHeight: '62px',
          color: countColor,
        }}
      >
        {count}
      </Typography>

      <Typography
        variant="b2regular"
        sx={{
          color: COLOR__LIGHT_GRAY,
        }}
        noWrap
      >
        {label}
      </Typography>
    </Stack>
  );
};
