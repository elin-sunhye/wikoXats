import { getToken } from "next-auth/jwt";
import { getSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    raw: true,
  });
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/cms")) {
    if (token) {
      return NextResponse.redirect(new URL("/lg/login", req.url));
    }
  }
};

export const config = {
  matcher: ["/cms/:path*"],
};
