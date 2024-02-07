'use client'
import InputField from "@/components/form/InputField";
import { Button, Checkbox, Flex, Text, useToast } from "@chakra-ui/react";
import { SignInResponse, signIn } from "next-auth/react";
import { FormEventHandler, useState } from "react";
import { LoginFormData } from "./type";
import { redirect } from "next/navigation";
import ErrorText from "@/components/form/ErrorText";

export default function LoginForm() {

    const [loginForm, setLoginForm] = useState<LoginFormData>({
        email: "",
        password: "",
        isRememberMe: false
    })

    const [errorMessage, setErrorMessage] = useState<string | undefined>();

    const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        const result = await signIn("credentials", {
            email: loginForm.email,
            password: loginForm.password,
            redirect: true,
            callbackUrl: "/admin",

        }).catch((signInResponse? : SignInResponse) => {
            if(signInResponse?.error) {
                setErrorMessage(signInResponse?.error?.toString())
            }
        })

    }

    return <form method="post" onSubmit={onSubmit}>
        <ErrorText isVisible={errorMessage !== undefined}>
            {errorMessage}
        </ErrorText>
        <InputField label="Email" name="email" inputType="email" onChangeValue={e => {
            setLoginForm({
                ...loginForm,
                [e.target.name]: e.target.value
            })
        }}></InputField>
        <InputField mt={3} label="Password" name="password" inputType="password" onChangeValue={e => {
            setLoginForm({
                ...loginForm,
                [e.target.name]: e.target.value
            })
        }}></InputField>
        <Checkbox mt={3} name="isRememberMe" onChange={e => {
            setLoginForm({
                ... loginForm,
                [e.target.name] : e.target.checked
            })
        }}>
            Remember me
        </Checkbox>
        <Flex mt={4} justifyContent={"end"}>
            <Text as={"a"} href="#" textColor={"blue.500"} fontSize={"15"}><u>Forgot Password</u></Text>
        </Flex>
        <Button type="submit" w={"100%"} colorScheme="blue" mt={10} size={"md"}>Login</Button>
    </form>
}