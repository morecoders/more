import prisma from "@/prisma/client";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";


// better auth instance create
export const auth = betterAuth({
  // db setup
  database: prismaAdapter(prisma, {
    provider: "postgresql"
  }),

  // email and password auth
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 6
  },

  //google
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
    github: { 
            clientId: process.env.GITHUB_CLIENT_ID as string, 
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
        }, 
  },

  //session
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60 // Cache duration in seconds
    }
  },

  // plugins
  plugins: [nextCookies()]
});