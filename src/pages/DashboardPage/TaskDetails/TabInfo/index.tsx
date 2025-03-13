import {FC} from 'react';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import {Box, Divider, IconButton, Stack, Typography} from '@mui/material';
import {format} from 'date-fns';

import {Task} from '@entities/task';
import {CardBox} from '@shared/components';
import {DATE_FORMAT} from '@shared/constants';
import {ItemWithCustomLabel} from './ItemWithCustomLabel';
import {PersonItem} from './PersonItem';
import {SimpleItem} from './SimpleItem';

import {COLOR__SECONDARY} from '@/theme/colors';

interface Props {
  task: Task;
}

export const TabInfo: FC<Props> = ({task}) => {
  const {startDate, endDate, executor, validator} = task;

  return (
    <CardBox>
      <Stack spacing={2} divider={<Divider />}>
        <ItemWithCustomLabel
          label={
            <Box display="flex" alignItems="center" gap={1}>
              <Typography variant="b3semibold">Группы SKU</Typography>

              <Box
                sx={{
                  borderRadius: '10px',
                  paddingY: 0.5,
                  paddingX: 1.5,
                  color: COLOR__SECONDARY,
                  backgroundColor: '#F4F9FF',
                  fontSize: 15,
                  fontWeight: 500,
                }}
              >
                +78
              </Box>

              <IconButton
                aria-label="forward"
                onClick={() => {
                  alert('Ещё не реализовано');
                }}
                size="small"
              >
                <EastOutlinedIcon
                  sx={{
                    width: 20,
                    height: 20,
                  }}
                />
              </IconButton>
            </Box>
          }
          value="Молочные продукты"
        />

        <SimpleItem label="Время на выполнение" value="12 часов" />

        <SimpleItem label="Номер задания SAP" value="23433533" />

        <SimpleItem label="Статус SAP" value="Актуализировано" />

        <SimpleItem
          label="Дата начала"
          value={format(startDate, DATE_FORMAT)}
        />

        <SimpleItem
          label="Дата окончания"
          value={format(endDate, DATE_FORMAT)}
        />

        <PersonItem
          responsibility="Исполнитель"
          name={executor?.name ?? ''}
          position="Младший контролёр"
        />

        <PersonItem
          responsibility="Согласующий"
          name={validator?.name ?? ''}
          position="Старший контролёр"
        />

        <PersonItem
          responsibility="Ответственный"
          name="Сидоров Иван Иванович"
          position="Менеджер"
        />

        <SimpleItem label="Тип задачи" value="ЦИ" />
      </Stack>
    </CardBox>
  );
};
