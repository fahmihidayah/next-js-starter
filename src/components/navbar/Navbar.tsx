'use client'
import { Avatar, Box, Button, Container, Flex, HStack, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Stack, useColorModeValue, useDisclosure } from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { routePathUtils } from "@/libs/routes";

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return <Container shadow={"md"} maxW={"auto"}>
        <Flex justifyContent={"space-between"} p={2} >
            <Image alt="home" src={"vercel.svg"} width={70} height={70} ></Image>
            <Flex display={{
                sm: "none",
                md: "flex",
                xl: "flex",
            }}>
                <Link href={routePathUtils.auth().login()}>
                    <Button size={"sm"} colorScheme="blue" mr={4}>Sign in</Button>
                </Link>
                <Link href={routePathUtils.auth().register()}>
                    <Button size={"sm"} colorScheme="green">Sign up</Button>
                </Link>

            </Flex>
            <IconButton
                display={{
                    base: 'none',
                    xl: "none",
                    md: "none",
                    sm: "flex"
                }}
                size={"sm"}
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                icon={<FiMenu />} />
        </Flex>

    </Container>
}