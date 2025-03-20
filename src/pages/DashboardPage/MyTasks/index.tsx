import {FC} from 'react';
import {Box, Button} from '@mui/material';

import {Header} from '../Header';
import {ActivityFilterButtons} from './ActivityFilterButtons';
import {openCreateTaskDialog} from './CreateTaskDialog';
import {FilterProvider} from './FilterContext';
import FilterPanel from './FilterPanel';
import {TaskList} from './TaskList';

export const MyTasks: FC = () => {
  const handleCreate = () => {
    void openCreateTaskDialog().catch(() => {});
  };

  return (
    <Box pb={4} px={4}>
      <FilterProvider>
        <Header title="Мои задачи" />

        <Box
          display="flex"
          alignItems="center"
          gap={4}
          justifyContent="space-between"
          mb={3.5}
        >
          <ActivityFilterButtons />

          <Button onClick={handleCreate}>Создать задачу</Button>
        </Box>

        <FilterPanel />

        <TaskList />
      </FilterProvider>
    </Box>
  );
};
