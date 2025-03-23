import {format} from 'date-fns';

import {DATETIME_FORMAT} from '@shared/constants';
import {catchUnknownValue, compareStringsIgnoringCase} from '@shared/helpers';
import {TaskTypeSlug} from './api/backendTypes';
import {
  Task,
  TaskCustomField,
  TaskCustomFieldValue,
  TaskInventory,
  TaskInventoryCustomFields,
  TaskTbp,
  TaskTbpCustomFields,
} from './types';

export const getTaskCustomFieldValueDisplayString = (
  value: TaskCustomFieldValue,
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

export const getTaskCustomFieldValue = (
  customFields: TaskCustomField[],
  fieldName: string,
): TaskCustomFieldValue | null => {
  const field = customFields.find(fld => fld.id === fieldName);
  if (!field) {
    return null;
  }

  return field.value;
};

export const getTaskInventoryCustomFields = (
  customFields: TaskCustomField[],
): TaskInventoryCustomFields => {
  const fields: TaskInventoryCustomFields = {
    sapTaskNumber: null,
    sapTaskStatus: null,
    sapTaskProgress: null,
    sapTaskCurrentValue: null,
    sapTaskOverallValue: null,
  };

  fields.sapTaskNumber = getTaskCustomFieldValue(
    customFields,
    'sap_task_number',
  ) as number | null;

  fields.sapTaskStatus = getTaskCustomFieldValue(
    customFields,
    'sap_task_status',
  ) as string | null;

  fields.sapTaskProgress = getTaskCustomFieldValue(
    customFields,
    'sap_task_progress',
  ) as number | null;

  fields.sapTaskCurrentValue = getTaskCustomFieldValue(
    customFields,
    'sap_task_current_value',
  ) as number | null;

  fields.sapTaskOverallValue = getTaskCustomFieldValue(
    customFields,
    'sap_task_overall_value',
  ) as number | null;

  return fields;
};

export const isTaskInventory = (task: Task): task is TaskInventory =>
  compareStringsIgnoringCase(task.type, TaskTypeSlug.INVENTORY);

export const getTaskTbpCustomFields = (
  customFields: TaskCustomField[],
): TaskTbpCustomFields => {
  const fields: TaskTbpCustomFields = {
    overallCost: null,
    overallWeight: null,
    overallCount: null,
    progress: null,
  };

  fields.overallCost = getTaskCustomFieldValue(
    customFields,
    'tbp_task_overall_cost',
  ) as number | null;

  fields.overallWeight = getTaskCustomFieldValue(
    customFields,
    'tbp_task_overall_weight',
  ) as number | null;

  fields.overallCount = getTaskCustomFieldValue(
    customFields,
    'tbp_task_overall_count',
  ) as number | null;

  fields.progress = getTaskCustomFieldValue(
    customFields,
    'tbp_task_progress',
  ) as number | null;

  return fields;
};

export const isTaskTbp = (task: Task): task is TaskTbp =>
  compareStringsIgnoringCase(task.type, TaskTypeSlug.TBP);
