'use client'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { routePathUtils } from "@/libs/routes";
import { Avatar, Box, BoxProps, Button, Flex, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList, useColorModeValue } from "@chakra-ui/react";
import { getServerSession } from "next-auth";
import { getSession, signOut } from "next-auth/react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

interface AdminNavbar extends BoxProps {
    onOpen : () => void;

}

export default function AdminNavbar({onOpen, ... rest} : AdminNavbar) {
    const session = getSession();

    return <Box bg={useColorModeValue('white', 'gray.900')} borderBottom={"1px"} borderColor={"gray.100"} px={4} {... rest}>
        <Flex h={16} alignItems={'center'} justifyContent={{
            base : 'end',
            xl : 'end',
            md : 'end',
            sm : 'space-between'
        }}>

            <IconButton
                display={{
                    base : 'none',
                    xl : "none",
                    md : "none",
                    sm : "flex"
                }}
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                icon={<FiMenu />}
            />
            <Menu>
                <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}
                    >
                    <Avatar
                        size={'sm'}
                        src={
                            '/user.png'
                        }
                    />
                </MenuButton>
                <MenuList>
                    <Link href={routePathUtils.admin().profile()}>
                        <MenuItem>Profile</MenuItem>
                    </Link>
                    <MenuDivider />
                    <MenuItem onClick={e => {
                        signOut({
                            callbackUrl : routePathUtils.auth().login(),
                            redirect : true
                        });
                    }}>Log Out</MenuItem>
                </MenuList>
            </Menu>
        </Flex>


    </Box>
}