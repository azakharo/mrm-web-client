import {FC} from 'react';
import {Box} from '@mui/material';

import {Header} from '../Header';

export const UserProfile: FC = () => {
  return (
    <>
      <Header title="Профиль" hiddenUserProfileButton />

      <Box px={4}>Здесь будет профиль</Box>
    </>
  );
};
