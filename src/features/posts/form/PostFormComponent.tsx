'use client'
import InputField from "@/components/form/InputField";
import { Post, PostForm } from "../data/types";
import useFormHook from "@/libs/hook/form/useFormHook";
import { Category } from "@/features/categories/data/types";
import { useFormState } from "react-dom";
import { postAction } from "../data/action";
import { FormState } from "@/libs/types/base";
import ErrorText from "@/components/form/ErrorText";
import SubmitButton from "@/components/form/SubmitButton";

interface PostFormProps {
    post?: Post;
    categories?: Category[]
}

export default function PostFormComponent({ post, categories }: PostFormProps) {

    const { form, onChangeValue } = useFormHook({
        defaultValue: {
            id: post?.id,
            title: post?.title ?? "",
            category_id: post?.category_id ?? "1",
            content: post?.content ?? ""
        }
    })

    const [formState, action] = useFormState(postAction.bind(null, form), {} as FormState);

    return <form action={action}>
        <ErrorText message={formState.message}></ErrorText>
        <InputField
            mb={5}
            label="Title"
            inputType="text"
            name="title"
            onChangeValue={onChangeValue}
            error={formState.fieldErrors?.title?.join(",")}></InputField>
        <InputField mb={5}
            label="Category"
            inputType="text"
            name="category_id"
            options={ categories?.map(e => {
                return {
                    label : e.name,
                    value : `${e.id}`
                };
            })}
            onChangeValue={onChangeValue}
            error={formState.fieldErrors?.category_id?.join(",")}></InputField>
        <InputField
            height={200}
            mb={5}
            label="Content"
            inputType="text"
            inputAs="textarea"
            name="content"
            onChangeValue={onChangeValue}
            error={formState.fieldErrors?.content?.join(",")}></InputField>
        <SubmitButton colorScheme="blue" type="submit">Submit</SubmitButton>
    </form>
}