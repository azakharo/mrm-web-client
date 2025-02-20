import {FC, ReactNode} from 'react';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import {Box, ButtonBase, Typography} from '@mui/material';
import {darken} from '@mui/material/styles';

import {COLOR__WHITE} from '@/theme/colors';

const backgroundColorOnHover = darken(COLOR__WHITE, 0.1);

interface Props {
  icon: ReactNode;
  text: string;
  url2goOnClick: string;
  onClick?: () => void;
}

export const LoginButton: FC<Props> = ({
  icon,
  text,
  url2goOnClick,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }

    window.location.href = url2goOnClick;
  };

  return (
    <ButtonBase onClick={handleClick}>
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        gap={1}
        sx={{
          backgroundColor: COLOR__WHITE,
          padding: 2,
          borderRadius: '15px',
          '&:hover': {
            backgroundColor: backgroundColorOnHover,
          },
          '&:active': {
            backgroundColor: backgroundColorOnHover,
          },
        }}
      >
        {icon}

        <Typography noWrap variant="button">
          {text}
        </Typography>

        <EastOutlinedIcon sx={{marginLeft: 'auto'}} />
      </Box>
    </ButtonBase>
  );
};
