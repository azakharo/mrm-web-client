import {FC} from 'react';
import {Box} from '@mui/material';

import {Task, TaskStatus} from '@entities/task';
import {TaskCard} from './TaskCard';

const tasks: Task[] = [
  {
    id: 1,
    name: 'Проверка молочной продукции',
    description:
      'Необходимо проверить молочные продукты на соблюдение срока годности ',
    status: TaskStatus.inProgress,
    completionPercent: 75,
  },
  {
    id: 2,
    name: 'Проверка молочной продукции',
    description:
      'Необходимо проверить молочные продукты на соблюдение срока годности ',
    status: TaskStatus.completed,
    completionPercent: 90,
  },
  {
    id: 3,
    name: 'Проверка молочной продукции',
    description:
      'Необходимо проверить молочные продукты на соблюдение срока годности ',
    status: TaskStatus.completed,
    completionPercent: 100,
  },
];

export const Tasks: FC = () => {
  return (
    <Box display="flex" gap={4} flexWrap="wrap">
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </Box>
  );
};
