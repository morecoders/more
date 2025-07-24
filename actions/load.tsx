'use server'

import { get_user } from "@/db/user"
import { prisma } from "@/prisma/helper"
import { LoggedInUser, LoginUser, LoginUserState, RegisterUser, loginSchema, schema } from "@/types/types"
import { set_cookies } from "@/utils/cookies"
import axios from "axios"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

const url = 'http://localhost:3001/users'

export async function LoginUserFn(_: LoginUserState, formData: FormData): Promise<LoginUserState> {
  const login_raw = loginSchema.safeParse(Object.fromEntries(formData.entries()))

  const data = login_raw.data

  if (!data?.username || typeof data.username !== 'string' || !data.password || typeof data?.password !== 'string') {
    return {
      user: null,
      error: 'Username and password are required',
      success: false,
    }
  }

  try {
    const email = data.username
    const password = data.password
 
    const model = await get_user({email, password})
    
    if (!model) {
      return { user: null, error: 'Failed to fetch user', success: false }
    }
    
    const loggedInUser: LoggedInUser = {
      firstName: model.firstName,
      lastName: model.lastName,
      occupation: model.job!,
      username: model.email,
      age: model.age!
    };
    (await set_cookies('user', loggedInUser, 24))
    revalidatePath('/')
    return {
      user: {username: loggedInUser.username, password: model.password},
      error: null,
      success: true,
    }
  } catch (err) {

    return {
      user: null,
      error: 'Server error',
      success: false,
    }
  }
}