import {FC} from 'react';
import {Stack, StackProps} from '@mui/material';
import isNull from 'lodash/isNull';

import {Tag} from '@entities/task';
import {CountValue, CurrencyValue} from '@shared/components';

interface Props extends StackProps {
  overallCost: number | null;
  overallCount: number | null;
  overallWeight: number | null;
}

export const Tags: FC<Props> = ({
  overallCost,
  overallCount,
  overallWeight,
  ...restProps
}) => {
  return (
    <Stack direction="row" spacing={1} {...restProps}>
      {!isNull(overallCost) && (
        <Tag>
          <CurrencyValue value={overallCost} />
        </Tag>
      )}

      {!isNull(overallCount) && (
        <Tag>
          <CountValue value={overallCount} suffix=" шт" />
        </Tag>
      )}

      {!isNull(overallWeight) && (
        <Tag>
          <CountValue value={overallWeight} suffix=" кг" />
        </Tag>
      )}
    </Stack>
  );
};
