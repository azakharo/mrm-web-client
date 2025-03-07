export interface TaskOnBackend {
  id: number;
  title: string;
  description: string;
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
