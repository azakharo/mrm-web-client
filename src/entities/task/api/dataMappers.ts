import {getDateFromIsoString} from '@shared/api';
import {Comment, Task, TaskCustomField, TaskPerson, TaskStatus} from '../types';
import {
  CommentOnBackend,
  TaskCustomFieldOnBackend,
  TaskOnBackend,
  TaskPersonOnBackend,
} from './backendTypes';

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
  } = taskBackend;

  return {
    id,
    title,
    description,
    type: type.name,
    created: getDateFromIsoString(created_at),
    updated: getDateFromIsoString(updated_at),
    status: current_status as TaskStatus,
    startDate: getDateFromIsoString(date_from),
    endDate: getDateFromIsoString(date_to),
    executor: mapTaskPersonFromBackend(assignee),
    validator: mapTaskPersonFromBackend(validator),
    completionPercent: 0,
  };
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

export const mapTaskCustomFieldFromBackend = (
  field: TaskCustomFieldOnBackend,
): TaskCustomField => {
  const {type, value, name, description, order} = field;

  let normalizedValue = value;
  if (type === 'date') {
    normalizedValue = getDateFromIsoString(value);
  }

  return {
    name,
    description: description ?? '',
    order,
    value: normalizedValue,
  };
};
