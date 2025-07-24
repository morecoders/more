'use client'



const Click = ({text, click}: {text: string, click: Function}) => {
    return (
        <>
            <p className="text-sm text-center mt-4">

                <span
                    onClick={() => click()}
                    className="text-blue-600 hover:underline cursor-pointer"
                >
                    {text}
                </span>
            </p>
        </>
    )
}



export default Click
