interface BaseResponse<T = unknown> {
    isSuccess: boolean;
    statusCode: number;
    message?: string;
    result?: T;
}

interface PageinationResult<T = unknown> {
    data?: T;
    pagination : Paginate

}

interface Paginate{
    totalItems: number;
    totalPages: number;
    currentPage: number;
    pageSize: number;
}
