'use server'

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Session, getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { routePathUtils } from "../routes";

export async function protectPage() : Promise<Session | undefined> {
    const session = await getServerSession(authOptions);
    if (!session?.token) {
        redirect(routePathUtils.auth().login());
    }
    return session;
}

export async function protectLoginPage() {
    const session = await getServerSession(authOptions);
    console.log(session?.token);
    if (session?.token) {
        redirect(routePathUtils.admin().admin());
    }
}