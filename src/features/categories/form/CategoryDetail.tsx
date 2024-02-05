import { routePathUtils } from "@/libs/routes";
import { Category } from "@/libs/types/category";
import { Button, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

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