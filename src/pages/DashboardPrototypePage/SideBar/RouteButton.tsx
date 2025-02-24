import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import {Box, Button, Typography} from '@mui/material';

import {SideBarMenuItem} from './types';

import {COLOR__MAIN_BLACK} from '@/theme/colors';

interface Props {
  menuItem: SideBarMenuItem;
}

export const RouteButton: FC<Props> = ({menuItem}) => {
  const navigate = useNavigate();
  const {icon, text, route} = menuItem;

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
      }}
    >
      <Box display="flex" gap={1} alignItems="center">
        {icon}

        <Typography
          sx={{
            fontWeight: 400,
            fontSize: 16,
            lineHeight: '20px',
            color: COLOR__MAIN_BLACK,
          }}
        >
          {text}
        </Typography>
      </Box>
    </Button>
  );
};
