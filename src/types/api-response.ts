export interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}

export interface PaginatedResponse<T> {
  status: number;
  message: string;
  data: {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
  };
}
