'use client'
import ErrorText from "@/components/form/ErrorText";
import { Button, Card, CardBody, Container, Flex, Link, Text } from "@chakra-ui/react";
import { useFormState } from "react-dom";
import { deleteCategory } from "../data/action";
import { FormState } from "@/libs/types/base";
import SubmitButton from "@/components/form/SubmitButton";
import CategoryDetailComponent from "./CategoryDetailComponent";
import useFormHook from "@/libs/hook/form/useFormHook";
import { Category } from "../data/types";
import ContainerCard from "@/components/admin/Container-Card";

interface DeleteFormProps {
    category?: Category;
}

export default function CategoryDeleteFormComponent({ category }: DeleteFormProps) {

    const formHook = useFormHook({
        defaultValue: category
    });

    const [formState, action] = useFormState(deleteCategory.bind(null, formHook.form), {} as FormState);

    return <>
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
    </>
}