import {FC, useState} from 'react';
import {create, InstanceProps} from 'react-modal-promise';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from '@mui/material';
import {useQueryClient} from '@tanstack/react-query';

import {QUERY__TASK_LIST, QUERY__TASK_ROOT} from '@entities/task';
import {createTask} from '@entities/task/api';

const CreateTaskDialog: FC<InstanceProps<unknown>> = ({
  onReject,
  onResolve,
}) => {
  const client = useQueryClient();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    try {
      await createTask(title, description);
    } catch (err) {
      console.log(err);
      return;
    }

    void client.invalidateQueries({
      queryKey: [QUERY__TASK_ROOT, QUERY__TASK_LIST],
    });
    onResolve();
  };

  return (
    <Dialog onClose={onReject} open={true}>
      <DialogTitle>Создать задачу</DialogTitle>

      <DialogContent sx={{width: 400}}>
        <Stack spacing={4} mt={3}>
          <TextField
            value={title}
            onChange={event => {
              setTitle(event.target.value);
            }}
            label="Название"
          />

          <TextField
            value={description}
            onChange={event => {
              setDescription(event.target.value);
            }}
            label="Описание"
          />

          <Button
            onClick={() => {
              void handleSubmit();
            }}
          >
            Создать
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export const openCreateTaskDialog = create(CreateTaskDialog);
