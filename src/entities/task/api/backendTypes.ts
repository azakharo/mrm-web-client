export interface TaskOnBackend {
  id: number;
  title: string;
  description: string;
  current_status: string;
  date_from: string;
  date_to: string;
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
