
import Profile from "@/components/res/profile"
import { LoggedInUser } from "@/types/types"
import { get_cookies } from "@/utils/cookies"

import { auth, currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

const UserBoard = async () => {
  const data = await auth()
  //const user =(await get_cookies('user')) as LoggedInUser
  if (!data.isAuthenticated) redirect('/auth/sign-in/')
  const user = await currentUser()

  return (
    <>
      <Profile
        first_name={`${user?.firstName}`}
        last_name={`${user?.lastName}`}
        username={`${user?.emailAddresses[0].emailAddress}`}
        img={user?.imageUrl}
        age={user?.publicMetadata.age ? String(user.publicMetadata.age) : 'N/A'}

      />

    </>
  )
}


export default UserBoard