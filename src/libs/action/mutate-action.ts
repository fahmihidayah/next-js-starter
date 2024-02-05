'use server'
import axiosInstance from "../network/axios";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { BaseActionParams, doAction } from ".";
import { FormState } from "../types/base";

interface RequestActionParams<F> {
    params: F;
    redirect?: string;
    basePath: string;
    id?: any;
    method: "post" | "patch" | "put" | "delete";
}

export async function doMutateAction<F>(params: RequestActionParams<F>): Promise<FormState> {
    const url = `${params.basePath}` + (params.id ? `/${params.id}` : "");
    const method = params.method;
    const session = await getServerSession(authOptions);
    return await doAction({
        params : params.params,
        redirect : params.redirect,
        query: async (successParams: any) => {
            return await axiosInstance[method](url, successParams, {
                headers: {
                    "Authorization": "Bearer " + session?.token?.accessToken
                },
            },);
        }
    })
}