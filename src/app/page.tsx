import Navbar from "@/components/navbar/Navbar";
import { Button, Card, CardBody, Container, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <Container mt={"5%"} maxW={{
        lg: "40%",
        md: "60%",
        sm: "80%"
      }}>
        <Heading textAlign={"center"}>Lets build Awsome Web Application</Heading>
        <Text textAlign={"center"} mt={3}>Monetize your content by charging your most loyal readers and reward them loyalty points. Give back to your loyal readers by granting them access to your pre-releases and sneak-peaks.</Text>
        <Flex mt={5} w={"100%"} justifyContent={"center"} >
          <Button me={2} colorScheme="blue">Get Started</Button>
          <Button ms={2} colorScheme="green">More Info</Button>
        </Flex>
      </Container>
      <Container maxW={{
        lg: "80%",
        md: "80%",
        sm: "100%"
      }}>
        <SimpleGrid mt={5} spacing={5} columns={{
          xl: 3,
          md: 1,
          sm: 1
        }}>

          <Card w={"100%"} h={"100%"} border={"1px"} borderColor={"blue.400"} rounded={10}>
            <CardBody >
              <Image alt="home" src={"vercel.svg"} width={100} height={100} ></Image>
              <Heading mt={5} size={"md"}>Feature 1</Heading>
              <Flex alignItems={"center"} mt={5}>
                <Heading size={"md"} me={2}>Rp</Heading>
                <Heading color={"blue.700"} size={"lg"} me={2}>80K</Heading>
                <Heading size={"md"} color={"grey.800"}>/ Month</Heading>
              </Flex>
              <Text mt={4}>Lorem ipsum dolor sit amet catetur, adipisicing elit. Lorem ipsum dolor sit amet catetur, adipisicing elit. Lorem ipsum dolor sit amet catetu</Text>

              <Button mt={5} colorScheme="blue">Buy Now</Button>
            </CardBody>
          </Card>
          <Card w={"100%"} h={"100%"}  border={"1px"} borderColor={"blue.400"} rounded={10}>
            <CardBody >
              <Image alt="home" src={"vercel.svg"} width={100} height={100} ></Image>
              <Heading mt={5} size={"md"}>Feature 1</Heading>
              <Flex alignItems={"center"} mt={5}>
                <Heading size={"md"} me={2}>Rp</Heading>
                <Heading color={"blue.700"} size={"lg"} me={2}>80K</Heading>
                <Heading size={"md"} color={"grey.800"}>/ Month</Heading>
              </Flex>
              <Text mt={4}>Lorem ipsum dolor sit amet catetur, adipisicing elit. Lorem ipsum dolor sit amet catetur, adipisicing elit. Lorem ipsum dolor sit amet catetu</Text>

              <Button mt={5} colorScheme="blue">Buy Now</Button>
            </CardBody>
          </Card>
          <Card w={"100%"} h={"100%"} border={"1px"} borderColor={"blue.400"} rounded={10}>
            <CardBody >
              <Image alt="home" src={"vercel.svg"} width={100} height={100} ></Image>
              <Heading mt={5} size={"md"}>Feature 1</Heading>
              <Flex alignItems={"center"} mt={5}>
                <Heading size={"md"} me={2}>Rp</Heading>
                <Heading color={"blue.700"} size={"lg"} me={2}>80K</Heading>
                <Heading size={"md"} color={"grey.800"}>/ Month</Heading>
              </Flex>
              <Text mt={4}>Lorem ipsum dolor sit amet catetur, adipisicing elit. Lorem ipsum dolor sit amet catetur, adipisicing elit. Lorem ipsum dolor sit amet catetu</Text>

              <Button mt={5} colorScheme="blue">Buy Now</Button>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Container>

    </main>
  );
}
