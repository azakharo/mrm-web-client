// values are backend specific
export enum TaskStatus {
  notAssigned = 'Новая',
  inProgress = 'В процессе',
  completed = 'Закрыта',
}

export interface Task {
  id: number;
  title: string;
  description: string;
  // TODO add type
  status: TaskStatus;
  startDate: Date;
  endDate: Date;
  // TODO add assignee and validator
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
