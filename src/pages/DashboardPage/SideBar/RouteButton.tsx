import {FC} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {Box, Button, Typography} from '@mui/material';

import {ROUTE__DASHBOARD} from '@shared/constants';
import {SideBarMenuItem} from './types';

import {
  COLOR__MAIN_BLACK,
  COLOR__PRIMARY_LIGHT,
  COLOR__WARNING,
  COLOR__WHITE,
} from '@/theme/colors';

interface Props {
  menuItem: SideBarMenuItem;
}

export const RouteButton: FC<Props> = ({menuItem}) => {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const {Icon, text, route} = menuItem;
  const absRoute = route.startsWith('/')
    ? route
    : `${ROUTE__DASHBOARD}/${route}`;
  const isCurrentRoute = pathname.startsWith(absRoute);
  const currentColor = isCurrentRoute ? COLOR__WARNING : COLOR__MAIN_BLACK;

  return (
    <Button
      key={text}
      variant="outlined"
      onClick={() => {
        navigate(route);
      }}
      sx={{
        padding: '12px 16px',
        justifyContent: 'flex-start',

        backgroundColor: isCurrentRoute ? COLOR__PRIMARY_LIGHT : COLOR__WHITE,
        border: '1px solid transparent',
        '&:hover': {
          backgroundColor: COLOR__PRIMARY_LIGHT,
          border: '1px solid transparent',
        },
        '&:active': {
          backgroundColor: COLOR__PRIMARY_LIGHT,
          border: '1px solid transparent',
        },
      }}
    >
      <Box display="flex" gap={1} alignItems="center">
        <Icon
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          style={{
            width: '24px',
            height: '100%',
            color: currentColor,
          }}
        />

        <Typography
          sx={{
            fontWeight: 400,
            fontSize: 16,
            lineHeight: '20px',
            color: currentColor,
          }}
        >
          {text}
        </Typography>
      </Box>
    </Button>
  );
};
