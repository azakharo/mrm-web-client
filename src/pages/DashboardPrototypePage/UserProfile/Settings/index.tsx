import {FC} from 'react';
import {Box, Stack, Typography} from '@mui/material';

import NotifsIcon from '../../SideBar/icons/notifications.svg?react';
import DocumentIcon from './icons/document.svg?react';
import LayoutIcon from './icons/layout.svg?react';
import HelpIcon from './icons/message.svg?react';
import SunIcon from './icons/sun.svg?react';

import {ButtonWithArrow} from '@/components/Buttons/ButtonWithArrow';
import {COLOR__WARNING} from '@/theme/colors';

const commonIconProps = {
  width: 24,
  height: '100%',
  style: {color: COLOR__WARNING},
};

export const Settings: FC = () => {
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

      <Box display="flex" gap={3} flexWrap="wrap">
        <ButtonWithArrow
          icon={<SunIcon {...commonIconProps} />}
          text="Тема оформления"
          onClick={() => {
            alert('not implemented yet');
          }}
        />

        <ButtonWithArrow
          icon={<NotifsIcon {...commonIconProps} />}
          text="Уведомления"
          onClick={() => {
            alert('not implemented yet');
          }}
        />

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
          icon={<HelpIcon {...commonIconProps} />}
          text="Нужна помощь"
          onClick={() => {
            alert('not implemented yet');
          }}
        />
      </Box>
    </Stack>
  );
};
