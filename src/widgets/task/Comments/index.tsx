import {ChangeEvent, FC, useState} from 'react';
import {Box, Stack, TextField, Typography} from '@mui/material';
import {useSnackbar} from 'notistack';

import {useCreateComment, useGetComments} from '@entities/task';
import {Pagination} from '@shared/components';
import {CommentWidget} from './Comment';

import {COLOR__WHITE} from '@/theme/colors';
import {SomethingWentWrong} from '@/widgets/common';

const pageSize = 10;

interface Props {
  taskId: number;
}

export const Comments: FC<Props> = ({taskId}) => {
  const {enqueueSnackbar} = useSnackbar();
  const [text, setText] = useState('');
  const [page, setPage] = useState(1);

  const {
    data: comments,
    isPending: isLoading,
    error,
  } = useGetComments({taskId, page, pageSize});

  const {mutate, isPending: isCreating} = useCreateComment();

  if (isLoading) {
    // TODO improve loading UI
    return <Box p={3}>Загрузка...</Box>;
  }

  if (error) {
    return <SomethingWentWrong />;
  }

  const {items, totalPages} = comments;

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

          mutate(
            {
              taskId,
              text,
            },
            {
              onSuccess: () => {
                setText('');
              },
              onError: () => {
                enqueueSnackbar(
                  'Не удалось создать комментарий. Попробуйте ещё раз.',
                  {variant: 'error'},
                );
              },
            },
          );
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
          disabled={isCreating}
        />
      </form>

      <Stack spacing={2}>
        {items.map(comment => (
          <CommentWidget key={comment.id} comment={comment} />
        ))}
      </Stack>

      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={page}
          onChange={(_event: ChangeEvent<unknown>, value: number) => {
            setPage(value);
          }}
        />
      )}
    </Stack>
  );
};
