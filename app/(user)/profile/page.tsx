
import Profile from "@/components/res/profile"
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const UserBoard = async () => {

  const session = await auth.api.getSession({headers: await headers()})
  const email = session?.user.email
  const opt = session?.user.name.split(" ")
  
  const profile = session?.user.image ?? '/profile.svg'
  return (
    <>
      <Profile
        first_name={`${opt?.[0]}`}
        last_name={`${opt?.[1]}`}
        username={`${email}`}
        img={profile}  //Todo
      />
    </>
  );
}


export default UserBoard