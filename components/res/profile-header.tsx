


const ProfileHeader = ({
    name,
    src
}: {
    name: string,
    src?: string
}) => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                {/* Column 1: Welcome Text */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Welcome back, {name || ""} 👋
                    </h1>
                    <p className="text-gray-600 mt-1">
                        Here’s your profile and tools to manage your portfolio.
                    </p>
                </div>

                {/* Column 2: Avatar */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src={src || "/profile.svg"} // Replace with dynamic avatar if needed
                        alt="Profile Photo"
                        className="w-24 h-24 rounded-full border border-gray-300 shadow-sm object-cover"
                    />
                </div>
            </div>

        </>
    )
}



export default ProfileHeader