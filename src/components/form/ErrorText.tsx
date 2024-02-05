import { Box, BoxProps, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface ErrorTextProps extends BoxProps{
    isVisible? : boolean;
    message? : string;
}

export default function ErrorText({children, isVisible, message, ... rest} : ErrorTextProps) {
    return (
        <Box display={message ? "flex" : "none"} rounded={"md"} bg={"red.200"} p={5} {... rest}>
            <Text>{message}</Text>
        </Box>
    )
}