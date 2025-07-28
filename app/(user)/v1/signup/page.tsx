'use client'

import Signup from "@/components/res/signup";
import Loader from "@/components/ui/loading";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";



export default function Page() {
    const {data: session, isPending, error} = useSession()
    const route = useRouter()
    
    useEffect(()=>{
        if(session) route.replace("/profile")
    },[isPending])
    return (
        <>
           { isPending ? <Loader text="loading..."/> : <Signup /> }
        </>
    )
}