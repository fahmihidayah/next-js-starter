'use client'
import InputField, { ChangeValueEvent } from "@/components/form/InputField";
import SubmitButton from "@/components/form/SubmitButton";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { useFormState } from "react-dom";
import { saveCategoryAction } from "./action";
import { FormState } from "@/libs/types/base";
import { Category } from "@/libs/types/category";
import ErrorText from "@/components/form/ErrorText";
import { ZodType, z, ZodSchema } from "zod";
import { CategoryFormData, categoryValidationSchema } from "./types";
import { doMutateAction } from "@/libs/action/mutate-action";
import { routePathUtils } from "@/libs/routes";
import useFormHook from "@/components/form/hook/useFormHook";

type CategoryFormProps = {
    category?: Category;
}

export default function CategoryForm(props: CategoryFormProps) {

    const { onChangeValue, form } = useFormHook({
        defaultValue: {
            id: props.category?.id ? +props.category?.id : undefined,
            name: props.category?.name ?? "",
            description: props.category?.description ?? ""
        }
    });

    const [formState, action] = useFormState(saveCategoryAction.bind(null, form), {} as FormState);

    return <form method="post" action={action}>
        <ErrorText
            message={formState.message} />
        <InputField
            label="Name"
            name="name"
            inputType="text" mb={5}
            onChangeValue={onChangeValue}
            value={form.name}
            error={formState.fieldErrors?.name?.join(",")}
        ></InputField>
        <InputField
            label="Description"
            name="description"
            inputType="text"
            value={form.description}
            inputAs="textarea" mb={10}
            height={200}
            onChangeValue={onChangeValue}
            error={formState.fieldErrors?.name?.join(",")}></InputField>
        <SubmitButton type="submit" colorScheme="blue">Save</SubmitButton>
    </form>
}