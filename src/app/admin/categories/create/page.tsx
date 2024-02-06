import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CategoryFormComponent from "@/features/categories/form/CategoryFormComponent";
import { categoryValidationSchema } from "@/features/categories/data/types";
import { Card, CardBody, Container } from "@chakra-ui/react";
import jsonSchemaToZod, { JsonSchema } from "json-schema-to-zod";
import { getServerSession } from "next-auth";
import zodToJsonSchema, { JsonSchema7Type } from "zod-to-json-schema";
import { format } from "prettier";
import { z } from "zod";


export default async function CreateCategory() {
    return <Container maxW={"auto"}>
        <Card mt={5}>
            <CardBody>
                <CategoryFormComponent ></CategoryFormComponent>
            </CardBody>
        </Card>
    </Container>
}