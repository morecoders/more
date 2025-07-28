import { auth } from "@/lib/auth";





export default async function signInWithGoogle() {
    auth.api.signInSocial({
        body: {
            provider: "google",
            callbackURL: "/profile",
            
        }
    })
}