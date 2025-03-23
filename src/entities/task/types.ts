import {TaskActionOnBackend, TaskTypeSlug} from './api/backendTypes';

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
  type: TaskTypeSlug;
  typeDisplayString: string;
  status: TaskStatus;
  startDate: Date;
  endDate: Date;
  executor: TaskPerson | null;
  validator: TaskPerson | null;
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

export type TaskCustomFieldValue = string | number | Date | object | boolean;

export interface TaskCustomField {
  id: string; // name on the backend
  name: string;
  description: string;
  value: TaskCustomFieldValue;
  order: number;
}

export type TaskAction = TaskActionOnBackend;

export interface TaskInventoryCustomFields {
  sapTaskNumber: number | null;
  sapTaskStatus: string | null;
  sapTaskProgress: number | null;
  sapTaskCurrentValue: number | null;
  sapTaskOverallValue: number | null;
}

export type TaskInventory = Task & TaskInventoryCustomFields;

export interface TaskTbpCustomFields {
  overallCost: number | null;
  overallCount: number | null;
  overallWeight: number | null;
  progress: number | null;
}

export type TaskTbp = Task & TaskTbpCustomFields;
