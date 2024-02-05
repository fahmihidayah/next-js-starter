export interface BaseResponse<T> {
    message: string;
    statusCode: number;
    data?: T;
}


export interface FormState {
    data?: any;
    message? : string;
    isError? : boolean;
    fieldErrors? : any;
}