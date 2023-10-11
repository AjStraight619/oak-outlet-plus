import { NextResponse } from "next/server";

export async function POST() {
  const formData = new FormData();
  const email = formData.get("email");
  const name = formData.get("name");

  return NextResponse.json({ name, email });
}
