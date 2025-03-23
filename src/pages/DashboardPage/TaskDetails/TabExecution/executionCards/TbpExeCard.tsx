import {FC} from 'react';

import {TaskTbp} from '@entities/task';
import {Tags} from '@widgets/task/taskCards/TaskTbpCard/Tags';
import {ExecCardLayout} from './components/ExecCardLayout';

interface Props {
  task: TaskTbp;
}

export const TbpExeCard: FC<Props> = ({task}) => {
  const {status, overallCost, overallCount, overallWeight, progress} = task;

  return (
    <ExecCardLayout
      execRightPart={
        <Tags
          overallCost={overallCost}
          overallCount={overallCount}
          overallWeight={overallWeight}
        />
      }
      status={status}
      progress={progress ?? undefined}
    />
  );
};
