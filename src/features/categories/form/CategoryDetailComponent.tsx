import { routePathUtils } from "@/libs/routes";
import { Button, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Category } from "../data/types";

interface CategoryDetailProps {
    category?: Category;
}

export default function CategoryDetailComponent({ category }: CategoryDetailProps) {
    return <>
      <Divider mt={5} mb={5}></Divider>
        <Flex justifyContent={"space-between"}>
            <Heading size={"md"}>
                {category?.name}
            </Heading>
        </Flex>
        <Text>{category?.description}</Text>
        <Divider mt={5} mb={5}></Divider>
    </>
}