export interface TaskPersonOnBackend {
  id: number;
  employee_code: string;
  employee_name: string;
}

export interface TaskTypeOnBackend {
  id: number;
  name: string;
  type: 'auto' | 'manual';
  slug: string;
}

export interface TaskOnBackend {
  id: number;
  title: string;
  description: string;
  type: TaskTypeOnBackend;
  current_status: string;
  date_from: string;
  date_to: string;
  assignee: TaskPersonOnBackend | null;
  validator: TaskPersonOnBackend | null;
  created_at: string;
  updated_at: string;
}

export interface GetTasksResponse {
  array: TaskOnBackend[];
  page: number;
  items_per_page: number;
  total_pages: number;
  total: number;
}

export interface CommentOnBackend {
  id: number;
  author: {
    id: number;
    employee_code: string;
    employee_name: string;
  };
  text: string;
  created_at: string;
}

export interface GetCommentsResponse {
  task_id: number;
  comments: CommentOnBackend[];
  pagination: {
    page: number;
    items_per_page: number;
    total_pages: number;
    total: number;
  };
}

export type TaskCustomFieldOnBackend = (
  | {
      type: 'string' | 'date' | 'text';
      value: string;
    }
  | {
      type: 'number';
      value: number;
    }
  | {
      type: 'json';
      value: object;
    }
  | {
      type: 'boolean';
      value: boolean;
    }
) & {
  order: number;
  name: string;
  description: string | null;
};

export interface GetTaskCustomFieldsResponse {
  custom_fields: {
    [name: string]: TaskCustomFieldOnBackend;
  };
}

export interface TaskActionOnBackend {
  id: number;
  name: string;
  direction: 'forward' | 'backward';
  next_status_type: 'new' | 'in_progress' | 'done';
}

export interface GetTaskActionsResponse {
  actions: TaskActionOnBackend[];
}
