import {FC} from 'react';

import {Task, TaskTypeSlug} from '@entities/task';
import {InventoryExeCard} from './InventoryExeCard';
import {TbpExeCard} from './TbpExeCard';

interface Props<T extends Task> {
  task: T;
}

export const taskTypeSlugToExeCardComponent: Record<
  TaskTypeSlug,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  FC<Props>
> = {
  [TaskTypeSlug.INVENTORY]: InventoryExeCard,
  [TaskTypeSlug.TBP]: TbpExeCard,
};
