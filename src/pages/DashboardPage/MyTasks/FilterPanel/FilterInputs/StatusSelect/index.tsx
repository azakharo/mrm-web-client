import {Badge, badgeClasses, MenuItem, Select, Typography} from '@mui/material';

import {statusToLabel, TaskStatus} from '@entities/task';
import {useFilters} from '../../../FilterContext';

const badgeSize = 9;

const options = Object.entries(statusToLabel).map(([status, label]) => ({
  value: status,
  label,
}));

const StatusSelect = () => {
  const {statusFilter, setStatusFilter} = useFilters();

  return (
    <Badge
      variant="dot"
      color="warning"
      sx={{
        [`& .${badgeClasses.dot}`]: {
          width: badgeSize,
          height: badgeSize,
          borderRadius: '50%',
        },
        '& .MuiBadge-badge': {
          right: 3,
          top: 3,
        },
      }}
      invisible={!statusFilter}
    >
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
    </Badge>
  );
};

export default StatusSelect;
