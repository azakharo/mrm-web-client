import {TaskStatus} from './types';

export const statusToLabel: Record<TaskStatus, string> = {
  [TaskStatus.notAssigned]: 'Не назначена',
  [TaskStatus.inProgress]: 'В процессе',
  [TaskStatus.completed]: 'Выполнено',
};
