import PostgresAdapter from "@auth/pg-adapter";
import { Pool } from "@neondatabase/serverless";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

// Don't know if this works 100%.
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  adapter: PostgresAdapter(pool),
  pages: {
    signIn: "/login",
  },
});
