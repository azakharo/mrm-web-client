import {Typography, TypographyProps} from '@mui/material';

export const SecondaryValue = ({children, ...restProps}: TypographyProps) => {
  return (
    <Typography variant="b2regular" {...restProps}>
      {children}
    </Typography>
  );
};
