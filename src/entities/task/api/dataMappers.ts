import {getDateFromIsoString} from '@shared/api';
import {Task, TaskStatus} from '../types';
import {TaskOnBackend} from './backendTypes';

export const mapFromBackend = (taskBackend: TaskOnBackend): Task => {
  const {id, title, description, created_at, updated_at} = taskBackend;

  return {
    id,
    title,
    description,
    created: getDateFromIsoString(created_at),
    updated: getDateFromIsoString(updated_at),
    status: TaskStatus.notAssigned,
    completionPercent: 0,
  };
};
