'use client'

import Link from "next/link"



const Click = ({text, route}: {text: string, route:string}) => {
    const path = `/${route}`
    return (
        <>
            <p className="text-sm text-center mt-4">
                <Link className="text-blue-600 hover:underline cursor-pointer" href={path}>
                   {text}
                </Link>
            </p>
        </>
    )
}



export default Click
