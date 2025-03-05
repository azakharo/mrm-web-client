import {Stack} from '@mui/material';

import FilterInputs from './FilterInputs';
import FilterValues from './FilterValues';

const FilterPanel = () => {
  return (
    <Stack spacing={2} mb={3.5}>
      <FilterInputs />
      <FilterValues />
    </Stack>
  );
};

export default FilterPanel;
