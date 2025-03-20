import {FC} from 'react';
import {NumericFormat} from 'react-number-format';

interface Props {
  value: number;
}

export const CountValue: FC<Props> = ({value}) => {
  return (
    <NumericFormat
      displayType="text"
      value={value}
      allowNegative={false}
      decimalScale={0}
      thousandSeparator=" "
    />
  );
};
