"use client"

import { authClient } from "@/lib/auth-client"
import Image from "next/image"


const social = async (provider: string)=>{
    await authClient.signIn.social({
        provider: provider
    })
}

const SocialButtons = () => {

    const googleSubmit = async () => await social("google")
    const githubSubmit = async () => await social("github")

    return (
        <>
            <div className="space-y-4 max-w-sm mx-auto">
                {/* <!-- Google --> */}
                <button onClick={googleSubmit} className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100 transition">
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                    <span>Sign in with Google</span>
                </button>
                {/* 
  <!-- GitHub --> */}
                <button onClick={githubSubmit} className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition">
                    <Image className="bg-white rounded" src={"/github.svg"} alt="Github" width={24} height={24} priority />
                    <span>Sign in with GitHub</span>
                </button>

                {/* <!-- Facebook --> */}
                <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition">
                    <Image className="bg-white rounded p-1" src={"/facebook.svg"} alt="Facebook" width={16} height={16} priority />
                    <span>Sign in with Facebook</span>
                </button>

                {/* <!-- TikTok --> */}
                <button className="w-full flex items-center justify-center gap-2 bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-900 transition">
                    <Image className="bg-white rounded p-1" src={"/tiktok.svg"} alt="Tiktok" width={18} height={18} priority />
                    <span>Sign in with TikTok</span>
                </button>

                <div className="flex items-center justify-center my-6">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="px-4 text-gray-500 text-sm">or continue with</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

            </div>

        </>
    )
}


export default SocialButtons