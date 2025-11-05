import { NextResponse } from "next/server";

export async function POST() {
  const secure = process.env.NODE_ENV === "production";
  const cookie = `admin_auth=; Path=/; HttpOnly; Max-Age=0; SameSite=Strict${secure ? "; Secure" : ""}`;

  const res = NextResponse.json({ success: true, message: "Logged out" });
  res.headers.set("Set-Cookie", cookie);
  return res;
}