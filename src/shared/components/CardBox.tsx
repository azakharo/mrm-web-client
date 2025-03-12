import {FC, PropsWithChildren} from 'react';
import {Box, BoxProps} from '@mui/material';

import {COLOR__WHITE} from '@/theme/colors';

export const CardBox: FC<PropsWithChildren<BoxProps>> = ({
  children,
  ...restProps
}) => {
  return (
    <Box
      p={3}
      sx={{
        backgroundColor: COLOR__WHITE,
        borderRadius: '15px',
      }}
      {...restProps}
    >
      {children}
    </Box>
  );
};
