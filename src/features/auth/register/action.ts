'use server'
import { BaseResponse, FormState } from "@/libs/types/base";
import { RegisterFormData, registerFormScheme } from "./type";
import { User } from "next-auth";
import axiosInstance from "@/libs/network/axios";
import { AxiosError } from "axios";
import { redirect } from "next/navigation";
import { routePathUtils } from "@/libs/routes";
import { doAction } from "@/libs/action";

export default async function registerAction(formData : RegisterFormData) : Promise<FormState<User>> {
   return await doAction({
      params : formData,
      query : async (params : RegisterFormData) : Promise<any> => {
         return await axiosInstance.post("auth/register", params);
      },
      redirect : routePathUtils.home(),
      validationScheme : registerFormScheme
   });
}  