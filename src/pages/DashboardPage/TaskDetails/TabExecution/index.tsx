import {FC} from 'react';
import {Stack, Typography} from '@mui/material';

import {Task} from '@entities/task';
import {CardBox} from '@shared/components';
import {Comments} from '@widgets/task';
import {taskTypeSlugToExeCardComponent} from './executionCards/constants';
import {GenericExecCard} from './executionCards/GenericExecCard';

const renderExeCard = (task: Task) => {
  const CardComp = taskTypeSlugToExeCardComponent[task.type];

  if (CardComp) {
    return <CardComp task={task} />;
  }

  return <GenericExecCard task={task} />;
};

interface Props {
  task: Task;
}

export const TabExecution: FC<Props> = ({task}) => {
  const {id, description} = task;

  return (
    <Stack spacing={2}>
      {/* 1st row */}
      <Stack
        direction="row"
        spacing={2}
        sx={{
          '& > div': {
            flex: '1 1 0',
          },
        }}
        alignItems="flex-start"
      >
        {/* Card "Description" */}
        <CardBox display="flex" flexDirection="column" gap={2}>
          <Typography variant="b2semibold">Описание</Typography>

          <Typography variant="b1regular">{description}</Typography>
        </CardBox>

        {/* Card "Execution" */}
        {renderExeCard(task)}
      </Stack>

      {/* 2nd row */}
      <Comments taskId={id} />
    </Stack>
  );
};
