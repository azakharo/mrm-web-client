import {FC} from 'react';
import {Typography, TypographyProps} from '@mui/material';

import {CurrencyValue} from '@shared/components';

interface Props extends TypographyProps {
  currentValue: number;
  overallValue: number;
}

export const CurrentOverallValues: FC<Props> = ({
  currentValue,
  overallValue,
  ...restProps
}) => {
  return (
    <Typography variant="b2medium" sx={{color: '#B5B5B5'}} {...restProps}>
      <CurrencyValue value={currentValue} />/
      <CurrencyValue value={overallValue} />
    </Typography>
  );
};
