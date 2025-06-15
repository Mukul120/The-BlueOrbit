import React from 'react'

const OnBoarding = () => {
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
        <h1 className="text-3xl font-bold mb-4 text-blue-900 capitalize">   On boarding Assistance</h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          Starting a new job in the US can involve unfamiliar paperwork and processes. Our onboarding assistance service helps you navigate the onboarding process smoothly and efficiently. We'll provide guidance on completing essential documents, understanding US tax regulations, and adjusting to your new work environment.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Settling into a new job in a new country can be stressful. Our onboarding assistance service ensures a smooth transition by providing the support you need to navigate the initial processes and paperwork. We'll be there to answer your questions and guide you through essential steps, allowing you to focus on getting acclimated to your new role and company culture.
        </p>
      </div>
    </div>
  )
}

export default OnBoarding