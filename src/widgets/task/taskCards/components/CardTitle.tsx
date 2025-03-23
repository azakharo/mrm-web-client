import {FC, ReactNode} from 'react';
import {Badge, badgeClasses, Box, Tooltip, Typography} from '@mui/material';

import {TaskStatus} from '@entities/task';

import {COLOR__WHITE} from '@/theme/colors';

const tooltipTypographyProps = {
  variant: 'b2regular',
  sx: {color: COLOR__WHITE},
} as const;

const statusBadgeCommonProps = {
  variant: 'dot',
  sx: {
    [`& .${badgeClasses.dot}`]: {
      width: 12,
      height: 12,
      borderRadius: '50%',
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

interface Props {
  title: string;
  status: TaskStatus;
}

export const CardTitle: FC<Props> = ({title, status}) => {
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

  return (
    <Box display="flex" alignItems="center" gap={1.5}>
      {getStatusIcon(status)}

      {title.length > 36 ? (
        <Tooltip
          title={<Typography {...tooltipTypographyProps}>{title}</Typography>}
        >
          {titleElem}
        </Tooltip>
      ) : (
        titleElem
      )}
    </Box>
  );
};
