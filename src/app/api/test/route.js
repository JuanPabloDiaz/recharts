import { NextResponse } from "next/server";

export async function GET(request, response) {
  return NextResponse.json({ msg: "Hello from server" });
}
