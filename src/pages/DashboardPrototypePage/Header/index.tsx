import {FC} from 'react';
import {Box, Typography} from '@mui/material';

import {UserProfileButton} from './UserProfileButton';

interface Props {
  title: string;
}

export const Header: FC<Props> = ({title}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px={4}
      pt={4}
      pb={3}
    >
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: 32,
          lineHeight: '41px',
        }}
      >
        {title}
      </Typography>

      <UserProfileButton />
    </Box>
  );
};
