import {FC} from 'react';
import {Box} from '@mui/material';

import {Header} from '../Header';
import {TkIndex} from './TkIndex';

export const Dashboard: FC = () => {
  return (
    <>
      <Header title="Дашборд" />

      <Box px={4}>
        <TkIndex />
      </Box>
    </>
  );
};
