'use client'

import Link from "next/link"

const Recommend = () => {
    return (
        <>
            <div className="w-full lg:w-1/3">
                <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Recommendations</h2>
                    <div className="flex items-center space-x-2 mb-4">
                        <span className="text-yellow-400 text-xl">★★★★★</span>
                        <span className="text-gray-600 text-sm">(32)</span>
                    </div> 

                    <Link href="/recommend"
                        className="text-blue-600 hover:underline text-sm font-medium text-center block"
                    >
                        View More Recommendations →
                    </Link>

                    <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition">
                        Invite Friends to Recommend
                    </button>
                </div>
            </div>

        </>
    )
}

export default Recommend