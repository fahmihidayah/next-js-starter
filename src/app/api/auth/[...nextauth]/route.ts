import NextAuth from "next-auth/next";
import {JWT} from "next-auth/jwt";
import { Awaitable, NextAuthOptions, Session, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { requestUtil } from "@/libs/network/request";
import axiosInstance from "@/libs/network/axios";
import { BaseResponse } from "@/libs/types/base";
import { AxiosError } from "axios";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "email", placeholder: "" },
                password: { label: "email", type: "password" }
            },
            async authorize(credentials, req) : Promise<User> {
                console.log(credentials);
                // Add logic here to look up the user from the credentials supplied
                try {
                    const response = await axiosInstance.post("/auth/sign-in", {
                        email : credentials?.email,
                        password : credentials?.password
                    })
                    console.log(response.data);
    
                    const dataResponse = response.data as BaseResponse<User>;
    
                    if(dataResponse.statusCode !== 200) {
                        throw new Error(dataResponse.message);
                    }
    
                    const responseUser = response.data as BaseResponse<User>;
                    console.log('Next auth : authorize : ', responseUser);
    
                    return responseUser.data as User;
                }
                catch(error) {
                    console.log(error);
                    if(error instanceof AxiosError) {
                        throw new Error(error.message);
                    }
                    throw new Error("Unknown Error");
                    
                }
                
              }
        })
    ],

    callbacks : {
        async jwt({token, user, account , profile, trigger, isNewUser, session}) : Promise<JWT> {
            if(user) {
                // console.log('Next auth - jwt : ', token, user);
                return { ... token, userPayload: user as User};
            }

    //         // need refresh token
            
            return token;
        },

        async session({token, user, session}) : Promise<Session> {
            // console.log('Next auth - session', user, session)
            session.user = token.userPayload;
            session.token = token.userPayload.token;
            return session
        }
    },
    secret: "Test123Test123",
    debug : process.env.NODE_ENV === 'development',
    pages : {
      signIn : "/auth/login",
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
