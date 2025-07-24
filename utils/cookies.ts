import { Any } from "@/types/types"
import { cookies } from "next/headers"

export async function get_cookies(label: string) {
    const result =  (await cookies()).get(label)?.value
    return JSON.parse(result!)
}
export async function set_cookies(
    label: string, 
    data: Any,
    age: number
) {
    return (await cookies()).set(label, JSON.stringify(data), {
          path: '/',
          httpOnly: true,
          maxAge:  age * 60 * 60
        }
    )
}