import {FC} from 'react';
import {Box, Typography} from '@mui/material';

import {UserProfileButton} from './UserProfileButton';

interface Props {
  title: string;
  hiddenUserProfileButton?: boolean;
}

export const Header: FC<Props> = ({title, hiddenUserProfileButton = false}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      pt={4}
      pb={3}
      minHeight={114}
    >
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: 32,
        }}
      >
        {title}
      </Typography>

      {!hiddenUserProfileButton && <UserProfileButton />}
    </Box>
  );
};
