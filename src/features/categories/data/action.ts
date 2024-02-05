'use client'
import { Category } from "@/libs/types/category";
import { BaseResponse, FormState } from "@/libs/types/base";
import { doAction } from "@/libs/action";
import axiosInstance from "@/libs/network/axios";
import { routePathUtils } from "@/libs/routes";
import { headers } from "next/headers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { CategoryFormData, categoryValidationSchema } from "./types";
import validate from "@/libs/validation-helper";
import { doMutateAction } from "@/libs/action/mutate-action";

export async function deleteCategory(params? : Category) : Promise<FormState> {
    console.log(params);
    return await doMutateAction({
        basePath : "categories",
        method : "delete",
        id : params?.id,
        redirect : routePathUtils.admin().categories(),
    })
}

export async function categoryAction(params: CategoryFormData) : Promise<FormState> {
    const formStateResult = validate({
        form : params,
        validationScheme : categoryValidationSchema
    })
    
    if(formStateResult) {
        return formStateResult;
    }

    return await doMutateAction({
        basePath : "categories",
        method : params.id ? "patch" : "post",
        params : params,
        id : params.id,
        redirect : routePathUtils.admin().categories()
    })
}
