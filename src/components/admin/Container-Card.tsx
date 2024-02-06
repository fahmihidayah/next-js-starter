import { Card, CardBody, Container, ContainerProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContainerCardProps extends ContainerProps {
    children? : ReactNode;
}

export default function ContainerCard({children, ... rest} : ContainerCardProps) {
    return <Container maxW={"auto"} mt={5} {... rest}>
        <Card>
            <CardBody>
                {children}
            </CardBody>
        </Card>
    </Container>
}