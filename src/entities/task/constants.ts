import {Color} from '@shared/types';
import {TaskStatus} from './types';

import {COLOR__ERROR, COLOR__SUCCESS, COLOR__WARNING} from '@/theme/colors';

export const statusToLabel: Record<TaskStatus, string> = {
  [TaskStatus.new]: 'Новая',
  [TaskStatus.closed]: 'Закрыта',
};

export const getLabel = (status: string): string =>
  statusToLabel[status as TaskStatus] ?? status;

const statusToColor: Record<TaskStatus, Color> = {
  [TaskStatus.new]: COLOR__ERROR,
  [TaskStatus.closed]: COLOR__SUCCESS,
};

export const getColor = (status: string): Color =>
  statusToColor[status as TaskStatus] ?? COLOR__WARNING;
