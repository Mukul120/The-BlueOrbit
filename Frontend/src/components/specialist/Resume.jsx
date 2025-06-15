import React from 'react';

const Resume = () => {
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
        <h1 className="text-3xl font-bold mb-4 text-blue-900">Resume Revamp</h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          Don't settle for a generic resume! Our resume revamp service ensures your document shines and gets noticed by hiring managers. We'll collaborate with you to understand your background, skills, and career goals. Our experienced writers will then craft a compelling narrative tailored to specific job openings, highlighting your most relevant qualifications and achievements.
        </p>
        <p className="text-gray-700 leading-relaxed">
          This personalized approach ensures your resume effectively targets the right employers and increases your chances of landing interviews. In today's competitive job market, a well-crafted resume is essential for getting your foot in the door. Our service goes beyond simply listing your experience.
        </p>
      </div>
    </div>
  );
};

export default Resume;
