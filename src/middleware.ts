// import { NextRequest, NextResponse } from "next/server";
// import { currentUser } from "./services/auth";

// export async function middleware(req: NextRequest) {
//   const { pathname } = req.nextUrl;
//   const adminUser = await currentUser();

//   const requestHeaders = new Headers(req.headers);
//   requestHeaders.set("x-pathname", pathname);

//   const res = NextResponse.next({
//     request: {
//       headers: requestHeaders,
//     },
//   });

//   if (!adminUser?.email) {
//     if (pathname.startsWith("/dashboard")) {
//       return NextResponse.redirect(new URL("/login", req.url));
//     }
//     return res;
//   }

//   try {
//     if (pathname === "/login") {
//       return NextResponse.redirect(new URL("/dashboard", req.url));
//     }
//     return res;
//   } catch (error) {
//     console.error(error);
//     return NextResponse.redirect(new URL("/login", req.url));
//   }
// }

// export const config = {
//   matcher: ["/((?!_next|api|static|favicon.ico).*)"],
// };

import { NextResponse, NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url))
}
 
export const config = {
  matcher: '/about/:path*',
}
