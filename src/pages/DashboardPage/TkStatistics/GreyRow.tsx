import {FC, ReactNode} from 'react';
import {Box} from '@mui/material';

import {SecondaryLabel} from './SecondaryLabel';

import {COLOR__LIGHT_BACK} from '@/theme/colors';

interface Props {
  label: string;
  value: ReactNode;
  preValue?: ReactNode;
}

export const GreyRow: FC<Props> = ({label, value, preValue}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={1}
      maxWidth={460}
      paddingX={1.5}
      paddingY={1}
      borderRadius="10px"
      bgcolor={COLOR__LIGHT_BACK}
    >
      <SecondaryLabel>{label}</SecondaryLabel>

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
