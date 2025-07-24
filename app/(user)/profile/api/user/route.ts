import { loginSchema } from "@/types/types";
import { NextRequest } from "next/server";


export async function GET() {

    return Response.json({"success":"finish"})
}

export async function POST(req: NextRequest) {
    const form = await req.formData() // form data
    // validate form data
    const output = Object.fromEntries(form.entries())
    const data = loginSchema.safeParse(output).data
    
    {/* get user from store */}

    // return user json
    return Response.json({
        "username": data?.username,
        "password": data?.password
    })
}