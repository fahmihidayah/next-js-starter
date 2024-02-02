'use server'
import { Category } from "@/libs/types/category";
import { CategoryFormData, categoryValidationSchema } from "./type";
import { BaseResponse, FormState } from "@/libs/types/base";
import { doAction } from "@/libs/action";
import axiosInstance from "@/libs/network/axios";
import { routePathUtils } from "@/libs/routes";
import { headers } from "next/headers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function createCategoryAction(form : CategoryFormData) : Promise<FormState<Category>> {

    const session = await getServerSession(authOptions);
    return await doAction({
        params : form,
        query :async (params:CategoryFormData) => {
            return await axiosInstance.post("/categories", params, {
                headers : {
                    "Authorization" : "Bearer " + session?.token?.accessToken
                }
            });
        },
        redirect: routePathUtils.admin().categories(),
        validationScheme : categoryValidationSchema
    })
}