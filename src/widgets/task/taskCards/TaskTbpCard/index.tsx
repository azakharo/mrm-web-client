import {FC} from 'react';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import {Box, Stack, Typography} from '@mui/material';
import isNull from 'lodash/isNull';

import {StatusString, TaskProgress, TaskTbp} from '@entities/task';
import {
  CardContainer,
  CardDescription,
  CardRemainingTime,
  CardTitle,
} from '../components';
import {Tags} from './Tags';

interface Props {
  task: TaskTbp;
}

export const TaskTbpCard: FC<Props> = ({task}) => {
  const {
    title,
    description,
    status,
    endDate,
    id,
    progress,
    overallCount,
    overallCost,
    overallWeight,
  } = task;

  return (
    <CardContainer taskId={id}>
      <CardTitle title={title} status={status} />

      <CardDescription description={description} />

      <Stack>
        <StatusString status={status} textAlign="left" />

        <TaskProgress status={status} progress={progress} />
      </Stack>

      <Tags
        overallCost={overallCost}
        overallCount={overallCount}
        overallWeight={overallWeight}
      />

      <Box display="flex" alignItems="center" justifyContent="space-between">
        <CardRemainingTime endDate={endDate} />

        <Stack direction="row" spacing={0.5}>
          {!isNull(progress) && (
            <Typography variant="b1semibold">{progress}%</Typography>
          )}

          <EastOutlinedIcon />
        </Stack>
      </Box>
    </CardContainer>
  );
};
