import { useSession } from "@/lib/auth-client"

export type Obj = {
    firstName: string,
    lastName: string,
    occupation: string,
    age: string
}

export const toUser = (
    firstName: string,
    lastName: string,
    email: string,
    occupation: string,
    age: string
) =>{
    return {firstName, lastName, email, occupation, age}
}