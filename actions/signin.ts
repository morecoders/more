"use server"

import { auth } from "@/lib/auth"


export const signIn = async (email: string, password: string)=> {

    try {
        const res = await auth.api.signInEmail(
            {
                body: {
                    email: email, 
                    password: password,
                }
            }
        );
        return {success: true, message: "Signed in successfully...", user: res.user}
    } catch (e) {
        const error = e as Error
        return {success: false, message: error.message || "An unknown error as occurred", user: null}
    }
}

