import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the request is for an admin route
  if (pathname.startsWith("/admin")) {
    // Allow access to login page without authentication
    if (pathname === "/admin/login") {
      return NextResponse.next();
    }

    // Check if user is authenticated by checking the cookie directly
    const authCookie = request.cookies.get("admin_auth");
    
    if (!authCookie || authCookie.value !== "authenticated") {
      // Redirect to login page if not authenticated
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};