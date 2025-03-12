import {FC} from 'react';
import {Stack, Typography} from '@mui/material';

interface Props {
  label: string;
  value: string;
}

export const SimpleItem: FC<Props> = ({label, value}) => {
  return (
    <Stack spacing={1}>
      <Typography variant="b3semibold">{label}</Typography>

      <Typography variant="b2regular">{value}</Typography>
    </Stack>
  );
};
