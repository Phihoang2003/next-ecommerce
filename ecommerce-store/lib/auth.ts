import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {PrismaAdapter} from "@next-auth/prisma-adapter"
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import InstagramProvider from "next-auth/providers/instagram";
import { db } from "./db";
import {compare} from "bcrypt"
export const authOptions:NextAuthOptions={
    adapter:PrismaAdapter(db),
    session:{
        strategy:"jwt"
    },
    secret:process.env.NEXTAUTH_SECRET,
    pages:{
        signIn:"/sign-in"
    },
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID!,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET!
          }),
          InstagramProvider({
            clientId: process.env.INSTAGRAM_CLIENT_ID,
            clientSecret: process.env.INSTAGRAM_CLIENT_SECRET
          }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID! ,
            clientSecret: process.env.GOOGLE_SECRET!
          }),
        CredentialsProvider({
          
          name: "Credentials",
          
          credentials: {
            email: { label: "Email", type: "text", placeholder: "join123@gmail.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
            if(!credentials?.email||!credentials?.password){
                return null;
            }
            const existingUser=await db.user.findUnique({
                where:{
                    email:credentials?.email
                }
            })

            if(!existingUser){
                return null;

            }
            if(existingUser.password){
                const passwordMatch=await compare(credentials.password,existingUser.password);
            if(!passwordMatch){
                return null;
            }
            }
            
            return {
                id:`${existingUser.id}`,
                username:existingUser.username,
                email:existingUser.email
            }
      
            
          }
        })
    ],
    callbacks:{
        async session({ session,  token }) {
             
            return{
                ...session,
                user:{
                    ...session.user,
                    username:token.username
                }
            }
          },
          async jwt({ token, user  }) {
            // console.log(token,user);
            if(user){
                return{
                    ...token,
                    username:user.username
                }
            }
            return token
          },
        // async signIn({profile}){
        //         console.log(profile);
        //         return true;
        // }
    }
    
}

