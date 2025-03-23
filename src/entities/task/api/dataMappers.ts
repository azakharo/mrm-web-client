import {getDateFromIsoString} from '@shared/api';
import {Comment, Task, TaskCustomField, TaskPerson, TaskStatus} from '../types';
import {
  CommentOnBackend,
  TaskCustomFieldOnBackend,
  TaskOnBackend,
  TaskPersonOnBackend,
  TaskTypeSlug,
} from './backendTypes';
import {taskTypeSlugToGetCustomFieldsFunc} from './constants';

export const mapTaskPersonFromBackend = (
  taskPerson: TaskPersonOnBackend | null,
): TaskPerson | null => {
  if (!taskPerson) {
    return null;
  }

  const {id, employee_name, employee_code} = taskPerson;

  return {
    id,
    code: employee_code,
    name: employee_name,
  };
};

export const mapTaskCustomFieldFromBackend = (
  field: TaskCustomFieldOnBackend,
  id: string,
): TaskCustomField => {
  const {type, value, name, description, order} = field;

  let normalizedValue = value;
  if (type === 'date') {
    normalizedValue = getDateFromIsoString(value);
  }

  return {
    id,
    name: name ?? '',
    description: description ?? '',
    order,
    value: normalizedValue,
  };
};

export const mapTaskFromBackend = (taskBackend: TaskOnBackend): Task => {
  const {
    id,
    title,
    description,
    created_at,
    updated_at,
    current_status,
    date_from,
    date_to,
    type,
    assignee,
    validator,
    custom_fields,
  } = taskBackend;

  const commonProps = {
    id,
    title,
    description,
    type: type.slug as TaskTypeSlug,
    typeDisplayString: type.name,
    created: getDateFromIsoString(created_at),
    updated: getDateFromIsoString(updated_at),
    status: current_status.name as TaskStatus,
    startDate: getDateFromIsoString(date_from),
    endDate: getDateFromIsoString(date_to),
    executor: mapTaskPersonFromBackend(assignee),
    validator: mapTaskPersonFromBackend(validator),
  };

  const customFields = Object.entries(custom_fields).map(([key, fld]) =>
    mapTaskCustomFieldFromBackend(fld, key),
  );

  const getCustomFieldsFunc =
    taskTypeSlugToGetCustomFieldsFunc[type.slug as TaskTypeSlug];

  if (getCustomFieldsFunc) {
    return {
      ...commonProps,
      ...getCustomFieldsFunc(customFields),
    };
  }

  return commonProps;
};

export const mapCommentFromBackend = (
  commentBackend: CommentOnBackend,
): Comment => {
  const {id, author, text, created_at} = commentBackend;

  return {
    id,
    author: author.employee_name,
    text,
    created: getDateFromIsoString(created_at),
  };
};
