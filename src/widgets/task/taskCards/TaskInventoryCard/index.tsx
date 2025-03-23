import {FC} from 'react';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import {Box, Stack, Typography} from '@mui/material';
import isNull from 'lodash/isNull';

import {
  CurrentOverallValues,
  StatusString,
  TaskInventory,
  TaskProgress,
} from '@entities/task';
import {
  CardContainer,
  CardDescription,
  CardRemainingTime,
  CardTitle,
} from '../components';

interface Props {
  task: TaskInventory;
}

export const TaskInventoryCard: FC<Props> = ({task}) => {
  const {
    title,
    description,
    status,
    endDate,
    id,
    sapTaskNumber,
    sapTaskCurrentValue,
    sapTaskOverallValue,
    sapTaskProgress,
  } = task;

  return (
    <CardContainer taskId={id}>
      <CardTitle title={title} status={status} />

      {!isNull(sapTaskNumber) && (
        <Typography variant="b2regular" textAlign="left">
          Номер SAP: {sapTaskNumber}
        </Typography>
      )}

      <CardDescription description={description} />

      <Stack>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={4}
        >
          <StatusString status={status} />

          {!isNull(sapTaskCurrentValue) && !isNull(sapTaskOverallValue) && (
            <CurrentOverallValues
              currentValue={sapTaskCurrentValue}
              overallValue={sapTaskOverallValue}
            />
          )}
        </Box>

        <TaskProgress status={status} progress={sapTaskProgress} />
      </Stack>

      <Box display="flex" alignItems="center" justifyContent="space-between">
        <CardRemainingTime endDate={endDate} />

        <Stack direction="row" spacing={0.5}>
          {!isNull(sapTaskProgress) && (
            <Typography variant="b1semibold">{sapTaskProgress}%</Typography>
          )}

          <EastOutlinedIcon />
        </Stack>
      </Box>
    </CardContainer>
  );
};
