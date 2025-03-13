import {Stack} from '@mui/material';

import {getLabel} from '@entities/task';
import {useFilters} from '../../FilterContext';
import {FilterValue} from './FilterValue';

const FilterValues = () => {
  const {statusFilter, setStatusFilter} = useFilters();

  return (
    <Stack direction="row" spacing={2}>
      {statusFilter && (
        <FilterValue
          label={getLabel(statusFilter)}
          onDelete={() => {
            setStatusFilter('');
          }}
        />
      )}
    </Stack>
  );
};

export default FilterValues;
