import {FC} from 'react';
import {Box} from '@mui/material';

import {Header} from '../Header';

export const Dashboard: FC = () => {
  return (
    <>
      <Header title="Дашборд" />

      <Box sx={{backgroundColor: 'pink'}}>this is content</Box>
    </>
  );
};
