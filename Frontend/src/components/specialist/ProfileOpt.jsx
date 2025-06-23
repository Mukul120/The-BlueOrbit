import React from 'react'

const ProfileOpt = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Image Section */}
      <div className="w-full ">
        <img
          src="./images/sd.jpeg"
          alt="Resume"
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-full p-6 bg-white">
        <h1 className="text-3xl font-bold mb-4 text-blue-900 capitalize"> Profile Optimization</h1>
        <p className="text-gray-700 leading-relaxed mb-4">
       
          Don't underestimate the power of your online presence! Our profile optimization service helps you revamp your online profiles, particularly LinkedIn, to showcase your expertise and increase your visibility to potential employers.
        </p>
        <p className="text-gray-700 leading-relaxed">
          

          We'll optimize your profile with relevant keywords and craft a compelling summary that highlights your skills and experience, ensuring you get noticed for your ideal IT opportunities. In today's digital age, recruiters and hiring managers increasingly rely on online platforms like LinkedIn to find qualified candidates. Our service positions you for success by optimizing your profile to be discoverable by the right people.
        </p>
      </div>
    </div>
  )
}

export default ProfileOpt