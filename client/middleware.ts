import next from "next";
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    //  check for cookie
    const token = req.cookies.get("ADMIN")
    if (!token) {
        return NextResponse.redirect(new URL("/", req.url))
    }
    return NextRequest.next()
}

export const config = {
    matcher: ("/admin")
}