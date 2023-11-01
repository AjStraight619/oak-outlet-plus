// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   const formData = await req.formData();
//   const files: FileList = formData.get("files") as unknown as FileList;

//   for (let i = 0; i < files.length; i++) {
//     const file = files[i];
//     const bytes = await file.arrayBuffer();
//     const buffer = Buffer.from(bytes);
//     await saveImageToDatabase(buffer);
//   }
// }

// async function saveImageToDatabase(buffer: Buffer) {
//   const uploads = await prisma.photo.create({
//     data: {
//       type: "REFINISHES",
//       filePath: "",
//       imageData: buffer,
//     },
//   });

//   return NextResponse.json({ uploads });
// }
