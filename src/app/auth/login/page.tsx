import LoginForm from "@/features/auth/login/LoginForm";
import { protectLoginPage } from "@/libs/session/server-auth-protection";
import { Card, CardBody, CardHeader, Container, Divider, Heading, Text } from "@chakra-ui/react";

export default async function LoginPage() {
    await protectLoginPage()
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