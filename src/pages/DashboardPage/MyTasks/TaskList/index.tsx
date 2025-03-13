import {ChangeEvent, FC} from 'react';
import {Box} from '@mui/material';

import {useGetTasks} from '@entities/task';
import {Pagination} from '@shared/components';
import {SomethingWentWrong} from '@widgets/common';
import {useFilters} from '../FilterContext';

import {TaskCard} from '@/widgets/task';

export const TaskList: FC = () => {
  const {page, setPage, pageSize, activityFilter} = useFilters();
  const {data, isPending, error} = useGetTasks({
    page,
    pageSize,
    activityFilter: activityFilter || undefined,
  });

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

      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={page}
          onChange={(_event: ChangeEvent<unknown>, value: number) => {
            setPage(value);
          }}
        />
      )}
    </Box>
  );
};
