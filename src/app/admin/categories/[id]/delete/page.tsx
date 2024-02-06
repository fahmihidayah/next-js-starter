import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CategoryFormComponent from "@/features/categories/form/CategoryFormComponent";
import CategoryDeleteFormComponent from "@/features/categories/form/CategoryDeleteFormComponent";
import axiosInstance from "@/libs/network/axios";
import { BaseResponse } from "@/libs/types/base";
import { Card, CardBody, Container } from "@chakra-ui/react";
import { getServerSession } from "next-auth";
import { z } from "zod";
import { Category } from "@/features/categories/data/types";
import ContainerCard from "@/components/admin/Container-Card";

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
    return <ContainerCard>
        <CategoryDeleteFormComponent category={category}></CategoryDeleteFormComponent>
    </ContainerCard>
}