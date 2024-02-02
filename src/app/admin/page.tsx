import { Card, CardBody, Container, Grid, Heading, SimpleGrid, Text } from "@chakra-ui/react";

export default function DashboardAdminPage() {
    return <Container maxW={"auto"} mt={5}>
        <SimpleGrid columns={{
            xl: 4,
            md: 3,
            sm: 1
        }} gap={5}>
            <Card bg={"blue.500"} rounded={"xl"}>
                <CardBody>
                    <Heading textColor={"white"} size={"md"} textAlign={"center"}> Users </Heading>
                    <Text textColor={"white"} mt={2} fontSize={20} textAlign={"center"}>15</Text>
                </CardBody>
            </Card>
            <Card bg={"green.500"} rounded={"xl"}>
                <CardBody>
                    <Heading textColor={"white"} size={"md"} textAlign={"center"}> Categories </Heading>
                    <Text textColor={"white"} mt={2} fontSize={20} textAlign={"center"}>15</Text>
                </CardBody>
            </Card>
            <Card bg={"cyan.500"} rounded={"xl"}>
                <CardBody>
                    <Heading textColor={"white"} size={"md"} textAlign={"center"}> Posts </Heading>
                    <Text textColor={"white"} mt={2} fontSize={20} textAlign={"center"}>15</Text>
                </CardBody>
            </Card>
            <Card bg={"red.500"} rounded={"xl"}>
                <CardBody >
                    <Heading textColor={"white"} size={"md"} textAlign={"center"}> Another Setting </Heading>
                    <Text textColor={"white"} mt={2} fontSize={20} textAlign={"center"}>15</Text>
                </CardBody>
            </Card>
        </SimpleGrid>
    </Container>
}