import {FC} from 'react';

import {Task} from '@entities/task';
import {ExecCardLayout} from './components/ExecCardLayout';

interface Props {
  task: Task;
}

export const GenericExecCard: FC<Props> = ({task}) => {
  const {status} = task;

  return <ExecCardLayout status={status} />;
};
