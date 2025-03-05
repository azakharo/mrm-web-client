import {Stack} from '@mui/material';

import StatusSelect from './StatusSelect';

const FilterInputs = () => {
  return (
    <Stack direction="row" spacing={2}>
      <StatusSelect />
    </Stack>
  );
};

export default FilterInputs;
