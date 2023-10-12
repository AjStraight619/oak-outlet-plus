import formData from "form-data";
import Mailgun from "mailgun.js";
import { NextRequest, NextResponse } from "next/server";

const DOMAIN =
  process.env.NODE_ENV !== "production"
    ? "localhost:3000"
    : process.env.PRODUCTION_DOMAIN;
const API_KEY = process.env.MAILGUN_API_KEY || "";
const PROTOCOL = process.env.NODE_ENV === "production" ? "https" : "http";
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN || "";

const mailgun = new Mailgun(formData);

const client = mailgun.client({ username: "api", key: API_KEY });

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const email = formData.get("email") as unknown as string;
  const phone = formData.get("phoneNumber") as unknown as string;
  let name = formData.get("name") as unknown as string;

  if (!name) {
    name = "Customer";
  }

  const messageDataCustomer = {
    from: `Oak Outlet Plus <noreply@${DOMAIN}>`,
    to: email,
    subject: "Confirmation email",
    text: `Hello ${name}, this is a confirmation email from Oak Outlet Plus. Thank you for choosing us! We will get in touch with you soon.`,
  };

  const messageDataProvider = {
    from: `Oak Outlet Plus <noreply@${DOMAIN}>`,
    to: "nickatz5@yahoo.com",
    subject: "Customer quote",
    text: `${name}, is requesting a quote: \n ${email}, \n ${phone}`,
  };

  await client.messages.create(MAILGUN_DOMAIN, messageDataCustomer);
  await client.messages.create(MAILGUN_DOMAIN, messageDataProvider);

  return NextResponse.json({ name, email });
}
