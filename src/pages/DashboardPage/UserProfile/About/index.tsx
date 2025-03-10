import {FC, ReactNode} from 'react';
import {useAuth} from '@features/auth';
import {Avatar, Divider, Stack, Typography} from '@mui/material';

import userAvatarSrc from '../userAvatar.png';

import {COLOR__WHITE} from '@/theme/colors';

interface Item {
  label: string;
  value: ReactNode;
}

const valueTextStyles = {
  fontWeight: 400,
  fontSize: 16,
  lineHeight: '20px',
};
const avatarSize = 24;
// TODO get real data from the current user
const managerFullName = 'Иванов Иван Иванович';

export const About: FC = () => {
  const {currentUser} = useAuth();
  const {position, division} = currentUser!;

  const items: Item[] = [
    {
      label: 'Должность',
      value: (
        <Typography sx={valueTextStyles}>{position || 'Работник'}</Typography>
      ),
    },
    {
      label: 'Подразделение работы',
      value: <Typography sx={valueTextStyles}>{division}</Typography>,
    },
    {
      label: 'Руководитель',
      value: (
        <Stack direction="row" spacing={1}>
          <Avatar
            src={userAvatarSrc}
            alt={managerFullName}
            sx={{width: avatarSize, height: avatarSize}}
          />

          <Typography sx={valueTextStyles}>{managerFullName}</Typography>
        </Stack>
      ),
    },
  ];

  return (
    <Stack spacing={2} mt={3}>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: 20,
          lineHeight: '25px',
        }}
      >
        О сотруднике
      </Typography>

      <Stack
        p={3}
        sx={{backgroundColor: COLOR__WHITE, borderRadius: '15px'}}
        spacing={2}
        divider={<Divider />}
      >
        {items.map(({label, value}) => (
          <Stack key={label} spacing={1}>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: 14,
                lineHeight: '18px',
              }}
            >
              {label}
            </Typography>

            {value}
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
