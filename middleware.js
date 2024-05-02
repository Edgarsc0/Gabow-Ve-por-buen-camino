import { NextResponse } from "next/server";

export async function middleware(request, _next) {
    const res = NextResponse.next();
    const country = request.geo?.country ?? "";
    console.log(country)
    console.log(request.geo.latitude);
    return res;
}