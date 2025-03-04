import {FC} from 'react';
import {Badge, badgeClasses, Box, Stack, Typography} from '@mui/material';

import {COLOR__LIGHT_GRAY, COLOR__LINE} from '@/theme/colors';
import {Color} from '@/types/ui';

const badgeSize = 10;

interface Props {
  count: number;
  badgeColor: Color;
  label: string;
}

export const Value: FC<Props> = ({count, badgeColor, label}) => {
  return (
    <Badge
      variant="dot"
      sx={{
        [`& .${badgeClasses.dot}`]: {
          width: badgeSize,
          height: badgeSize,
          borderRadius: '50%',
          backgroundColor: badgeColor,
        },
        '& .MuiBadge-badge': {
          right: 16,
          top: 16,
        },
      }}
    >
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
    </Badge>
  );
};
