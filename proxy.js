import { getSessionCookie } from "better-auth/cookies";
import { NextResponse } from "next/server";

export function proxy(req) {
  const sessionCookies = getSessionCookie(req);
  if (!sessionCookies && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
