import {useState} from 'react';
import {Box} from '@mui/material';

import {DayPicker} from '@shared/components';

import {COLOR__WHITE} from '@/theme/colors';

const Employees = () => {
  const [selected, setSelected] = useState<Date>();

  console.log(
    selected ? `Selected: ${selected.toLocaleDateString()}` : 'Pick a day.',
  );

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100dvh"
    >
      <Box
        p={3}
        sx={{
          backgroundColor: COLOR__WHITE,
          borderRadius: '15px',
        }}
      >
        <DayPicker mode="single" selected={selected} onSelect={setSelected} />
      </Box>
    </Box>
  );
};

export default Employees;
