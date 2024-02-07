'use client'
import { Box, Drawer, DrawerContent, Flex, IconButton, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import React from "react";
import SidebarContent from "../sidebar/SidebarContent";
import { SidebarItem } from "../sidebar";
import { FiBox, FiFile, FiMenu, FiMessageSquare } from "react-icons/fi";
import AdminNavbar from "../navbar/AdminNavbar";
import { routePathUtils } from "@/libs/routes";
import { getMenuItems } from "./admin-menu";
import { Session } from "next-auth";

interface RootLayoutProps {
    children: React.ReactNode;
    session? : Session;
}


export default function AdminRootLayout({ children, session }: RootLayoutProps) {
    const items = getMenuItems(session);
    const { isOpen, onOpen, onClose } = useDisclosure()
    return <Box  minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
        <SidebarContent minH="100vh" w={{
            base : "0",
            md : "20%",
            xl : "20%",
            sm : "0%"
        }}  items={items} onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
        <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            returnFocusOnClose={false}
            onOverlayClick={onClose}
            size="full">
            <DrawerContent>
                <SidebarContent w={{
            base : "0",
            md : "20%",
            xl : "20%",
            sm : "100%"
        }} items={items} onClose={onClose}  />
            </DrawerContent>
        </Drawer>

        <Box ml={{
            base : "0%",
            md : "20%",
            xl : "20%",
            sm : "0%"
        }} w={{
            base : "100%",
            md : "80%",
            xl : "80%",
            sm : "100%"
        }}>
            <AdminNavbar  onOpen={onOpen} ></AdminNavbar>
            {children}
        </Box>
    </Box>

}