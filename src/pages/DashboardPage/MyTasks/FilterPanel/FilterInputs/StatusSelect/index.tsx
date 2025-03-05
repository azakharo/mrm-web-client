import {MenuItem, Select, Typography} from '@mui/material';

import {statusToLabel, TaskStatus} from '@entities/task';
import {useFilters} from '../../../FilterContext';

const options = Object.entries(statusToLabel).map(([status, label]) => ({
  value: status,
  label,
}));

const StatusSelect = () => {
  const {statusFilter, setStatusFilter} = useFilters();

  return (
    <Select
      value={statusFilter}
      onChange={event => {
        setStatusFilter(event.target.value as TaskStatus);
      }}
      displayEmpty
      renderValue={selected => {
        if (selected.length === 0) {
          return <Typography variant="b2regular">Статус</Typography>;
        }

        return statusToLabel[selected];
      }}
      sx={{
        minWidth: 120,
      }}
    >
      {options.map(({value, label}) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default StatusSelect;
