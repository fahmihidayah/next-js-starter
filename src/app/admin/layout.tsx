'use client'
import AdminRootLayout from "@/components/admin/layout";
import Navbar from "@/components/navbar/Navbar";
import { routePathUtils } from "@/libs/routes";
import { adminPathUtils } from "@/libs/routes/admin";
import { Box, Container, Flex, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { FiBox, FiFile, FiMessageSquare, FiSquare } from "react-icons/fi"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return <AdminRootLayout items={[
    {
      name: "Dashboard",
      icon: FiBox,
      action: routePathUtils.admin().admin()
    },
    {
      name: "Categories",
      icon: FiMessageSquare,
      action: routePathUtils.admin().categories()
    },
    {
      name: "Posts",
      icon: FiFile,
      action: routePathUtils.admin().posts()
    }
  ]}>
    {children}
  </AdminRootLayout>
}