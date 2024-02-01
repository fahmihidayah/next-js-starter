import RegisterForm from "@/features/auth/register/RegisterForm";
import { Card, CardBody, Container } from "@chakra-ui/react";

export default function RegisterPage() {
    return <Container mt={"5%"} maxW={{
        base: "40%",
        md: "30%",
        sm: "70%"
    }}> 
        <Card rounded={"2xl"}  boxShadow={"2xl"} >
            <CardBody>
                <RegisterForm></RegisterForm>
            </CardBody>
        </Card>
    </Container>
}