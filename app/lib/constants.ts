export const ALTCHA_SECRET = process.env.ALTCHA_SECRET ?? "DefaultSecret";

/*
Whenever you need to access the ALTCHA_SECRET in different parts of your Next.js application,
you can simply import it from the lib/constants.ts, like:
import { ALTCHA_SECRET } from '../lib/constants';

// Use ALTCHA_SECRET in your functions, API routes, etc.
console.log(ALTCHA_SECRET);
*/
