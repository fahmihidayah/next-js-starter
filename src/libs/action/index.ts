'use server'
import { ZodType } from "zod";
import { BaseResponse, FormState } from "../types/base";
import { AxiosError } from "axios";
import { redirect } from "next/navigation";

export interface BaseActionParams<F> {
    params: F;
    redirect?: string;
    query?: (params : F) => Promise<any>;
}

export async function doAction<F>(params: BaseActionParams<F>): Promise<FormState> {
    let data : BaseResponse<any> = {
        message : "query not execute",
        statusCode : 500,
    };
    try {
        console.log(params.params)
        const response = await params.query?.(params.params);
        data = response.data as BaseResponse<any>;
    }
    catch (error) {
        
        if (error instanceof AxiosError) {
            console.log(error.request?.params, error.response?.data)
            return {
                isError: true,
                message: error.response?.data.message
            };
        }
        console.log(error)
        return {
            isError: true,
            message: error?.toString() ?? "Unknown error"
        }
    }

    if (params.redirect !== undefined) {
        redirect(params.redirect);
    }
    return data;
}
