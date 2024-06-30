import { NextResponse } from "next/server";

export function middleware(request){
	return NextResponse.redirect(new URL('/about/history', request.url))
}
export const config = {
	matcher : '/about'
}