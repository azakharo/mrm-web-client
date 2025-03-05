export enum TaskStatus {
  notAssigned = 'not assigned',
  inProgress = 'in progress',
  completed = 'completed',
}

export interface Task {
  id: number;
  name: string;
  description: string;
  status: TaskStatus;
  completionPercent: number;
}
