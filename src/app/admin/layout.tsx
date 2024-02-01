'use client'
import AdminRootLayout from "@/components/admin/layout";
import Navbar from "@/components/navbar/Navbar";
import { Box, Container, Flex, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { FiBox, FiFile } from "react-icons/fi"

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return <AdminRootLayout items={[
        {
            name : "Dashboard",
            icon : FiBox,
            action: "#"
        }
    ]}>
       {children}
    </AdminRootLayout>
}