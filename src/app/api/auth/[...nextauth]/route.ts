import NextAuth from "next-auth/next";
import {JWT} from "next-auth/jwt";
import { Awaitable, NextAuthOptions, Session, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { requestUtil } from "@/libs/network/request";
// import { post } from "@/lib/api";
// import { User } from "@/types/user";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "email", placeholder: "jsmith" },
                password: { label: "email", type: "password" }
            },
            async authorize(credentials, req) : Promise<User> {
                console.log(credentials);
                // Add logic here to look up the user from the credentials supplied
                const response = await requestUtil.post("/auth/sign-in", {
                    email : credentials?.email,
                    password : credentials?.password
                });

                if(response.statusCode !== 200) {
                    throw new Error(response.message);
                }

                const user = response.data as User;
                // console.log('Next auth : authorize : ', user);

                return user;
                
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
            session.user = token.userPayload;
            session.token = token.userPayload.token;
            // console.log('Next auth - session : ', session.user, session.token);
            return session
        }
    },
    secret: "Test123Test123",
    debug : process.env.NODE_ENV === 'development',
    pages : {
      signIn : "auth/login",
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
