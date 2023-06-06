import NextAuth, { AuthOptions, User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'Luis Martins',
        },
      },
      async authorize(credentials) {
        if (!credentials?.username) return null;
        const user: User = {
          id: 'testealeatorio',
          name: credentials?.username,
        };

        return user;
      }, // Added missing closing brace here
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email }) {
      if (!user || !account || !profile || email) {
        if (account?.provider === 'credentials') return true;
        return false;
      }

      return true;
    },
  },
};

export default NextAuth(authOptions);
