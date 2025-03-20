import {FC} from 'react';
import {useNavigate} from 'react-router-dom';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import {Box, Button, ButtonBase, Stack, Typography} from '@mui/material';

import {ROUTE__TK_STATISTICS} from '@shared/constants';
import SettingsIcon from './settings.svg?react';
import {Value} from './Value';

import {
  COLOR__ERROR,
  COLOR__SECONDARY,
  COLOR__SUCCESS,
  COLOR__WHITE,
} from '@/theme/colors';

const iconSize = 24;

export const TkIndex: FC = () => {
  const navigate = useNavigate();

  return (
    <ButtonBase
      onClick={() => {
        // TODO use real TK number
        navigate(ROUTE__TK_STATISTICS.replace(':tkId', '612'));
      }}
    >
      <Stack
        p={2.25}
        spacing={1}
        width="fit-content"
        minWidth={330}
        sx={{
          backgroundColor: COLOR__WHITE,
          borderRadius: '15px',
        }}
      >
        <Box display="flex" alignItems="center">
          <Typography variant="b1semibold">Показатели по</Typography>

          <Button
            href="#"
            variant="text"
            color="secondary"
            sx={{
              padding: '4px 8px',
            }}
            onClick={event => {
              event.stopPropagation();
              alert('Ещё не реализовано - по клику будет открываться поп-ап');
            }}
          >
            <Typography variant="b1semibold" color={COLOR__SECONDARY}>
              ТK 1342&nbsp;&nbsp;
            </Typography>

            <SettingsIcon
              width={iconSize}
              height={iconSize}
              color={COLOR__SECONDARY}
            />
          </Button>

          <EastOutlinedIcon sx={{marginLeft: 'auto'}} />
        </Box>

        <Box display="flex" gap={8}>
          <Value count={2} countColor={COLOR__SUCCESS} label="Прирост" />
          <Value count={3} countColor={COLOR__ERROR} label="Убыток" />
        </Box>
      </Stack>
    </ButtonBase>
  );
};
