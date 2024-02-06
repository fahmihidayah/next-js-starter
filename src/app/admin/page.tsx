import { Category } from "@/features/categories/data/types";
import { Post } from "@/features/posts/data/types";
import { query } from "@/libs/action/query";
import { Card, CardBody, Container, Flex, Grid, Heading, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { FiBox, FiCodesandbox, FiFile, FiMessageSquare, FiUser } from "react-icons/fi";

export default async function DashboardAdminPage() {

    const postResponse = await query<Post[]>({
        baseUrl: "posts"
    })

    const categoryResponse = await query<Category[]>({
        baseUrl: "categories"
    })

    return <Container maxW={"auto"} mt={5}>
        <SimpleGrid columns={{
            xl: 3,
            md: 3,
            sm: 1
        }} gap={5}>
            <Card bg={"blue.500"} rounded={"xl"}>
                <CardBody>
                    <Flex justifyContent={"center"} mb={5}>
                        <FiUser size={50} color="white"></FiUser>
                    </Flex>
                    <Heading textColor={"white"} size={"md"} textAlign={"center"}> Users </Heading>
                    <Text textColor={"white"} mt={2} fontSize={20} textAlign={"center"}>0</Text>
                </CardBody>
            </Card>
            <Card bg={"green.500"} rounded={"xl"}>
                <CardBody>
                    <Flex justifyContent={"center"} mb={5}>
                        <FiMessageSquare size={50} color="white"></FiMessageSquare>
                    </Flex>
                    <Heading textColor={"white"} size={"md"} textAlign={"center"}> Categories </Heading>
                    <Text textColor={"white"} mt={2} fontSize={20} textAlign={"center"}>{`${categoryResponse.data?.length ?? 0}`}</Text>
                </CardBody>
            </Card>
            <Card bg={"cyan.500"} rounded={"xl"}>
                <CardBody>
                <Flex justifyContent={"center"} mb={5}>
                        <FiFile size={50} color="white"></FiFile>
                    </Flex>
                    <Heading textColor={"white"} size={"md"} textAlign={"center"}> Posts </Heading>
                    <Text textColor={"white"} mt={2} fontSize={20} textAlign={"center"}>{`${postResponse.data?.length ?? 0}`}</Text>
                </CardBody>
            </Card>
        </SimpleGrid>
    </Container>
}