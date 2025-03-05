import {ChangeEvent, FC, useState} from 'react';
import {Box, Stack, Switch, Typography} from '@mui/material';

import {ButtonWithArrow} from '@shared/components';
import NotifsIcon from '../../SideBar/icons/notifications.svg?react';
import DocumentIcon from './icons/document.svg?react';
import LayoutIcon from './icons/layout.svg?react';
import HelpIcon from './icons/message.svg?react';

import {COLOR__LIGHT_GRAY} from '@/theme/colors';

const commonIconProps = {
  width: 24,
  height: 24,
  style: {color: '#FE8414'},
};

export const Settings: FC = () => {
  const [enabledNotifs, setEnabledNotifs] = useState(true);

  const handleEnabledNotifsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEnabledNotifs(event.target.checked);
  };

  return (
    <Stack spacing={2} mt={3}>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: 20,
          lineHeight: '25px',
        }}
      >
        Настройки профиля
      </Typography>

      <Box
        display="flex"
        gap={3}
        flexWrap="wrap"
        sx={{
          '&> button': {
            minWidth: 300,
          },
        }}
      >
        <ButtonWithArrow
          icon={<DocumentIcon {...commonIconProps} />}
          text="Документы"
          onClick={() => {
            alert('not implemented yet');
          }}
        />

        <ButtonWithArrow
          icon={<LayoutIcon {...commonIconProps} />}
          text="Данные приложения"
          onClick={() => {
            alert('not implemented yet');
          }}
        />

        <ButtonWithArrow
          icon={<NotifsIcon {...commonIconProps} />}
          text="Уведомления"
          onClick={() => {}}
          arrow={
            <Switch
              checked={enabledNotifs}
              onChange={handleEnabledNotifsChange}
              sx={{marginLeft: 'auto'}}
              inputProps={{
                onClick: event => {
                  event.stopPropagation();
                },
              }}
            />
          }
        />

        <ButtonWithArrow
          icon={<HelpIcon {...commonIconProps} />}
          content={
            <Stack>
              <Typography>Нужна помощь</Typography>

              <Typography variant="b3regular" color={COLOR__LIGHT_GRAY}>
                Служба поддержки
              </Typography>
            </Stack>
          }
          onClick={() => {
            alert('not implemented yet');
          }}
        />
      </Box>
    </Stack>
  );
};
