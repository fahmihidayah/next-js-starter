import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import axiosInstance from "@/libs/network/axios";
import { routePathUtils } from "@/libs/routes";
import { BaseResponse } from "@/libs/types/base";
import { Category } from "@/libs/types/category";
import { Button, Card, CardBody, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { getServerSession } from "next-auth";
import Link from "next/link";

interface CategoryDetailProps {
    params: {
        id: string;
    };
}


export default async function CategoryDetail({ params }: CategoryDetailProps) {

    const session = await getServerSession(authOptions);
    const response = await axiosInstance.get(`/categories/${params.id}`, {
        headers: {
            "Authorization": `Bearer ${session?.token.accessToken}`
        }
    })

    const category = (response.data as BaseResponse<Category>).data;

    return <Container maxW={"auto"} mt={5}>
        <Card>
            <CardBody>
                <Flex justifyContent={"space-between"}>
                    <Heading size={"md"}>
                        {category?.name}
                    </Heading>
                    <Link href={routePathUtils.admin().categories(`${params.id}/edit`)}>
                        <Button size={"sm"} colorScheme="green">Edit</Button>
                    </Link>
                </Flex>
                <Text>{category?.description}</Text>
            </CardBody>
        </Card>
    </Container>
}