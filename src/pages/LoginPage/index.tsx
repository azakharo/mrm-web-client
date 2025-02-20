import {FC} from 'react';
import {Box, Typography} from '@mui/material';

import {HelpButton} from './HelpButton';
import Logo from './logo.svg?react';

export const LoginPage: FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{height: '100dvh'}}
      p={4}
    >
      <Box flex="0 1 400px">
        {/* This container is necessary to align the logo and title center horizontally */}
        <Box display="flex" flexDirection="column" alignItems={'center'} mb={5}>
          <Logo width={210} height={'100%'} style={{marginBottom: 32}} />

          <Typography
            sx={{
              fontSize: 28,
              fontWeight: 500,
              lineHeight: '28px',
            }}
          >
            Войти
          </Typography>
        </Box>
        Here will be a stack of buttons
        <Box
          sx={{
            position: 'fixed',
            bottom: 32,
            right: 32,
          }}
        >
          <HelpButton />
        </Box>
      </Box>
    </Box>
  );
};
