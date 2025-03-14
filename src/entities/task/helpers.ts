import {format} from 'date-fns';

import {DATETIME_FORMAT} from '@shared/constants';
import {catchUnknownValue} from '@shared/helpers';
import {TaskCustomField} from './types';

export const getTaskCustomFieldValueDisplayString = (
  value: TaskCustomField['value'],
): string => {
  if (value instanceof Date) {
    return format(value, DATETIME_FORMAT);
  } else if (typeof value === 'string') {
    return value;
  } else if (typeof value === 'number') {
    return value.toString();
  } else if (typeof value === 'boolean') {
    return value ? 'Да' : 'Нет';
  } else if (typeof value === 'object') {
    return Object.entries(value)
      .map(([key, val]) => `${key}=${val}`)
      .join(', ');
  } else {
    return catchUnknownValue(value);
  }
};
