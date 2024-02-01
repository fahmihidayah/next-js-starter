import NextAuth from "next-auth";
import { Token } from "./token";

declare module "next-auth" {
    interface Session {
        userPayload: {
            id: string
            firstName: string
            lastName: string
            email: string
            roles: string[]
            createdAt: string
            updatedAt: string
        },
        token: Token
    }

    interface User {
        id : string;
        email: string;
        firstName: string;
        lastName: string;
        roles: string[];
        createdAt: string;
        updatedAt: string;
        token: Token;
    }
}

import { JWT } from "next-auth/jwt";
import { Token } from "./token";

declare module "next-auth/jwt" {
    interface JWT {
        userPayload: {
            id: string
            firstName: string
            lastName: string
            email: string
            roles: string[]
            createdAt: string
            updatedAt: string
            token: Token
        }
    }
}