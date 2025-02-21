import {FC} from 'react';
import {Alert, Box, Typography} from '@mui/material';

import {useAuth} from '@/hooks/useAuth';
import {COLOR__SECONDARY} from '@/theme/colors';

export const DashboardPage: FC = () => {
  const {currentUser} = useAuth();
  const {code, fullName, email, phone} = currentUser!;

  return (
    <Box
      maxWidth={400}
      marginX="auto"
      display="flex"
      flexDirection="column"
      gap={2}
    >
      <Alert>Here will be Dashboard soon</Alert>

      <Typography variant="h1" color={COLOR__SECONDARY}>
        Текущий пользователь
      </Typography>

      <table
        style={{
          width: '100%',
          borderSpacing: '0 1em',
        }}
      >
        <tbody>
          <tr>
            <td>Код</td>
            <td>{code}</td>
          </tr>

          <tr>
            <td>Имя</td>
            <td>{fullName}</td>
          </tr>

          <tr>
            <td>Почта</td>
            <td>{email}</td>
          </tr>

          <tr>
            <td>Телефон</td>
            <td>{phone}</td>
          </tr>
        </tbody>
      </table>
    </Box>
  );
};
