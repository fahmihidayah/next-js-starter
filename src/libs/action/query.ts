import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import axiosInstance from "@/libs/network/axios";
import { getServerSession } from "next-auth";
import { BaseResponse, FormState } from "../types/base";
import { AxiosError } from "axios";

interface QueryParameter {
    baseUrl : string;
    parameter? : any;
    id? : string;

}
export async function query<D>(queryParameter: QueryParameter) : Promise<BaseResponse<D>> {
    const sessions = await getServerSession(authOptions);
    try {
        const response = await axiosInstance.get(queryParameter.baseUrl + (queryParameter.id ? "/" + queryParameter.id : ""), {
            params : queryParameter.parameter,
            headers : {
                "Authorization" : `Bearer ${sessions?.token?.accessToken}`
            }
        })
        const baseDataResponse = response.data as BaseResponse<D>;
        return baseDataResponse;
    }
    catch(error) {
        console.log(error)
        if(error instanceof AxiosError) {
            return {
                message : error.response?.data?.message,
                statusCode : error.response?.data?.statusCode,
            }
        }
        return {
            message : error?.toString() ?? "Unknown error !!",
            statusCode : 511,
        }
        
    }
}