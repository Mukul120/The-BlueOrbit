import React from 'react'

const Immigration = () => {
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
        <h1 className="text-3xl font-bold mb-4 text-blue-900 capitalize">  Immigration Advisory</h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          Navigating the US immigration system can be complex. Our immigration advisory services connect you with experienced specialists who can provide guidance and support throughout your visa application process.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We'll help you understand your visa options, complete the necessary paperwork, and increase your chances of a successful application.The US immigration process can be daunting. Our service helps alleviate stress by providing expert guidance and support.
        </p>
      </div>
    </div>
  )
}

export default Immigration