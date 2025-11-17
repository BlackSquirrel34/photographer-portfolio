import { verifySolution } from "altcha-lib";
import { type Payload } from "altcha-lib/types";
import { NextResponse } from "next/server";
import { ALTCHA_SECRET } from "../../../../lib/constants"; // Import from the lib folder

type RequestDataType = {
  payload: string | Payload;
};

export type VerifyCaptchaApiResponse = {
  ok: boolean;
};

export async function POST(req: Request) {
  const data = (await req.json()) as RequestDataType;

  const ok = await verifySolution(data.payload, ALTCHA_SECRET);
  // console.log("that's the ok", ok)

  return NextResponse.json({
    ok,
  });
}
