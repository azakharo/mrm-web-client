import {FC} from 'react';
import {Avatar, Stack, Typography} from '@mui/material';

import {COLOR__LIGHT_GRAY} from '@/theme/colors';

const avatarSize = 24;

interface Props {
  responsibility: string;
  name: string;
  position: string;
}

export const PersonItem: FC<Props> = ({responsibility, name, position}) => {
  return (
    <Stack spacing={1}>
      <Typography variant="b3semibold">{responsibility}</Typography>

      <Stack direction="row" spacing={1} alignItems="center">
        <Avatar alt={name} sx={{width: avatarSize, height: avatarSize}} />

        <Typography variant="b2regular">{name}</Typography>
      </Stack>

      <Typography variant="b3regular" sx={{color: COLOR__LIGHT_GRAY}}>
        {position}
      </Typography>
    </Stack>
  );
};
