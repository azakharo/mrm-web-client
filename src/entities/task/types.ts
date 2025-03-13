// values are backend specific
export enum TaskStatus {
  notAssigned = 'Новая',
  inProgress = 'В процессе',
  completed = 'Закрыта',
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
