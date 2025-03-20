import {Typography, TypographyProps} from '@mui/material';

export const Value = ({children, ...restProps}: TypographyProps) => {
  return (
    <Typography variant="b2medium" {...restProps}>
      {children}
    </Typography>
  );
};
