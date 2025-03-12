import {getDateFromIsoString} from '@shared/api';
import {Comment, Task, TaskStatus} from '../types';
import {CommentOnBackend, TaskOnBackend} from './backendTypes';

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
  } = taskBackend;

  return {
    id,
    title,
    description,
    created: getDateFromIsoString(created_at),
    updated: getDateFromIsoString(updated_at),
    status: current_status as TaskStatus,
    startDate: getDateFromIsoString(date_from),
    endDate: getDateFromIsoString(date_to),
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
