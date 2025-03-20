import {FC, PropsWithChildren} from 'react';
import {Box} from '@mui/material';

import {SomethingWentWrong} from '../../common';

interface Props {
  isPending: boolean;
  error: Error | null;
}

export const PageContentLayout: FC<PropsWithChildren<Props>> = ({
  isPending,
  error,
  children,
}) => {
  return (
    <Box pb={4} px={4}>
      {isPending && (
        <Box mt={10} display="flex" justifyContent="center">
          Загрузка...
        </Box>
      )}

      {error && <SomethingWentWrong />}

      {!isPending && !error && children}
    </Box>
  );
};
