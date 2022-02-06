export interface IAPIResponse<T> {
    code? : number,
    status?: string
    data?: T
}

export interface IAPIPagedResponse<T> extends IAPIResponse<T> {
    pageNumber?: number,
    pageRecords?: number,
    totalPages?: number,
    totalRecords?: number
}