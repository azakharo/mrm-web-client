import {TaskStatus} from './types';

export const statusToLabel: Record<TaskStatus, string> = {
  [TaskStatus.inProgress]: 'В процессе',
  [TaskStatus.completed]: 'Выполнено',
};
