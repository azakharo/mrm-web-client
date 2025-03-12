import {FC} from 'react';
import {useParams} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import {Box, InputAdornment, TextField} from '@mui/material';

import {useGetTask} from '@entities/task';
import {SomethingWentWrong} from '@widgets/common';
import {Header} from '../TaskDetails/Header';

import {COLOR__MAIN_BLACK} from '@/theme/colors';

export const SubTasks: FC = () => {
  const {id: taskIdStr} = useParams();
  const taskId = Number(taskIdStr);
  const {data: task, isPending, error} = useGetTask(taskId);

  if (isPending) {
    // TODO improve loading UI
    return (
      <Box p={4} display="flex" justifyContent="center">
        Загрузка...
      </Box>
    );
  }

  if (error) {
    return <SomethingWentWrong />;
  }

  const {id} = task;
  console.log({id});

  const searchInput = (
    <TextField
      placeholder="Поиск по SKU"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon
              sx={{color: COLOR__MAIN_BLACK, width: 20, height: 20}}
            />
          </InputAdornment>
        ),
      }}
    />
  );

  return (
    <Box height="100%" display="flex" flexDirection="column" px={4} pb={4}>
      <Header title="Подробная информация" rightPart={searchInput} />
    </Box>
  );
};
