// import { FB } from "fb";
// import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {
//   try {
//     if (!req.body.pageAccessToken) {
//       const pageAccessToken = req.body.pageAccessToken;
//       const photos = await FB.api("page-id/photos", {
//         access_token: pageAccessToken,
//       });
//       return NextResponse.json(photos);
//     }
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error });
//   }
// }
