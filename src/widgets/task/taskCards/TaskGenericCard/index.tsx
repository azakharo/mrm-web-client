import {FC} from 'react';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import {Box} from '@mui/material';

import {StatusString, Task} from '@entities/task';
import {
  CardContainer,
  CardDescription,
  CardRemainingTime,
  CardTitle,
} from '../components';

interface Props {
  task: Task;
}

export const TaskGenericCard: FC<Props> = ({task}) => {
  const {title, description, status, endDate, id} = task;

  return (
    <CardContainer taskId={id}>
      <CardTitle title={title} status={status} />

      <CardDescription description={description} />

      <StatusString status={status} textAlign="left" />

      <Box display="flex" alignItems="center" justifyContent="space-between">
        <CardRemainingTime endDate={endDate} />

        <EastOutlinedIcon />
      </Box>
    </CardContainer>
  );
};
