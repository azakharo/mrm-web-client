import {FC} from 'react';
import {Box, Button, Stack, Typography} from '@mui/material';

import {HelpButton} from './HelpButton';
import lentaSputnikIconUrl from './lentaSputnik.jpg';
import {LoginButton} from './LoginButton';
import Logo from './logo.svg?react';

export const LoginPage: FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        height: '100dvh',
        backgroundColor: '#F6F6F6',
      }}
      p={4}
    >
      <Box flex="0 1 360px">
        {/* This container is necessary to align the logo and title center horizontally */}
        <Box display="flex" flexDirection="column" alignItems={'center'} mb={3}>
          <Logo width={210} height={'100%'} style={{marginBottom: 45}} />

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

        <Stack spacing={2}>
          <Button color="inherit">С Лента Спутник</Button>

          <Button>Через QR код</Button>

          <LoginButton
            icon={<img src={lentaSputnikIconUrl} alt="С Лента Спутник" />}
            text="С Лента Спутник"
            url2goOnClick="#"
          />
        </Stack>

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
