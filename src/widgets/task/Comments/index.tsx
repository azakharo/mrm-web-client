import {FC, useState} from 'react';
import {Stack, TextField, Typography} from '@mui/material';

import {useGetComments} from '@entities/task';
import {CommentWidget} from './Comment';

import {COLOR__WHITE} from '@/theme/colors';
import {SomethingWentWrong} from '@/widgets/common';

interface Props {
  taskId: number;
}

export const Comments: FC<Props> = ({taskId}) => {
  const [text, setText] = useState('');
  const [page] = useState(1);
  const [pageSize] = useState(10);

  const {
    data: comments,
    isPending,
    error,
  } = useGetComments({taskId, page, pageSize});

  if (isPending) {
    // TODO improve loading UI
    return 'Загрузка...';
  }

  if (error) {
    return <SomethingWentWrong />;
  }

  const {items} = comments;

  return (
    <Stack
      p={3}
      spacing={2}
      sx={{
        backgroundColor: COLOR__WHITE,
        borderRadius: '15px',
      }}
    >
      <Typography variant="b2semibold">Активность</Typography>

      <form
        onSubmit={event => {
          event.preventDefault();
          console.log({text});
          setText('');
        }}
        noValidate
      >
        <TextField
          value={text}
          onChange={event => {
            setText(event.target.value);
          }}
          placeholder="Добавить комментарий"
          fullWidth
        />
      </form>

      <Stack spacing={2}>
        {items.map(comment => (
          <CommentWidget key={comment.id} comment={comment} />
        ))}
      </Stack>
    </Stack>
  );
};
