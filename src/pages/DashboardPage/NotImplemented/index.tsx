import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {Box, Button, Typography} from '@mui/material';

import Icon from '../../Errors/404/picture.svg?react';

import {ROUTE__DASHBOARD} from '@/constants';

interface Props {
  pageName: string;
}

const NotImplemented: FC<Props> = ({pageName}) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(ROUTE__DASHBOARD, {replace: true});
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100dvh"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Icon width={280} height={'100%'} />

        <Typography variant="h1" mt={3}>
          {pageName}
        </Typography>

        <Typography variant="b1medium" mt={1} mb={3}>
          Страница ещё не реализована
        </Typography>

        <Button variant="contained" onClick={handleGoHome}>
          Вернуться на Дашборд
        </Button>
      </Box>
    </Box>
  );
};

export default NotImplemented;
