import {ChangeEvent, FC} from 'react';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import {Box, Pagination, PaginationItem} from '@mui/material';

import {useGetTasks} from '@entities/task/apiHooks';
import {SomethingWentWrong} from '@shared/widgets';
import {TaskCard} from '../../Dashboard/Tasks/TaskCard';
import {useFilters} from '../FilterContext';

import {
  COLOR__BACK,
  COLOR__GRAY,
  COLOR__LIGHT_BACK,
  COLOR__WARNING,
  COLOR__WHITE,
} from '@/theme/colors';

export const TaskList: FC = () => {
  const {page, setPage, pageSize} = useFilters();
  const {data, isPending, error} = useGetTasks({page, pageSize});

  if (isPending) {
    // TODO improve loading UI
    return 'Загрузка...';
  }

  if (error) {
    return <SomethingWentWrong />;
  }

  const {items, totalPages} = data;

  return (
    <Box
      px={4}
      flex="1 1 0"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      gap={3.5}
    >
      <Box display="flex" gap={4} flexWrap="wrap" alignItems="flex-start">
        {items.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </Box>

      <Pagination
        count={totalPages}
        page={page}
        onChange={(_event: ChangeEvent<unknown>, value: number) => {
          setPage(value);
        }}
        variant="outlined"
        shape="rounded"
        sx={{
          alignSelf: 'center',
          '& .MuiPaginationItem-previousNext': {
            backgroundColor: COLOR__WHITE,
            border: `1px solid ${COLOR__BACK}`,
            borderRadius: '8px',
          },
          '& .MuiPaginationItem-page': {
            borderRadius: '6px',
            border: 'none',
            fontSize: 16,
            color: COLOR__GRAY,
          },
          '& .MuiPaginationItem-page.Mui-selected': {
            backgroundColor: COLOR__WHITE,
            border: `1px solid ${COLOR__WARNING}`,
            color: COLOR__WARNING,
            fontWeight: 450,
            '&:hover': {
              backgroundColor: COLOR__LIGHT_BACK,
            },
          },
        }}
        renderItem={item => (
          <PaginationItem
            slots={{previous: WestOutlinedIcon, next: EastOutlinedIcon}}
            {...item}
          />
        )}
      />
    </Box>
  );
};
