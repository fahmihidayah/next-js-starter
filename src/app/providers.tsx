'use client'

import { useProtect } from '@/libs/hook/useProtect';
import { ChakraProvider } from '@chakra-ui/react'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

export function Providers({ children, session }: { children: React.ReactNode, session?: Session | null }) {
  return <SessionProvider session={session}>
    <ChakraProvider>{children}</ChakraProvider>
  </SessionProvider>
}