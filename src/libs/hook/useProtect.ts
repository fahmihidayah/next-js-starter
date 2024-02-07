'use client'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export function useProtect() {
    const session = useSession();
    console.log('use protect', session.data);
    useEffect(() => {
       
    }, [session])
    
   
}