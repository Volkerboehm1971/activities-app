import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

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
            name: "Kim",
            email: "test@example.com",
            image:
              "https://img.freepik.com/free-vector/woman-profile-account-picture_24908-81036.jpg?t=st=1716469905~exp=1716473505~hmac=f79c59b132a80a63c346e9ef697649b7e2e45ce96de9bf89a9f47e2230ec4b02&w=1480",
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      if (token) {
        session.user.image = token.image;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.image = user.image;
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
