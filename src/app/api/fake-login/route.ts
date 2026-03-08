import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.redirect(new URL("/", "http://localhost:3000"));
  response.cookies.set("auth-token", "fake-token-123", {
    path: "/",
    maxAge: 60 * 60,
  });
  return response;
}