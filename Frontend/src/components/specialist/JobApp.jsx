import React from 'react'

const JobApp = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Image Section */}
      <div className="w-full ">
        <img
          src="./images/pd.jpeg"
          alt="Resume"
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-full p-6 bg-white">
        <h1 className="text-3xl font-bold mb-4 text-blue-900 capitalize"> Job Application Strategy</h1>
        <p className="text-gray-700 leading-relaxed mb-4">
            Feeling overwhelmed by the application process? Our job application strategy service provides expert guidance to help you apply to relevant positions and increase your chances of landing interviews.
        </p>
        <p className="text-gray-700 leading-relaxed">
        

          We'll work with you to identify ideal companies and craft targeted applications that showcase your value proposition. We'll guide you in developing targeted cover letters that resonate with hiring managers and showcase your unique qualifications for the specific role.
        </p>
      </div>
    </div>
  )
}

export default JobApp