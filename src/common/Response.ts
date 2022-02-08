export interface Response<T> {
    code? : number,
    description?: string
    data?: T
}

export interface IPagedResponse<T> extends Response<T> {
    pageNumber?: number,
    pageRecords?: number,
    totalPages?: number,
    totalRecords?: number
}

export interface IErrorResponse {
    code?: number,
    error?: string,
    description?: string
}

