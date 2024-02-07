import AdminRootLayout from "@/components/admin/layout";
import { protectPage } from "@/libs/session/server-auth-protection";
import { Session } from "next-auth";
import React from "react";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session : Session | undefined = await protectPage();

  return <AdminRootLayout >
    {children}
  </AdminRootLayout>
}