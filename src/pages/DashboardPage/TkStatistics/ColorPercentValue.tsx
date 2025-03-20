import {FC} from 'react';

import {ColorLabel} from '@shared/components';
import {normalizePercentValue} from './helpers';
import {PercentValue} from './PercentValue';

import {COLOR__LIGHT_BACK} from '@/theme/colors';

interface Props {
  value: number;
}

export const ColorPercentValue: FC<Props> = ({value}) => {
  const normalizedValue = normalizePercentValue(value);

  return (
    <ColorLabel
      bgcolor={
        normalizedValue === 0
          ? COLOR__LIGHT_BACK
          : normalizedValue > 0
            ? 'success.light'
            : 'error.light'
      }
    >
      <PercentValue value={value} />
    </ColorLabel>
  );
};
