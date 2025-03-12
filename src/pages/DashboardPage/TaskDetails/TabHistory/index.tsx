import {FC} from 'react';
import {Box, Typography} from '@mui/material';

interface Props {
  taskId: number;
}

export const TabHistory: FC<Props> = ({taskId}) => {
  return (
    <Box>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: 32,
        }}
      >
        id задачи: {taskId}
      </Typography>
    </Box>
  );
};
