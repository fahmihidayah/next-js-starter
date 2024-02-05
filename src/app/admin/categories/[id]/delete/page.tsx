import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CategoryForm from "@/features/categories/form/CategoryForm";
import CategoryDeleteForm from "@/features/categories/form/CategoryDeleteForm";
import axiosInstance from "@/libs/network/axios";
import { BaseResponse } from "@/libs/types/base";
import { Category } from "@/libs/types/category";
import { Card, CardBody, Container } from "@chakra-ui/react";
import { getServerSession } from "next-auth";
import { z } from "zod";

interface EditCategoryProps {
    params : {
        id : string;
    };
}

export default async function CategoryDelete({params} : EditCategoryProps) {
    const session = await getServerSession(authOptions);
    console.log('fahmi', session?.token?.accessToken)
    const response = await axiosInstance.get(`/categories/${params.id}`);
    const category = (response.data as BaseResponse<Category>).data;
    return <CategoryDeleteForm category={category}></CategoryDeleteForm>
}