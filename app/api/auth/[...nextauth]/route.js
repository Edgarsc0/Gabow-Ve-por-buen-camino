import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.CLIENTID,
            clientSecret: process.env.CLIENTSECRET
        })
    ],
    secret: process.env.SECRET
});

export { handler as GET, handler as POST };
