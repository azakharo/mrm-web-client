import {Typography, TypographyProps} from '@mui/material';

import {COLOR__GRAY} from '@/theme/colors';

export const SecondaryLabel = ({children, ...restProps}: TypographyProps) => {
  return (
    <Typography variant="b3medium" sx={{color: COLOR__GRAY}} {...restProps}>
      {children}
    </Typography>
  );
};
