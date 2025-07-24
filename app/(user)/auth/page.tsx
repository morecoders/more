'use client'

import LoginForm from "@/components/res/login"
import Signup from "@/components/res/signup"
import { useState } from "react"



const CreateDashboard = ()=> {
    const [signup, signAction] = useState(false)
    return (
        <>
          {
            !signup ?
            <Signup click={()=> signAction(!signup)} />
            :
            <LoginForm click={()=> signAction(!signup)} />
          }
          
        </>
    )
}



export default CreateDashboard