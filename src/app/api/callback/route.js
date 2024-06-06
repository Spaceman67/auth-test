import { NextResponse } from "next/server";

export async function GET(request, response) {
    console.log(request);
    //get vulcan code here and make POST req for access token and userinfo
    
    return NextResponse.json({ message: "Success" });
}