'use server'
 
import { add_user_fn } from '@/db/data'
import { schema, RegisterUserState } from '@/types/types'




export async function AddUser(_: RegisterUserState, formData: FormData): Promise<RegisterUserState> {
  const raw = Object.fromEntries(formData.entries())

  const parsed = schema.safeParse(raw)

  if (!parsed.success) {
    return {
      success: false,
      error: 'Validation failed',
      fieldErrors: parsed.error.flatten().fieldErrors,
    }
  }

  const data = parsed.data
  

  // Simulate DB save
  // await db.user.create({ data })

  return await add_user_fn(data)
}