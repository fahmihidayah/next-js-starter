'use client'
import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

export interface SubmitButtonProps extends ButtonProps {
    children : ReactNode
}

export default function SubmitButton({children, ... rest} : SubmitButtonProps) {
    const { pending } = useFormStatus();
    return <Button {... rest} isLoading={pending}>
        {children}
    </Button>

}