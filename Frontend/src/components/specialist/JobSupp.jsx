import React from 'react'

const JobSupp = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Image Section */}
      <div className="w-full ">
        <img
          src="./about.jpeg"
          alt="Resume"
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-full p-6 bg-white">
        <h1 className="text-3xl font-bold mb-4 text-blue-900 capitalize">Post-Employment Support</h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          Transitioning to a new job can come with challenges. Our post-employment support service provides ongoing guidance and resources throughout your first year on the job. We'll be there to answer your questions, offer career coaching, and help you navigate any workplace issues that may arise.
        </p>
        <p className="text-gray-700 leading-relaxed">

          Our post-employment support goes beyond just the initial onboarding process. We offer ongoing coaching and guidance to help you excel in your new position.
        </p>
      </div>
    </div>
  )
}

export default JobSupp