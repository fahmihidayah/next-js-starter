import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CategoryFormComponent from "@/features/categories/form/CategoryFormComponent";
import { categoryValidationSchema } from "@/features/categories/data/types";
import { Card, CardBody, Container } from "@chakra-ui/react";
import jsonSchemaToZod, { JsonSchema } from "json-schema-to-zod";
import { getServerSession } from "next-auth";
import zodToJsonSchema, { JsonSchema7Type } from "zod-to-json-schema";
import { format } from "prettier";
import { z } from "zod";
import ContainerCard from "@/components/admin/Container-Card";


export default async function CreateCategory() {
    return <ContainerCard>
         <CategoryFormComponent ></CategoryFormComponent>
    </ContainerCard>
}