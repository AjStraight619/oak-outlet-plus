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
  const files = formData.getAll("files") as unknown as File[];
  let name = formData.get("name") as unknown as string;

  if (!name) {
    name = "Customer";
  }

  const attachments = await Promise.all(
    files.map(async (file) => {
      // Assuming 'file' is a Blob or File object, convert it to Buffer
      const buffer = await file.arrayBuffer();
      return {
        filename: file.name,
        contentType: file.type,
        data: Buffer.from(buffer),
      };
    })
  );

  const messageDataCustomer = {
    from: `Oak Outlet Plus <noreply@${DOMAIN}>`,
    to: email,
    subject: "Confirmation Email",
    text: `Hello ${name}, this is a confirmation email from Oak Outlet Plus. Thank you for choosing us! We will get in touch with you soon.`,
  };

  const messageDataProvider = {
    from: `Oak Outlet Plus <noreply@${DOMAIN}>`,
    to: "astraight9409@sdsu.edu",
    subject: "Customer quote",
    text: `${name}, is requesting a quote: \n ${email}, \n ${phone}`,
    attachment: attachments,
  };

  await client.messages.create(MAILGUN_DOMAIN, messageDataCustomer);
  await client.messages.create(MAILGUN_DOMAIN, messageDataProvider);

  return NextResponse.json({ name, email });
}
