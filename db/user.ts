import { prisma } from "@/prisma/helper";
import { RegisterUser } from "@/types/types";


export async function get_user({email, password}: {email: string, password: string}) {
    const user = await prisma.user.findUnique(
        {
          where: {email, password}
        }
    )

    return user
}



export async function add_user(user: RegisterUser) {
    const res = await prisma.user.create({
            data: {
                email: user.username,
                firstName: user.firstName,
                lastName: user.firstName,
                password: user.password,
                job: user.occupation,
                age: user.age,
            }
        })
    
    return  res
}