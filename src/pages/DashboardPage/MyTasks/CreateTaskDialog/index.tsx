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
import {parse} from 'date-fns';

import {createTask, QUERY__TASK_LIST, QUERY__TASK_ROOT} from '@entities/task';
import {DATE_FORMAT} from '@shared/constants';

const CreateTaskDialog: FC<InstanceProps<unknown>> = ({
  onReject,
  onResolve,
}) => {
  const client = useQueryClient();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [typeId, setTypeId] = useState('1');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [executorId, setExecutorId] = useState('');
  const [validatorId, setValidatorId] = useState('');

  const handleSubmit = async () => {
    try {
      await createTask({
        title,
        description,
        typeId: typeId ? Number(typeId) : 1,
        executorId: executorId ? Number(executorId) : undefined,
        validatorId: validatorId ? Number(validatorId) : undefined,
        startDate: startDate
          ? parse(startDate, DATE_FORMAT, new Date())
          : new Date(),
        endDate: endDate ? parse(endDate, DATE_FORMAT, new Date()) : new Date(),
      });
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

          <TextField
            value={typeId}
            onChange={event => {
              setTypeId(event.target.value);
            }}
            label="ID типа задачи"
          />

          <TextField
            value={startDate}
            onChange={event => {
              setStartDate(event.target.value);
            }}
            label="Дата начала"
            placeholder={DATE_FORMAT}
          />

          <TextField
            value={endDate}
            onChange={event => {
              setEndDate(event.target.value);
            }}
            label="Дата завершения"
            placeholder={DATE_FORMAT}
          />

          <TextField
            value={executorId}
            onChange={event => {
              setExecutorId(event.target.value);
            }}
            label="ID исполнителя"
          />

          <TextField
            value={validatorId}
            onChange={event => {
              setValidatorId(event.target.value);
            }}
            label="ID проверяющего"
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
