// altcha setup
import crypto from "crypto";
import { ALTCHA_SECRET } from "@/lib/constants";

export function generateSalt(length = 20) {
  return crypto.randomBytes(length).toString("hex");
}

export function generateHmacKey() {
  const hmac = crypto.createHmac("sha256", ALTCHA_SECRET);

  return hmac.digest("hex");
}

export function generateSignature(message: string) {
  const hmac = crypto.createHmac("sha256", ALTCHA_SECRET);
  hmac.update(message);
  return hmac.digest("hex");
}

// Email form custom validation
export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
};
