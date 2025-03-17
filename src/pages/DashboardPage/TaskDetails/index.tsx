import {FC, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Box, Stack} from '@mui/material';

import {useGetTask} from '@entities/task';
import {TabButton} from '@shared/components';
import {SomethingWentWrong} from '@widgets/common';
import {TaskActions} from '@widgets/task/TaskActions';
import {Header} from './Header';
import {TabExecution} from './TabExecution';
import {TabHistory} from './TabHistory';
import {TabInfo} from './TabInfo';

interface TabProps {
  index: number;
  label: string;
}

const tabs: TabProps[] = [
  {
    index: 0,
    label: 'Выполнение',
  },
  {
    index: 1,
    label: 'Информация',
  },
  {
    index: 2,
    label: 'История изменений',
  },
];

export const TaskDetails: FC = () => {
  const {id: taskIdStr} = useParams();
  const taskId = Number(taskIdStr);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const handleTabSelect = (tabIndex: number) => {
    setCurrentTabIndex(tabIndex);
  };

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

  const {id, description, title, status, completionPercent} = task;

  return (
    <Box height="100%" display="flex" flexDirection="column" px={4} pb={4}>
      <Header title={title} rightPart={<TaskActions taskId={id} />} />

      <Stack direction="row" gap={1.5} mb={4}>
        {tabs.map(({index, label}) => (
          <TabButton
            key={index}
            value={index}
            label={label}
            isSelected={currentTabIndex === index}
            onSelect={handleTabSelect}
          />
        ))}
      </Stack>

      {currentTabIndex === 0 && (
        <TabExecution
          id={id}
          description={description}
          status={status}
          completionPercent={completionPercent}
        />
      )}

      {currentTabIndex === 1 && <TabInfo task={task} />}

      {currentTabIndex === 2 && <TabHistory taskId={id} />}
    </Box>
  );
};
