import { connectToDB } from "@/lib/database";
import User from "@/models/user";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || ""
    })
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        await connectToDB();
        const { email, image, name } = user;
        const userExist = await User.findOne({ email });

        if (!userExist)
          await User.create({ email, name, image, role: "CUSTOMER" });

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  }
});

export { handler as GET, handler as POST };
