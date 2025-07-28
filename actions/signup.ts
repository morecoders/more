"use server"

import { auth } from "@/lib/auth"

export const signUp = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  occupation?: string,
  age?: number
) => {
  
  try {
    const res = await auth.api.signUpEmail({
      body: {
        email: email,
        password: password,
        name: `${firstName} ${lastName}`
      }
    });
    return { success: true, message: "Signed up successfully...", user: res.user }
  } catch (e) {
    const error = e as Error
    console.log(error.cause)
    return { success: false, message: error.message || "An unknown error has occurred", user: null }
  }
}