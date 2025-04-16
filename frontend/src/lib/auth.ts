import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      async authorize(user) {
        if (user) return user;
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.lastName = user.lastName;
        token.email = user.email;
        token.zipCode = user.zipCode;
        token.state = user.state;
        token.city = user.city;
        token.street = user.street;
        token.houseNumber = user.houseNumber;
        token.dob = user.dob;
        token.role = user.role;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ token, session }: { token: JWT; session: Session }) {
      session.user = {
        id: token.id as string,
        name: token.name as string,
        lastName: token.lastName as string,
        email: token.email as string,
        zipCode: token.zipCode as string,
        state: token.state as string,
        city: token.city as string,
        street: token.street as string,
        houseNumber: token.houseNumber as string,
        dob: token.dob as string,
        role: token.role as string,
      };
      session.accessToken = token.accessToken as string;
      return session;
    },
  },
});
