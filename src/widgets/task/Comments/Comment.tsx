import {FC} from 'react';
import {Avatar, Stack, Typography} from '@mui/material';
import {format} from 'date-fns';

import {Comment} from '@entities/task';
import {DATETIME_FORMAT} from '@shared/constants';

import {COLOR__LIGHT_GRAY} from '@/theme/colors';

const avatarSize = 24;

interface Props {
  comment: Comment;
}

export const CommentWidget: FC<Props> = ({comment}) => {
  const {author, text, created} = comment;

  return (
    <Stack spacing={0.5}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Avatar alt={author} sx={{width: avatarSize, height: avatarSize}} />

        <Typography variant="b3semibold">{author}</Typography>
      </Stack>

      <Typography variant="b2regular">{text}</Typography>

      <Typography variant="b3regular" sx={{color: COLOR__LIGHT_GRAY}}>
        {format(created, DATETIME_FORMAT)}
      </Typography>
    </Stack>
  );
};
