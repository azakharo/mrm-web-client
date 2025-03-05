import {FC} from 'react';
import {Box, Stack, Typography} from '@mui/material';

import {Color} from '@shared/types';

import {COLOR__LIGHT_GRAY, COLOR__LINE} from '@/theme/colors';

interface Props {
  count: number;
  backgroundColor: Color;
  label: string;
}

export const Value: FC<Props> = ({count, backgroundColor, label}) => {
  return (
    <Box
      borderRadius="15px"
      border={`0.5px solid ${COLOR__LINE}`}
      display="flex"
      justifyContent="center"
      alignItems="center"
      px={2.5}
      py={4}
      minWidth={120}
      sx={{backgroundColor}}
    >
      <Stack spacing={0.5} alignItems="center">
        <Typography variant="h3bold">{count}</Typography>

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
    </Box>
  );
};
