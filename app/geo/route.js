import { NextResponse } from "next/server";

export function GET(request) {
    request.cookies.set("show-banner", "false");
    console.log(request)
    console.log(request.geo.city)
    return NextResponse.json({
        status: "Hola",
        city: request.geo.city
    }, {
        status: 200
    })
}