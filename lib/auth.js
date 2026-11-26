import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { createAuthMiddleware, APIError } from "better-auth/api";
import prisma from "./db";

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "postgresql" }),

  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  trustedOrigins: [process.env.BETTER_AUTH_URL],

  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
    maxPasswordLength: 128,
    autoSignIn: false,
  },

  session: {
    expiresIn: 60 * 60 * 24 * 7, // session lives 7 days
    updateAge: 60 * 60 * 24, // extend it if used once a day
    freshAge: 60 * 60 * 24, // "fresh" window for sensitive actions
  },

  rateLimit: {
    enabled: true,
    window: 60,
    max: 100,
    customRules: {
      "/sign-in/email": { window: 10, max: 3 }, // slow down password guessing
    },
  },

  advanced: {
    useSecureCookies: process.env.NODE_ENV === "production",
  },

  hooks: {
    before: createAuthMiddleware(async (ctx) => {
      if (ctx.path !== "/sign-up/email") return;
      const email = ctx.body?.email?.toLowerCase();
      const existing = await prisma.user.findUnique({ where: { email } });
      if (existing) {
        throw new APIError("BAD_REQUEST", {
          message: "An account with this email already exists.",
        });
      }
    }),
  },

  plugins: [nextCookies()], // keep this last
});
