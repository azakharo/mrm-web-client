import {FC, ReactNode} from 'react';
import {Box} from '@mui/material';

import {Label} from './Label';

interface Props {
  label: string;
  value: ReactNode;
  preValue?: ReactNode;
}

export const Row: FC<Props> = ({label, value, preValue}) => {
  return (
    <Box display="flex" alignItems="center" gap={2} maxWidth={460}>
      <Label>{label}</Label>

      <div
        style={{
          flex: '1 1 0',
        }}
      ></div>

      {preValue}

      {value}
    </Box>
  );
};
