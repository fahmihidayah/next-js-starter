import LoginForm from "@/features/auth/login/LoginForm";
import { Card, CardBody, CardHeader, Container, Divider, Heading, Text } from "@chakra-ui/react";

export default function LoginPage() {
    return <Container mt={"5%"} maxW={{
        base: "40%",
        md: "30%",
        sm: "70%"
    }}> 
        <Card rounded={"2xl"}  boxShadow={"2xl"} >
            <CardBody>
                <LoginForm></LoginForm>
            </CardBody>
        </Card>
    </Container>
}  