import { prisma } from "@/prisma/helper"
import { RegisterUser,RegisterUserState } from "@/types/types"
import { revalidatePath } from "next/cache"
import { add_user } from "./user"


export const add_user_fn = async (data: RegisterUser): Promise<RegisterUserState> => {
    try {
        const res = add_user(data)

        if (!res) {
            return { success: false, error: 'Failed to save user to database' }
        }

        return { success: true, error: null }
    } catch (err) {
        
        return { success: false, error: 'Server error' }
    }
}