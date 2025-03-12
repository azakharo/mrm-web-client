import {FC, ReactNode} from 'react';
import {Stack, Typography} from '@mui/material';

interface Props {
  label: ReactNode;
  value: string;
}

export const ItemWithCustomLabel: FC<Props> = ({label, value}) => {
  return (
    <Stack spacing={1}>
      {label}

      <Typography variant="b2regular">{value}</Typography>
    </Stack>
  );
};
