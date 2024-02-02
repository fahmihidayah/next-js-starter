import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CategoryForm from "@/features/categories/form/CategoryForm";
import { Card, CardBody, Container } from "@chakra-ui/react";
import { getServerSession } from "next-auth";

export default async function CreateCategory() {
    
    const session = await getServerSession(authOptions);
    console.log('fahmi', session?.token?.accessToken)
    return <Container maxW={"auto"}>
        <Card mt={5}>
            <CardBody>
                <CategoryForm></CategoryForm>
            </CardBody>
        </Card>
    </Container>
}