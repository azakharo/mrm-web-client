import {useParams} from 'react-router-dom';
import {useQueryState} from 'react-router-use-location-state';
import {Stack} from '@mui/material';

import {TkStatItem, useGetTkStatItems} from '@entities/dashboard';
import {TabButton} from '@shared/components';
import {Header, PageContentLayout} from '@widgets/dashboard';
import {StatTab} from './StatTab';

type TdType = TkStatItem['td_type'];

interface TabProps {
  td_type: TdType;
  label: string;
}

const tabs: TabProps[] = [
  {
    td_type: 'DTD',
    label: 'День',
  },
  {
    td_type: 'WTD',
    label: 'Неделя',
  },
  {
    td_type: 'MTD',
    label: 'Месяц',
  },
];

export const TkStatistics = () => {
  const {tkId} = useParams();

  const [currentTdType, setCurrentTdType] = useQueryState<TdType>(
    'td_type',
    'DTD',
  );
  const handleTabSelect = (val: TdType) => {
    setCurrentTdType(val);
  };

  const {data, isPending, error} = useGetTkStatItems({tkId: tkId ?? ''});

  const renderContent = (statItems: TkStatItem[] | undefined) => {
    if (!statItems) {
      return null;
    }

    return (
      <>
        <Header title={`Показатели по ТК ${tkId}`} />

        <Stack direction="row" gap={1.5} mb={4}>
          {tabs.map(({label, td_type}) => (
            <TabButton
              key={td_type}
              value={td_type}
              label={label}
              isSelected={currentTdType === td_type}
              onSelect={handleTabSelect}
            />
          ))}
        </Stack>

        {tabs.map(({td_type}) => {
          if (td_type !== currentTdType) {
            return null;
          }

          const stat = statItems.find(item => item.td_type === td_type);
          if (!stat) {
            return null;
          }

          return <StatTab key={td_type} stat={stat} />;
        })}
      </>
    );
  };

  return (
    <PageContentLayout isPending={isPending} error={error}>
      {renderContent(data)}
    </PageContentLayout>
  );
};
