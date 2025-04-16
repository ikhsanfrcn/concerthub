import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
// console.log(token);

  if (!token) {
    if (req.nextUrl.pathname == "/dashboard") {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    return NextResponse.next();
  }

  const userRole = token.role;

  if (req.nextUrl.pathname == "/dashboard" && userRole !== "ORGANIZER") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
