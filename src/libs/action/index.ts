import { ZodType } from "zod";
import { BaseResponse, FormState } from "../types/base";
import { AxiosError } from "axios";
import { redirect } from "next/navigation";

interface BaseActionParams<F> {
    params: F;
    validationScheme?: ZodType;
    redirect?: string;
    query: (params : F) => Promise<any>;
}

export async function doAction<F, D>(params: BaseActionParams<F>): Promise<FormState<D>> {
    const validationResult = params.validationScheme?.safeParse(params.params)

    if (params.validationScheme) {
        if (!validationResult?.success) {
            return {
                isError: true,
                fieldErrors: validationResult?.error.flatten().fieldErrors,
            }
        }
    }

    let data : BaseResponse<D> = {
        message : "query not execute",
        statusCode : 500,
    };
    try {
        const response = await params.query(params.params);
        data = response.data as BaseResponse<D>;
        console.log(data)
    }

    catch (error) {
        if (error instanceof AxiosError) {
            return {
                isError: true,
                message: error.response?.data.message
            };
        }
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
