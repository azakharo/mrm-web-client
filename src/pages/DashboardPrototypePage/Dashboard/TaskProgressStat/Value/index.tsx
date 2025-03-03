import {FC} from 'react';
import {Badge, Box, Stack, Typography} from '@mui/material';

import {COLOR__LIGHT_GRAY, COLOR__LINE} from '@/theme/colors';

interface Props {
  count: number;
  badgeColor: string;
  label: string;
}

export const Value: FC<Props> = ({count, badgeColor, label}) => {
  console.log({badgeColor});

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
    >
      <Badge
        badgeContent=""
        color="success"
        overlap="circular"
        sx={{transform: 'translate(60px, -60px)'}}
      ></Badge>

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
