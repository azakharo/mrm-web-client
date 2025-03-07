import {FC} from 'react';
import {Box, Button} from '@mui/material';

import {Header} from '../Header';
import {ActivityFilterButtons} from './ActivityFilterButtons';
import {FilterProvider} from './FilterContext';
import FilterPanel from './FilterPanel';
import {TaskList} from './TaskList';

export const MyTasks: FC = () => {
  return (
    <Box height="100%" display="flex" flexDirection="column" pb={4}>
      <FilterProvider>
        <Header title="Мои задачи" />

        <Box px={4}>
          <Box
            display="flex"
            alignItems="center"
            gap={4}
            justifyContent="space-between"
            mb={3.5}
          >
            <ActivityFilterButtons />

            <Button
              onClick={() => {
                alert('Ещё не реализовано');
              }}
            >
              Создать задачу
            </Button>
          </Box>

          <FilterPanel />
        </Box>

        <TaskList />
      </FilterProvider>
    </Box>
  );
};
