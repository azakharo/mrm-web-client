export interface GetListInputParams {
  page?: number;
  pageSize?: number;
}

export interface GetListOutput<T> {
  items: T[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}
