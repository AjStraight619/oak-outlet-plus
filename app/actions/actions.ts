"use server";
import formData from "form-data";
import Mailgun from "mailgun.js";

const DOMAIN =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000/"
    : process.env.PRODUCTION_DOMAIN;
const API_KEY = process.env.MAILGUN_API_KEY || "";
const PROTOCOL = process.env.NODE_ENV === "production" ? "https" : "http";
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN || "";

const mailgun = new Mailgun(formData);

const client = mailgun.client({ username: "api", key: API_KEY });

export const sendEmail = async (formData: FormData) => {
  let name = formData.get("name") as unknown as string;
  const email = formData.get("email") as unknown as string;
  const phone = formData.get("phoneNumber") as unknown as string;
  const description = formData.get("description") as unknown as string;
  const files = formData.getAll("files") as unknown as File[];

  if (!name) {
    name = "Customer";
  }

  const attachments = await Promise.all(
    files.map(async (file) => {
      const buffer = await file.arrayBuffer();
      return {
        filename: file.name,
        contentType: file.type,
        data: Buffer.from(buffer),
      };
    })
  );

  const messageDataCustomer = {
    from: `Oak Outlet Plus <noreply@${MAILGUN_DOMAIN}>`,
    to: email,
    subject: "Confirmation Email",
    text: `Hello ${name}, this is a confirmation email from Oak Outlet Plus. Thank you for choosing us! We will get in touch with you soon.`,
    attachment: attachments,
  };

  const messageDataProvider = {
    from: `${email}`,
    to: "astraight9409@sdsu.edu",
    subject: "Customer quote",
    text: `${name}, is requesting a quote: \n ${email}, \n ${phone}, \n ${description}`,
    attachment: attachments,
  };

  try {
    await client.messages.create(MAILGUN_DOMAIN, messageDataCustomer);
    // await client.messages.create(MAILGUN_DOMAIN, messageDataProvider);
  } catch (error) {
    console.log(error);
  }
};
