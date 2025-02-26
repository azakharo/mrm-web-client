import {FC} from 'react';
import {Box, Typography} from '@mui/material';

interface Props {
  title: string;
}

export const Header: FC<Props> = ({title}) => {
  return (
    <Box display="flex" alignItems="center" px={4} pt={4} pb={3}>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: 32,
          lineHeight: '41px',
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};
