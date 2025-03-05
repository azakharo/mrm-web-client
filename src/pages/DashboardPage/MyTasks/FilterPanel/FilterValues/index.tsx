import {Stack} from '@mui/material';

import {statusToLabel} from '@entities/task';
import {useFilters} from '../../FilterContext';
import {FilterValue} from './FilterValue';

const FilterValues = () => {
  const {statusFilter, setStatusFilter} = useFilters();

  return (
    <Stack direction="row" spacing={2}>
      {statusFilter && (
        <FilterValue
          label={statusToLabel[statusFilter]}
          onDelete={() => {
            setStatusFilter('');
          }}
        />
      )}
    </Stack>
  );
};

export default FilterValues;
