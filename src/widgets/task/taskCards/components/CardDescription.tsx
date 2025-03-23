import {FC} from 'react';
import {Tooltip, Typography} from '@mui/material';

import {limitString} from '@shared/utils/strings';

import {COLOR__LIGHT_GRAY, COLOR__WHITE} from '@/theme/colors';

const tooltipTypographyProps = {
  variant: 'b2regular',
  sx: {color: COLOR__WHITE},
} as const;

const descriptionLenLimit = 2 * 40;

interface Props {
  description: string;
}

export const CardDescription: FC<Props> = ({description}) => {
  const descriptionElem = (
    <Typography
      variant="b2regular"
      sx={{color: COLOR__LIGHT_GRAY, minHeight: 42}}
      textAlign="left"
      display="block"
    >
      {limitString(description, descriptionLenLimit)}
    </Typography>
  );

  return description.length > descriptionLenLimit ? (
    <Tooltip
      title={<Typography {...tooltipTypographyProps}>{description}</Typography>}
    >
      {descriptionElem}
    </Tooltip>
  ) : (
    descriptionElem
  );
};
