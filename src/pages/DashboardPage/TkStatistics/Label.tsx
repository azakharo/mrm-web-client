import {Typography, TypographyProps} from '@mui/material';

import {COLOR__LIGHT_GRAY} from '@/theme/colors';

export const Label = ({children, ...restProps}: TypographyProps) => {
  return (
    <Typography
      variant="b2semibold"
      sx={{color: COLOR__LIGHT_GRAY}}
      {...restProps}
    >
      {children}
    </Typography>
  );
};
