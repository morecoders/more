import { auth } from "@/lib/auth"; // path to your auth file
import { toNextJsHandler } from "better-auth/next-js";
 


// better-auth mount handlers
export const { POST, GET } = toNextJsHandler(auth);