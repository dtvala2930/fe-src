export type ResponseData<T> = {
  data: T[];
  statusCode: number;
  success: boolean;
  metaData: {
    limit: number;
    page: number;
    total: number;
  };
};
export type ResponseDetailData<T> = {
  data: T;
  statusCode: number;
  success: string;
  countDistinctCustomerAccount: string;
};

export type ErrorResponse = {
  data: {
    message: string;
    statusCode: number;
  };
};
