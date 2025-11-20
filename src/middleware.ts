import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const adminAuth = req.cookies.get("admin_auth")?.value;

  if (req.nextUrl.pathname.startsWith("/admin")) {
    if (!adminAuth && req.nextUrl.pathname !== "/admin/login") {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
