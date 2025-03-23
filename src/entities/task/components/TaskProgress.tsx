import {FC} from 'react';
import isNull from 'lodash/isNull';

import {ProgressBar} from '@shared/components';
import {getColor} from '../constants';
import {TaskStatus} from '../types';

interface Props {
  progress: number | null;
  status: TaskStatus;
}

export const TaskProgress: FC<Props> = ({progress, status}) => {
  if (isNull(progress)) {
    return null;
  }

  return <ProgressBar color={getColor(status)} value={progress} />;
};
