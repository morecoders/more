'use client'

import Recommend from '../ui/recommend'
import ProfileHeader from "./profile-header"



const Profile = (
  {first_name, last_name, username, age, job, img}:
  {
    first_name: string,
    last_name: string,
    username: string,
    age?: string,
    job?: string,
    img?: string
  }
) => {
  
  return (

   
    <>
      
        <div className="max-w-5xl mx-auto">
          {/* Header */}

          <ProfileHeader name= {first_name} />
          
          {/* Profile Card */}
          <section className="bg-blue-50 rounded-xl shadow-md mt-3 p-6 mb-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            
            {/* Info */}
            <div className="w-full">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Profile</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm mt-4">
                <div>
                  <span className="text-gray-500">First Name</span>
                  <p className="font-medium text-gray-800 mb-2">{first_name}</p>
                  <span className="text-gray-500">Last Name</span>
                  <p className="font-medium text-gray-800 mb-2">{last_name}</p>
                </div>
                <div>
                  <span className="text-gray-500">Username</span>
                  <p className="font-medium text-gray-800">{username}</p>
                </div>
                <div>
                  <span className="text-gray-500">Occupation</span>
                  <p className="font-medium text-gray-800">{job ?? "ToDo"}</p>
                </div>
                <div>
                  <span className="text-gray-500">Age</span>
                  <p className="font-medium text-gray-800">{age ?? "ToDo"}</p>
                </div>
              </div>
            </div>
            <Recommend />
          </section>

          {/* Quick Actions */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Edit Portfolio</h3>
              <p className="text-gray-500 text-sm mb-3">Update your content, layout, and personal info.</p>
              <a href="/edit" className="text-blue-600 hover:underline text-sm font-medium">Go to Editor →</a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">View Live Site</h3>
              <p className="text-gray-500 text-sm mb-3">See how your portfolio looks to the world.</p>
              <a href={`/portfolio/${username}`} className="text-blue-600 hover:underline text-sm font-medium">Visit Portfolio →</a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Account Settings</h3>
              <p className="text-gray-500 text-sm mb-3">Change password, email, or delete account.</p>
              <a href="/settings" className="text-blue-600 hover:underline text-sm font-medium">Manage Settings →</a>
            </div>
          </section>

          
        </div>
    </>
  )
}


export default Profile
