
import {z} from 'zod'


//user register schema
export const schema = z.object({
  firstName: z.string().min(3, 'First name is required'),
  lastName: z.string().min(3, 'Last name is required'),
  username: z.email(),
  password: z.string().min(8, 'Password must be at least 6 characters').max(18).regex(/[A-Z]/).regex(/[0-9]/),
  occupation: z.string(),
  age: z.string(),
})

export type LoggedInUser = {
  firstName: string,
  lastName:  string,
  username:  string,
  occupation: string,
  age: string,
}


export const loginSchema = z.object({
  username: z.email(),
  password: z.string().min(8, 'Password must be at least 6 characters').max(18).regex(/[A-Z]/).regex(/[0-9]/),
  
})


export type Any = any

export type RegisterUser = z.infer<typeof schema>
export type LoginUser = z.infer<typeof loginSchema>

export type RegisterUserState = {
  success: boolean
  error: string | null
  fieldErrors?: Record<string, string[]>
}

export type LoginUserState = {
  user: LoginUser | null
  error: string | null
  success: boolean
}


