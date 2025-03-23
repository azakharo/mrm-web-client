import {FC} from 'react';
import isNull from 'lodash/isNull';

import {CurrentOverallValues, TaskInventory} from '@entities/task';
import {ExecCardLayout} from './components/ExecCardLayout';

import {COLOR__LIGHT_GRAY} from '@/theme/colors';

interface Props {
  task: TaskInventory;
}

export const InventoryExeCard: FC<Props> = ({task}) => {
  const {status, sapTaskProgress, sapTaskCurrentValue, sapTaskOverallValue} =
    task;

  return (
    <ExecCardLayout
      execRightPart={
        !isNull(sapTaskCurrentValue) &&
        !isNull(sapTaskOverallValue) && (
          <CurrentOverallValues
            currentValue={sapTaskCurrentValue}
            overallValue={sapTaskOverallValue}
            variant="b2regular"
            sx={{color: COLOR__LIGHT_GRAY}}
          />
        )
      }
      status={status}
      progress={sapTaskProgress ?? undefined}
    />
  );
};
