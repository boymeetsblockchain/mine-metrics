import NextAuth from "next-auth";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";

import { getUserById, userExist } from "./utils/userExist";

import authConfig from "./auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub as string;
        session.user.role = token.role as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
        token.role = user.role; // Include role in token
      } else if (token.sub) {
        // Retrieve user from database if user is not present in token
        const existingUser = await getUserById(token.sub as string);
        if (existingUser) {
          token.role = existingUser.role;
        }
      }
      return token;
    },
  },

  pages: {
    signIn: "/login",
  },


});
