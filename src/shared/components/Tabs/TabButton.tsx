import {ToggleButton, Typography} from '@mui/material';

import {COLOR__BACK, COLOR__MAIN_BLACK, COLOR__WHITE} from '@/theme/colors';

const hoverColor = '#E5E7ED';

interface Props<TValue> {
  value: TValue; // value associated with the tab
  label: string;
  isSelected: boolean;
  onSelect: (value: TValue) => void;
}

export const TabButton = <TValue = string,>({
  value,
  label,
  isSelected,
  onSelect,
}: Props<TValue>) => {
  const color = isSelected ? COLOR__WHITE : COLOR__MAIN_BLACK;

  return (
    <ToggleButton
      value={value as never}
      selected={isSelected}
      onChange={() => {
        onSelect(value);
      }}
      sx={{
        borderRadius: '20px',
        border: '1px solid transparent',
        padding: '7px 12px',
        backgroundColor: COLOR__BACK,
        color,
        '&:hover': {
          backgroundColor: hoverColor,
          '& > span': {
            color: COLOR__MAIN_BLACK,
          },
        },
        '&:active': {
          backgroundColor: hoverColor,
        },
        '&.Mui-selected': {
          backgroundColor: COLOR__MAIN_BLACK,
        },
        '&:hover.Mui-selected': {
          backgroundColor: COLOR__MAIN_BLACK,
          '& > span': {
            color: COLOR__WHITE,
          },
        },
      }}
    >
      <Typography
        variant="b2regular"
        sx={{
          color,
        }}
      >
        {label}
      </Typography>
    </ToggleButton>
  );
};
