import {FC} from 'react';
import {useParams} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import {InputAdornment, TextField} from '@mui/material';

import {Task, useGetTask} from '@entities/task';

import {COLOR__MAIN_BLACK} from '@/theme/colors';
import {Header, PageContentLayout} from '@/widgets/dashboard';

export const SubTasks: FC = () => {
  const {id: taskIdStr} = useParams();
  const taskId = Number(taskIdStr);
  const {data, isPending, error} = useGetTask(taskId);

  const renderContent = (task: Task | undefined) => {
    if (!task) {
      return null;
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

    return <Header title="Подробная информация" rightPart={searchInput} />;
  };

  return (
    <PageContentLayout isPending={isPending} error={error}>
      {renderContent(data)}
    </PageContentLayout>
  );
};
