import {FC, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Stack} from '@mui/material';

import {Task, useGetTask} from '@entities/task';
import {TabButton} from '@shared/components';
import {TaskActions} from '@widgets/task/TaskActions';
import {TabExecution} from './TabExecution';
import {TabHistory} from './TabHistory';
import {TabInfo} from './TabInfo';

import {Header, PageContentLayout} from '@/widgets/dashboard';

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

  const {data, isPending, error} = useGetTask(taskId);

  const renderContent = (task: Task | undefined) => {
    if (!task) {
      return null;
    }

    const {id, description, title, status, completionPercent} = task;

    return (
      <>
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
      </>
    );
  };

  return (
    <PageContentLayout isPending={isPending} error={error}>
      {renderContent(data)}
    </PageContentLayout>
  );
};
