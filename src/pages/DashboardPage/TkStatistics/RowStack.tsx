import {FC} from 'react';
import {Stack, StackProps} from '@mui/material';

export const RowStack: FC<StackProps> = ({children, ...restProps}) => {
  return (
    <Stack gap={1.5} {...restProps}>
      {children}
    </Stack>
  );
};
