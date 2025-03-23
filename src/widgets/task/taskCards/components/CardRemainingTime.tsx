import {FC} from 'react';
import {Typography} from '@mui/material';
import {format} from 'date-fns';

import {DATE_FORMAT__SHORT_YEAR} from '@shared/constants';

interface Props {
  endDate: Date;
}

export const CardRemainingTime: FC<Props> = ({endDate}) => {
  return (
    <Typography variant="b2regular">
      🕒 12 часов | до {format(endDate, DATE_FORMAT__SHORT_YEAR)}
    </Typography>
  );
};
