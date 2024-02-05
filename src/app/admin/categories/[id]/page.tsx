import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CategoryDetailComponent from "@/features/categories/form/CategoryDetail";
import { query } from "@/libs/action/query";
import axiosInstance from "@/libs/network/axios";
import { routePathUtils } from "@/libs/routes";
import { BaseResponse } from "@/libs/types/base";
import { Category } from "@/libs/types/category";
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
        baseUrl : "/categories",
        id : params.id
    })

    const category = response.data

    return <Container maxW={"auto"} mt={5}>
        <Card>

            <CardBody>
                <Link href={routePathUtils.admin().categories(`${category?.id}/edit`)} >
                    <Button size={"sm"} colorScheme="green">Edit</Button>
                </Link>
                <CategoryDetailComponent category={category}></CategoryDetailComponent>
            </CardBody>
        </Card>
    </Container>
}