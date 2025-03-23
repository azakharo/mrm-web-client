import {FC} from 'react';
import {getLoginProviders} from '@features/auth';
import {Alert, Box, Skeleton, Stack, Typography} from '@mui/material';
import useRequest from 'ahooks/es/useRequest';

import {ButtonWithArrow} from '@shared/components';
import {ROUTE__LOGIN, ROUTE__LOGIN_CALLBACK} from '@shared/constants';
import {HelpButton} from './HelpButton';
import lentaSputnikIconUrl from './lentaSputnik.jpg';
import Logo from './logo.svg?react';

const skeleton = (
  <Skeleton
    variant="rounded"
    width="100%"
    height={57}
    sx={{borderRadius: '15px'}}
  />
);

export const LoginPage: FC = () => {
  const {loading, error, data: loginProviders} = useRequest(getLoginProviders);

  const handleLogin = (providerId: number) => {
    const provider = loginProviders?.find(p => p.id === providerId);
    if (!provider) {
      return;
    }

    const {id, appId, authPageUrl} = provider;

    const callbackUrl = window.location.href
      .replace(ROUTE__LOGIN, ROUTE__LOGIN_CALLBACK)
      .replace(':providerId', id.toString());

    const searchParams = new URLSearchParams();
    searchParams.append('response_type', 'code');
    searchParams.append('client_id', appId);
    searchParams.append('redirect_uri', callbackUrl);
    searchParams.append('scope', 'email');
    searchParams.append('state', 'JHuuyg679f96f976');

    window.location.href = `${authPageUrl}?${searchParams.toString()}`;
  };

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
          {loading && (
            <>
              {skeleton}

              {skeleton}
            </>
          )}

          {error && (
            <Alert severity="error" color="error">
              {error.message}
            </Alert>
          )}

          {loginProviders?.map(({id, appName}) => (
            <ButtonWithArrow
              key={id}
              icon={<img src={lentaSputnikIconUrl} alt={appName} />}
              text={appName}
              onClick={() => handleLogin(id)}
            />
          ))}
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
