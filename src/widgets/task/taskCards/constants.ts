import {FC} from 'react';

import {Task, TaskTypeSlug} from '@entities/task';
import {TaskInventoryCard} from './TaskInventoryCard';
import {TaskTbpCard} from './TaskTbpCard';

interface Props<T extends Task> {
  task: T;
}

export const taskTypeSlugToCardComponent: Record<
  TaskTypeSlug,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  FC<Props>
> = {
  [TaskTypeSlug.INVENTORY]: TaskInventoryCard,
  [TaskTypeSlug.TBP]: TaskTbpCard,
};
