import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {Avatar, Box, ButtonBase, Stack, Typography} from '@mui/material';
import {darken} from '@mui/material/styles';

import userAvatarSrc from './userAvatar.png';

import {COLOR__BACK, COLOR__WHITE} from '@/theme/colors';

const backgroundColorOnHover = darken(COLOR__WHITE, 0.1);

export const UserProfileButton: FC = () => {
  const navigate = useNavigate();

  // TODO get user info from useAuth()
  const userName = 'Елена Викторовна';
  const userPosition = 'Директор';

  const handleClick = () => {
    navigate('user-profile');
  };

  return (
    <ButtonBase onClick={handleClick}>
      <Box
        p={1}
        display="flex"
        alignItems="center"
        gap={2}
        sx={{
          backgroundColor: COLOR__WHITE,
          border: `1px solid ${COLOR__BACK}`,
          borderRadius: '12px',
          '&:hover': {
            backgroundColor: backgroundColorOnHover,
          },
          '&:active': {
            backgroundColor: backgroundColorOnHover,
          },
        }}
      >
        <Avatar src={userAvatarSrc} alt={userName} sx={{marginLeft: 1}} />

        <Stack alignItems="flex-start">
          <Typography
            noWrap
            sx={{
              fontWeight: 400,
              fontSize: 14,
              lineHeight: '18px',
            }}
          >
            {userName}
          </Typography>

          <Typography
            noWrap
            sx={{
              fontWeight: 400,
              fontSize: 14,
              lineHeight: '18px',
              color: '#767485',
            }}
          >
            {userPosition}
          </Typography>
        </Stack>
      </Box>
    </ButtonBase>
  );
};
