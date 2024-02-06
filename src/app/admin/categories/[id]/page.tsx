import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ContainerCard from "@/components/admin/Container-Card";
import { Category } from "@/features/categories/data/types";
import CategoryDetailComponent from "@/features/categories/form/CategoryDetailComponent";
import { query } from "@/libs/action/query";
import axiosInstance from "@/libs/network/axios";
import { routePathUtils } from "@/libs/routes";
import { BaseResponse } from "@/libs/types/base";
import { Button, Card, CardBody, Container, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { getServerSession } from "next-auth";
import Link from "next/link";

interface CategoryDetailProps {
    params: {
        id: string;
    };
}


export default async function CategoryDetail({ params }: CategoryDetailProps) {

    const response = await query<Category>({
        baseUrl: "/categories",
        id: params.id
    })

    const category = response.data

    return <ContainerCard>
        <Link href={routePathUtils.admin().categories(`${category?.id}/edit`)} >
            <Button size={"sm"} colorScheme="green">Edit</Button>
        </Link>
        <CategoryDetailComponent category={category}></CategoryDetailComponent>
    </ContainerCard>
}