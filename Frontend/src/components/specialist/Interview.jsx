import React from 'react'

const Interview = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Image Section */}
      <div className="w-full ">
        <img
          src="./images/jd.jpeg"
          alt="interview Preparation"
          className="w-full h-64 md:h-96 object-cover object-center"
        />
      </div>

      {/* Text Section */}
      <div className="w-full p-6 bg-white">
        <h1 className="text-3xl font-bold mb-4 text-blue-900 capitalize">Interview Preparation & Support
        </h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          Feeling nervous about interviews? Our interview preparation and support service provides personalized coaching to help you build confidence and excel in your next interview.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We'll work with you on common interview questions and strategies, conduct mock interviews, and offer feedback to refine your responses. Mock interviews are a key component of our service.
        </p>
      </div>
    </div>
  )
}

export default Interview