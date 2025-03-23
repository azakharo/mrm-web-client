import {FC} from 'react';
import {useNavigate, useParams, useSearchParams} from 'react-router-dom';
import {getAuthToken, useAuth} from '@features/auth';
import {Alert, Box, CircularProgress} from '@mui/material';
import useRequest from 'ahooks/es/useRequest';

import {ROUTE__DASHBOARD} from '@shared/constants';

export const LoginCallbackPage: FC = () => {
  const navigate = useNavigate();
  const {providerId: providerIdStr} = useParams();
  const providerId = Number(providerIdStr);
  const [searchParams] = useSearchParams();
  const authCode = searchParams.get('code') ?? '';
  const {onLoginSuccess} = useAuth();

  const {loading, error} = useRequest(
    () => getAuthToken(providerId, authCode),
    {
      onSuccess: authToken => {
        void onLoginSuccess(authToken).then(() => {
          navigate(ROUTE__DASHBOARD);
          return;
        });
      },
    },
  );

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
        {loading && <CircularProgress color="secondary" />}

        {error && (
          <Alert severity="error" color="error">
            {error.message}
          </Alert>
        )}
      </Box>
    </Box>
  );
};
