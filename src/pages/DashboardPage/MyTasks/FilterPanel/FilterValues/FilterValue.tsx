import React, {FC} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {Chip, Typography} from '@mui/material';

import {COLOR__BACK, COLOR__MAIN_BLACK} from '@/theme/colors';

const closeIconSize = 16;

interface Props {
  onDelete: () => void;
  label: string;
}

export const FilterValue: FC<Props> = ({onDelete, label}) => {
  return (
    <Chip
      label={<Typography variant="b3regular">{label}</Typography>}
      onDelete={onDelete}
      onClick={onDelete}
      deleteIcon={
        <CloseIcon
          sx={{
            fill: COLOR__MAIN_BLACK,
            width: closeIconSize,
            height: closeIconSize,
          }}
        />
      }
      sx={{
        borderRadius: '15px',
        backgroundColor: COLOR__BACK,
        paddingX: '3px',
      }}
    />
  );
};
