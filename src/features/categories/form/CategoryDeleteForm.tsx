'use client'
import ErrorText from "@/components/form/ErrorText";
import { Category } from "@/libs/types/category";
import { Button, Card, CardBody, Container, Flex, Link, Text } from "@chakra-ui/react";
import { useFormState } from "react-dom";
import { deleteCategory } from "../data/action";
import { FormState } from "@/libs/types/base";
import SubmitButton from "@/components/form/SubmitButton";
import CategoryDetailComponent from "./CategoryDetail";
import useFormHook from "@/libs/hook/form/useFormHook";

interface DeleteFormProps {
    category?: Category;
}

export default function CategoryDeleteForm({ category }: DeleteFormProps) {

    const formHook = useFormHook({
        defaultValue : category
    });

    const [formState, action] = useFormState(deleteCategory.bind(null, formHook.form), {} as FormState);

    return <Container maxW={"auto"} mt={5}>
        <Card>
            <CardBody>
                <ErrorText message={formState.message}></ErrorText>
                <Text>Do you want to delete this item?</Text>
                <CategoryDetailComponent category={category} />
                <form action={action}>
                    <Flex>
                        <SubmitButton colorScheme="red" me={3} type="submit">Yes</SubmitButton>
                        <Link>
                            <Button >No</Button>
                        </Link>
                    </Flex>
                </form>
            </CardBody>
        </Card>
    </Container>
}