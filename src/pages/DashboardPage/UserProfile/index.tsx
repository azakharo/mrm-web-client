import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAuth} from '@features/auth';
import {Avatar, Box, Stack, Typography} from '@mui/material';

import {ButtonWithArrow} from '@shared/components';
import {ROUTE__LOGIN} from '@shared/constants';
import {Header} from '../Header';
import {About} from './About';
import LogoutIcon from './logout.svg?react';
import {Settings} from './Settings';
import userAvatarSrc from './userAvatar.png';

import {COLOR__LIGHT_GRAY} from '@/theme/colors';

const avatarSize = 106;
const logoutIconSize = 24;

export const UserProfile: FC = () => {
  const {currentUser, logout} = useAuth();
  const navigate = useNavigate();
  const {code, fullName} = currentUser!;

  const handleLogoutClick = () => {
    logout();
    navigate(ROUTE__LOGIN);
  };

  return (
    <Box px={4}>
      <Header title="Профиль" hiddenUserProfileButton />

      <Box display="flex" alignItems="center" gap={2}>
        <Avatar
          src={userAvatarSrc}
          alt={fullName}
          sx={{width: avatarSize, height: avatarSize}}
        />

        <Stack spacing={1}>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 22,
              lineHeight: '28px',
            }}
          >
            {fullName}
          </Typography>

          <Typography
            sx={{
              fontWeight: 400,
              fontSize: 18,
              lineHeight: '23px',
              color: COLOR__LIGHT_GRAY,
            }}
          >
            Табельный {code}
          </Typography>
        </Stack>

        <Box marginLeft="auto">
          <ButtonWithArrow
            icon={
              <LogoutIcon
                width={logoutIconSize}
                height={logoutIconSize}
                style={{color: '#FE8414'}}
              />
            }
            text="Выйти из профиля"
            onClick={handleLogoutClick}
          />
        </Box>
      </Box>

      <About />

      <Settings />
    </Box>
  );
};
