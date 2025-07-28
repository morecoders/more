'use client'

import LoginForm from "@/components/res/login";
import Loader from "@/components/ui/loading";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";



export default function Page() {
    const route = useRouter()
    const {data: session, isPending, error} = useSession()
    useEffect(()=> {
      if(session) route.replace("/profile")
    }, [isPending])
    return (
        <>
          { 
            isPending ?
            <Loader label="Loadding" /> :
            <LoginForm />
          }
        </>
    )
}