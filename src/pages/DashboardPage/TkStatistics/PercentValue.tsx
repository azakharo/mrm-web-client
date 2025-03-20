import {FC} from 'react';
import {NumericFormat} from 'react-number-format';

import {Color} from '@shared/types';
import {normalizePercentValue} from './helpers';
import {SecondaryValue} from './SecondaryValue';

import {
  COLOR__ERROR,
  COLOR__SUCCESS,
  COLOR__TEXT_PRIMARY,
} from '@/theme/colors';

interface Props {
  value: number;
  isColorDeterminedByValue?: boolean;
}

export const PercentValue: FC<Props> = ({
  value,
  isColorDeterminedByValue = true,
}) => {
  const normalizedValue = normalizePercentValue(value);

  let color: Color = COLOR__TEXT_PRIMARY;
  if (isColorDeterminedByValue) {
    if (normalizedValue > 0) {
      color = COLOR__SUCCESS;
    } else if (normalizedValue < 0) {
      color = COLOR__ERROR;
    }
  }

  return (
    <SecondaryValue sx={{color}}>
      <NumericFormat
        displayType="text"
        value={normalizedValue}
        allowNegative
        decimalScale={2}
        decimalSeparator=","
        suffix="%"
      />
    </SecondaryValue>
  );
};
