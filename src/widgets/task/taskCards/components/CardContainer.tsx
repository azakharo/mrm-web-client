import {FC, PropsWithChildren} from 'react';
import {useNavigate} from 'react-router-dom';
import {ButtonBase, Stack} from '@mui/material';

import {ROUTE__MY_TASK_DETAIL} from '@shared/constants';

import {COLOR__WHITE} from '@/theme/colors';

interface Props {
  taskId: number;
}

export const CardContainer: FC<PropsWithChildren<Props>> = ({
  taskId,
  children,
}) => {
  const navigate = useNavigate();

  return (
    <ButtonBase
      onClick={() => {
        navigate(ROUTE__MY_TASK_DETAIL.replace(':id', taskId.toString()));
      }}
    >
      <Stack
        p={2.25}
        spacing={1}
        width={360}
        sx={{
          backgroundColor: COLOR__WHITE,
          borderRadius: '15px',
        }}
      >
        {children}
      </Stack>
    </ButtonBase>
  );
};
