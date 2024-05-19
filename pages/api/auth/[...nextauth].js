import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";


//process.env.VERCEL_ENV !== "preview" && 

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    GithubProvider({
        clientId: process.env.AUTH_GITHUB_ID,
        clientSecret: process.env.AUTH_GITHUB_SECRET,
      }),
      CredentialsProvider({
        name: "credentials",
        credentials: {
          username: { label: "Username", type: "text", placeholder: "username" },
          password: { label: "Password", type: "password" },
        },

        async authorize(credentials) {
          if (
            credentials.username === "fisch" &&
            credentials.password === "fisch"
          ) {
            return {
              name: "Max",
              email: "test@example.com",
            };
          } if (
            credentials.username === "person" &&
            credentials.password === "person"
          ) {
            return {
              name: "User",
              email: "user@example.com",
            };
          }
          return null;
        },
      }),
    ],
  };

export default NextAuth(authOptions)