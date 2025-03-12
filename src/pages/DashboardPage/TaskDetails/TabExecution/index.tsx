import {FC} from 'react';
import {Box, Stack, Typography} from '@mui/material';

import {statusToColor, statusToLabel, TaskStatus} from '@entities/task';
import {ProgressBar} from '@shared/components/ProgressBar';
import {Comments} from '@widgets/task/Comments';

import {COLOR__LIGHT_GRAY, COLOR__WHITE} from '@/theme/colors';

const cardCommonProps = {
  flex: '1 1 0',
  p: 3,
  sx: {
    backgroundColor: COLOR__WHITE,
    borderRadius: '15px',
  },
} as const;

interface Props {
  id: number;
  description: string;
  status: TaskStatus;
  completionPercent: number;
}

export const TabExecution: FC<Props> = ({
  id,
  description,
  status,
  completionPercent,
}) => {
  return (
    <Stack spacing={2}>
      {/* 1st row */}
      <Stack direction="row" spacing={2}>
        {/* Card "Description" */}
        <Stack spacing={2} {...cardCommonProps}>
          <Typography variant="b2semibold">Описание</Typography>

          <Typography variant="b1regular">{description}</Typography>
        </Stack>

        {/* Card "Execution" */}
        <Stack {...cardCommonProps}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            gap={4}
            mb={2}
          >
            <Typography variant="b2semibold">Выполнение</Typography>

            <Typography variant="b2regular" sx={{color: COLOR__LIGHT_GRAY}}>
              380 000₽/400 000₽
            </Typography>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            gap={4}
          >
            <Typography
              variant="b1semibold"
              sx={{color: statusToColor[status]}}
            >
              {statusToLabel[status]}
            </Typography>

            <Typography variant="b1semibold">{completionPercent}%</Typography>
          </Box>

          {status === TaskStatus.inProgress && (
            <ProgressBar
              color={statusToColor[status]}
              value={completionPercent}
            />
          )}
        </Stack>
      </Stack>

      {/* 2nd row */}
      <Comments taskId={id} />
    </Stack>
  );
};
