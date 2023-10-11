import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const email = formData.get("email");
  const name = formData.get("name");

  return NextResponse.json({ name, email });
}
