import {FC} from 'react';
import {NumericFormat} from 'react-number-format';

interface Props {
  value: number;
}

export const CurrencyValue: FC<Props> = ({value}) => {
  return (
    <NumericFormat
      displayType="text"
      value={value}
      allowNegative
      decimalScale={0}
      thousandSeparator=" "
      suffix="₽"
    />
  );
};
