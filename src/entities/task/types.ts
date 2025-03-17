import {TaskActionOnBackend} from './api/backendTypes';

// values are backend specific
export enum TaskStatus {
  new = 'Новая',
  closed = 'Закрыта',
}

export interface TaskPerson {
  id: number;
  code: string;
  name: string;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  type: string;
  status: TaskStatus;
  startDate: Date;
  endDate: Date;
  executor: TaskPerson | null;
  validator: TaskPerson | null;
  completionPercent: number;
  created: Date;
  updated: Date;
}

export interface Comment {
  id: number;
  author: string;
  text: string;
  created: Date;
}

// The values are backend specific.
// "all" means that the filter is NOT set.
export enum ActivityFilter {
  all = '',
  notStarted = 'new',
  active = 'in_progress',
  finished = 'done',
}

export interface TaskCustomField {
  name: string;
  description: string;
  value: string | number | Date | object | boolean;
  order: number;
}

export type TaskAction = TaskActionOnBackend;
