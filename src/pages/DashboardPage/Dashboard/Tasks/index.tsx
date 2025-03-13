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
    status: 'В процессе' as TaskStatus,
    completionPercent: 75,
    created: now,
    updated: now,
    startDate: new Date('2025-04-06T13:05:56.134000Z'),
    endDate: new Date('2025-04-09T13:05:56.134000Z'),
    type: 'Инвентаризация',
    executor: {
      id: 1,
      name: 'Пользователь Тестовый None',
      code: '9979991112233',
    },
    validator: {
      id: 1,
      name: 'Пользователь Тестовый None',
      code: '9979991112233',
    },
  },
  {
    id: 2,
    title: 'Проверка молочной продукции',
    description:
      'Необходимо проверить молочные продукты на соблюдение срока годности ',
    status: TaskStatus.closed,
    completionPercent: 90,
    created: now,
    updated: now,
    startDate: new Date('2025-04-06T13:05:56.134000Z'),
    endDate: new Date('2025-04-09T13:05:56.134000Z'),
    type: 'Инвентаризация',
    executor: {
      id: 1,
      name: 'Пользователь Тестовый None',
      code: '9979991112233',
    },
    validator: {
      id: 1,
      name: 'Пользователь Тестовый None',
      code: '9979991112233',
    },
  },
  {
    id: 3,
    title: 'Проверка молочной продукции',
    description:
      'Необходимо проверить молочные продукты на соблюдение срока годности ',
    status: TaskStatus.closed,
    completionPercent: 100,
    created: now,
    updated: now,
    startDate: new Date('2025-04-06T13:05:56.134000Z'),
    endDate: new Date('2025-04-09T13:05:56.134000Z'),
    type: 'Инвентаризация',
    executor: {
      id: 1,
      name: 'Пользователь Тестовый None',
      code: '9979991112233',
    },
    validator: {
      id: 1,
      name: 'Пользователь Тестовый None',
      code: '9979991112233',
    },
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
