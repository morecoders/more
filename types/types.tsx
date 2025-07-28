//user register schema
import { z } from "zod";

export const schema = z.object({
  firstName: z.string().min(3, 'First name is required'),
  lastName: z.string().min(3, 'Last name is required'),
  email: z.email(),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(18)
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  occupation: z.string(),
  age: z.coerce.number(),
});


export type LoggedInUser = {
  firstName: string,
  lastName:  string,
  username:  string,
  occupation: string,
  age: string,
}


export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(8, 'Password must be at least 8 characters').max(18).regex(/[A-Z]/).regex(/[0-9]/),
  
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







