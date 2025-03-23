import {Box, BoxProps} from '@mui/material';

import {COLOR__BACK, COLOR__GRAY} from '@/theme/colors';
import typographyOptions from '@/theme/typography';

export const Tag = ({children, ...restProps}: BoxProps) => {
  return (
    <Box
      px={1.5}
      py={0.75}
      borderRadius="10px"
      bgcolor={COLOR__BACK}
      color={COLOR__GRAY}
      sx={{...typographyOptions.b3semibold}}
      {...restProps}
    >
      {children}
    </Box>
  );
};
