import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import type { JWT } from "next-auth/jwt";
import type { Session } from "next-auth";
import type { User } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        // Contoh user dummy
        const user = {
          id: "1",
          name: "Rahma",
          email: "rahma@example.com",
          password: "password123",
        };

        if (
          credentials?.email === user.email &&
          credentials?.password === user.password
        ) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt", // ✅ ini diubah dengan import yang sesuai
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) {
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
   async session({
  session,
  token,
}: {
  session: Session;
  token: JWT;
}) {
  if (session.user) {
    session.user.name = token.name;
    session.user.email = token.email;
  }

  return session;
    }

  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
