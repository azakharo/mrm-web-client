import {Box, Button, Typography} from '@mui/material';

import Icon from './picture.svg?react';

export const SomethingWentWrong = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" pt={10}>
      <Icon width={280} height={'100%'} />

      <Typography variant="h1" mt={3}>
        Что-то пошло не так...
      </Typography>

      <Typography variant="b1regular" mt={1} mb={3}>
        Мы уже работаем над устранением неполадок
      </Typography>

      <Button
        variant="contained"
        onClick={() => {
          window.location.reload();
        }}
      >
        Перезагрузить страницу
      </Button>
    </Box>
  );
};
