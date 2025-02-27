import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {Avatar, Box, Stack, Typography} from '@mui/material';

import {Header} from '../Header';
import LogoutIcon from './logout.svg?react';
import userAvatarSrc from './userAvatar.png';

import {ROUTE__LOGIN} from '@/constants';
import {useAuth} from '@/hooks/useAuth';
import {LoginButton} from '@/pages/LoginPage/LoginButton';
import {COLOR__LIGHT_GRAY, COLOR__WARNING} from '@/theme/colors';

const avatarSize = 106;
const logoutIconSize = 24;

// TODO get real data
const userFullName = 'Миронова Елена Дмитриевна';
const userId = 'Табельный 3443';

export const UserProfile: FC = () => {
  const {logout} = useAuth();
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    logout();
    navigate(ROUTE__LOGIN);
  };

  return (
    <>
      <Header title="Профиль" hiddenUserProfileButton />

      <Box px={4}>
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar
            src={userAvatarSrc}
            alt={userFullName}
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
              {userFullName}
            </Typography>

            <Typography
              sx={{
                fontWeight: 400,
                fontSize: 18,
                lineHeight: '23px',
                color: COLOR__LIGHT_GRAY,
              }}
            >
              {userId}
            </Typography>
          </Stack>

          <Box marginLeft="auto">
            <LoginButton
              icon={
                <LogoutIcon
                  width={logoutIconSize}
                  height={logoutIconSize}
                  style={{color: COLOR__WARNING}}
                />
              }
              text="Выйти из профиля"
              onClick={handleLogoutClick}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
