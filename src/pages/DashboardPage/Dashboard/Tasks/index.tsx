import {FC} from 'react';
import {Box} from '@mui/material';

import {Task, TaskStatus} from '@entities/task';

import {TaskCard} from '@/widgets/task';

const now = new Date();

const tasks: Task[] = [
  {
    id: 1,
    title: 'Проверка молочной продукции',
    description:
      'Необходимо проверить молочные продукты на соблюдение срока годности ',
    status: TaskStatus.inProgress,
    completionPercent: 75,
    created: now,
    updated: now,
    startDate: new Date('2025-04-06T13:05:56.134000Z'),
    endDate: new Date('2025-04-09T13:05:56.134000Z'),
  },
  {
    id: 2,
    title: 'Проверка молочной продукции',
    description:
      'Необходимо проверить молочные продукты на соблюдение срока годности ',
    status: TaskStatus.completed,
    completionPercent: 90,
    created: now,
    updated: now,
    startDate: new Date('2025-04-06T13:05:56.134000Z'),
    endDate: new Date('2025-04-09T13:05:56.134000Z'),
  },
  {
    id: 3,
    title: 'Проверка молочной продукции',
    description:
      'Необходимо проверить молочные продукты на соблюдение срока годности ',
    status: TaskStatus.completed,
    completionPercent: 100,
    created: now,
    updated: now,
    startDate: new Date('2025-04-06T13:05:56.134000Z'),
    endDate: new Date('2025-04-09T13:05:56.134000Z'),
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
