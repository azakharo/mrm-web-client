import {FC} from 'react';
import {Typography, TypographyProps} from '@mui/material';

import {getColor, getLabel} from '../constants';
import {TaskStatus} from '../types';

interface Props extends TypographyProps {
  status: TaskStatus;
}

export const StatusString: FC<Props> = ({status, ...restProps}) => {
  return (
    <Typography
      variant="b2semibold"
      sx={{color: getColor(status)}}
      {...restProps}
    >
      {getLabel(status)}
    </Typography>
  );
};
