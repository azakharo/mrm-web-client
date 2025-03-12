import {Color} from '@shared/types';
import {TaskStatus} from './types';

import {COLOR__ERROR, COLOR__SUCCESS, COLOR__WARNING} from '@/theme/colors';

export const statusToLabel: Record<TaskStatus, string> = {
  [TaskStatus.notAssigned]: 'Не назначена',
  [TaskStatus.inProgress]: 'В процессе',
  [TaskStatus.completed]: 'Выполнено',
};

export const statusToColor: Record<TaskStatus, Color> = {
  [TaskStatus.notAssigned]: COLOR__ERROR,
  [TaskStatus.inProgress]: COLOR__WARNING,
  [TaskStatus.completed]: COLOR__SUCCESS,
};
