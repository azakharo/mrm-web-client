import {FC, ReactNode} from 'react';
import {useNavigate} from 'react-router-dom';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import {
  Badge,
  badgeClasses,
  Box,
  ButtonBase,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import {format} from 'date-fns';

import {getColor, getLabel, Task, TaskStatus} from '@entities/task';
import {ProgressBar} from '@shared/components/ProgressBar';
import {
  DATE_FORMAT__SHORT_YEAR,
  ROUTE__MY_TASK_DETAIL,
} from '@shared/constants';
import {limitString} from '@shared/utils/strings';

import {COLOR__LIGHT_GRAY, COLOR__WHITE} from '@/theme/colors';

const descriptionLenLimit = 2 * 40;

const statusBadgeCommonProps = {
  variant: 'dot',
  sx: {
    [`& .${badgeClasses.dot}`]: {
      width: 12,
      height: 12,
      borderRadius: '50%',
    },
    '& .MuiBadge-badge': {
      right: 0,
      top: -3,
    },
  },
} as const;

const status2Icon: Record<TaskStatus, ReactNode> = {
  [TaskStatus.new]: <Badge color="error" {...statusBadgeCommonProps} />,
  [TaskStatus.closed]: <Badge color="success" {...statusBadgeCommonProps} />,
};

const getStatusIcon = (status: string) =>
  status2Icon[status as TaskStatus] ?? (
    <Badge color="error" {...statusBadgeCommonProps} />
  );

const tooltipTypographyProps = {
  variant: 'b2regular',
  sx: {color: COLOR__WHITE},
} as const;

interface Props {
  task: Task;
}

export const TaskCard: FC<Props> = ({task}) => {
  const navigate = useNavigate();
  const {title, description, status, completionPercent, endDate, id} = task;

  const progressBar = (
    <ProgressBar color={getColor(status)} value={completionPercent} />
  );

  const titleElem = (
    <Typography
      variant="b1semibold"
      textAlign="left"
      noWrap
      overflow="hidden"
      textOverflow="ellipsis"
    >
      {title}
    </Typography>
  );

  const descriptionElem = (
    <Typography
      variant="b2regular"
      sx={{color: COLOR__LIGHT_GRAY, minHeight: 42}}
      textAlign="left"
      display="block"
    >
      {limitString(description, descriptionLenLimit)}
    </Typography>
  );

  return (
    <ButtonBase
      onClick={() => {
        navigate(ROUTE__MY_TASK_DETAIL.replace(':id', id.toString()));
      }}
    >
      <Stack
        p={2.25}
        spacing={1}
        width={360}
        sx={{
          backgroundColor: COLOR__WHITE,
          borderRadius: '15px',
        }}
      >
        <Box display="flex" alignItems="center" gap={1.5}>
          {getStatusIcon(status)}

          {title.length > 36 ? (
            <Tooltip
              title={
                <Typography {...tooltipTypographyProps}>{title}</Typography>
              }
            >
              {titleElem}
            </Tooltip>
          ) : (
            titleElem
          )}
        </Box>

        <Typography variant="b2regular" textAlign="left">
          Номер SAP: 23422422
        </Typography>

        {description.length > descriptionLenLimit ? (
          <Tooltip
            title={
              <Typography {...tooltipTypographyProps}>{description}</Typography>
            }
          >
            {descriptionElem}
          </Tooltip>
        ) : (
          descriptionElem
        )}

        <Stack>
          {/* Here we render a hidden progress bar.
          It's necessary for proper vertical alignment of the components.
           The progress bar's height equals to the height of the status text. */}
          {status !== ('В процессе' as TaskStatus) && (
            <Box visibility="hidden">{progressBar}</Box>
          )}

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            gap={4}
          >
            <Typography variant="b2semibold" sx={{color: getColor(status)}}>
              {getLabel(status)}
            </Typography>

            <Typography variant="b2medium" sx={{color: '#B5B5B5'}}>
              380 000₽/400 000₽
            </Typography>
          </Box>

          {status === ('В процессе' as TaskStatus) && progressBar}
        </Stack>

        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="b2regular">
            🕒 12 часов | до {format(endDate, DATE_FORMAT__SHORT_YEAR)}
          </Typography>

          <Stack direction="row" spacing={0.5}>
            <Typography variant="b1semibold">{completionPercent}%</Typography>
            <EastOutlinedIcon />
          </Stack>
        </Box>
      </Stack>
    </ButtonBase>
  );
};
