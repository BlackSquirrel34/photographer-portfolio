import { createChallenge } from "altcha-lib";
import { NextResponse } from "next/server";
import { generateHmacKey } from "../../../../lib/utils"; // Ensure this path is correct

export async function GET() {
  const hmacKey = generateHmacKey();

  const { challenge, salt, algorithm, signature } = await createChallenge({
    hmacKey,
    algorithm: "SHA-256",
    maxnumber: 50000,
    saltLength: 20,
  });

  return NextResponse.json({
    challenge,
    salt,
    algorithm,
    signature,
  });
}
