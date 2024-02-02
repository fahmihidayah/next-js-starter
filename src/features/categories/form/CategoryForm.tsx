'use client'
import InputField, { ChangeValueEvent } from "@/components/form/InputField";
import SubmitButton from "@/components/form/SubmitButton";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { CategoryFormData } from "./type";
import { useFormState } from "react-dom";
import createCategoryAction from "./action";
import { FormState } from "@/libs/types/base";
import { Category } from "@/libs/types/category";
import ErrorText from "@/components/form/ErrorText";

interface CategoryFormProps {
    category? : Category;
}

export default function CategoryForm(props : CategoryFormProps) {
    const [form, setForm] = useState<CategoryFormData>({
        name : "",
        description: ""
    })

    const onChangeValue = (e: ChangeValueEvent) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const [formState, action] = useFormState(createCategoryAction.bind(null, form), {} as FormState<Category>);

    return <form method="post" action={action}>
        <ErrorText isVisible={formState.isError !== undefined}>
            {formState.message}
        </ErrorText>
        <InputField label="Name" name="name" inputType="text" mb={5} onChangeValue={onChangeValue}></InputField>
        <InputField label="Description" name="description" inputType="text" inputAs="textarea" mb={10} height={200} onChangeValue={onChangeValue}></InputField>
        <SubmitButton type="submit" colorScheme="blue">Save</SubmitButton>
    </form>
}