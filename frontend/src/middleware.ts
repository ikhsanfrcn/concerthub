// import { getToken } from "next-auth/jwt";
// import { NextRequest, NextResponse } from "next/server";

import { NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/auth";

// export async function middleware(req: NextRequest) {
//   const token = await getToken({ req, secret: process.env.AUTH_SECRET });

//   if (!token && req.nextUrl.pathname === "/dashboard") {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   return NextResponse.next();
// }

export async function middleware(req: NextRequest) {
  const data = await auth();

  if (data && req.nextUrl.pathname.startsWith('/login')) {
     return NextResponse.redirect(new URL("/", req.url));
  }
  if (!data && req.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next()
}