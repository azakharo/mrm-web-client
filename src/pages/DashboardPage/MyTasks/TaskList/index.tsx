import {FC} from 'react';
import {Box} from '@mui/material';

import {useGetTasks} from '@entities/task/apiHooks';
import {TaskCard} from '../../Dashboard/Tasks/TaskCard';

export const TaskList: FC = () => {
  const {data, isPending, error} = useGetTasks({page: 1, pageSize: 10});

  if (isPending) {
    return 'Загрузка...';
  }

  if (error) {
    return 'Ошибка!';
  }

  return (
    <Box display="flex" gap={4} flexWrap="wrap">
      {data?.items.map(task => <TaskCard key={task.id} task={task} />)}
    </Box>
  );
};
