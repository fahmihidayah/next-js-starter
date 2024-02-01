'use client'
import InputField, { ChangeValueEvent } from "@/components/form/InputField";
import { Button, Flex, Text } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { RegisterFormData, registerFormScheme } from "./type";
import { useFormState } from "react-dom";
import registerAction from "./action";
import { FormState } from "@/libs/types/base";
import { User } from "next-auth";
import ErrorText from "@/components/form/ErrorText";
import SubmitButton from "@/components/form/SubmitButton";

export default function RegisterForm() {
    const [form, setForm] = useState<RegisterFormData>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const onChangeValue = (e: ChangeValueEvent) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const [formState, action] = useFormState(registerAction.bind(null, form), {} as FormState<User>);

    return <form method="post" action={action}>
        <ErrorText mb={2} isVisible={(formState.isError == true) && (formState.fieldErrors === undefined)}>
            <Text >{formState.message}</Text>
        </ErrorText>
        <Flex>
            <InputField
            flex={1}
                mr={2}
                name="firstName"
                label="First Name"
                inputType="text"
                error={formState.fieldErrors?.firstName?.join(",")}
                onChangeValue={onChangeValue}>
            </InputField >

            <InputField
            flex={1}
                ml={2}
                name="lastName"
                label="Last Name"
                inputType="text"

                onChangeValue={onChangeValue}>
            </InputField>
        </Flex>
        <InputField
            mt={3}
            name="email"
            label="Email"
            inputType="email"
            error={formState.fieldErrors?.email?.join(",")}
            onChangeValue={onChangeValue}
        >
        </InputField>
        <InputField
            mt={3}
            name="password"
            label="Password"
            inputType="password"
            error={formState.fieldErrors?.password?.join(",")}
            onChangeValue={onChangeValue}>
        </InputField>
        <InputField
            mt={3}
            name="confirmPassword"
            label="Confirm Password"
            inputType="password"
            error={formState.fieldErrors?.confirmPassword?.join(",")}
            onChangeValue={onChangeValue}>
        </InputField>
        <SubmitButton mt={10} type="submit" colorScheme="blue" size={"md"} w={"100%"}>Register</SubmitButton>
    </form>
}