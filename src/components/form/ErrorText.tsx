import { Box, BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface ErrorTextProps extends BoxProps{
    isVisible : boolean;
    children : ReactNode;
}

export default function ErrorText({children, isVisible, ... rest} : ErrorTextProps) {
    return (
        <Box display={isVisible ? "flex" : "none"} rounded={"md"} bg={"red.200"} p={5} {... rest}>
            {children}
        </Box>
    )

}