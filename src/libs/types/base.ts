export interface BaseResponse<T> {
    message: string;
    statusCode: number;
    data?: T;
}


export interface FormState<D> {
    data?: D;
    message? : string;
    isError? : boolean;
    fieldErrors? : any;
}