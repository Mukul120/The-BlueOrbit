import { ArrowRight, ChevronDown, ChevronRight, ChevronUp, CircleCheck } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import Resume from "../components/specialist/Resume";
import ProfileOpt from "../components/specialist/ProfileOpt";
import Immigration from '../components/specialist/Immigration';
import JobApp from "../components/specialist/JobApp";
import JobSupp from "../components/specialist/JobSupp";
import Interview from "../components/specialist/Interview";
import Onboarding from "../components/specialist/OnBoarding";
import Salary from "../components/specialist/Salary";
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

const Specialist = () => {
  const services = [
    { value: 1, title: "resume revamp" },
    { value: 2, title: "profile optimization" },
    { value: 3, title: "job application" },
    { value: 4, title: "interview preparation" },
    { value: 5, title: "salary negotiation" },
    { value: 6, title: "onboarding assistance" },
    { value: 7, title: "job support" },
    { value: 8, title: "immigration advisory" },
  ];

  const [activetab, setActivetab] = useState(1);
  const [openItem, setOpenItem] = useState(null);

  const renderComponent = () => {
    switch (activetab) {
      case 1: return <Resume />;
      case 2: return <ProfileOpt />;
      case 3: return <JobApp />;
      case 4: return <Interview />;
      case 5: return <Salary />;
      case 6: return <Onboarding />;
      case 7: return <JobSupp />;
      case 8: return <Immigration />;
      default: return <Resume />;
    }
  };

  const accordionData = [
    {
      id: 1,
      title: "How can I tailor my resume to a specific job?",
      content: "Our writers will work with you to identify the key skills and experience mentioned in the job description and ensure your resume effectively highlights these qualifications."
    },
    {
      id: 2,
      title: "What format should my resume be in?",
      content: "We recommend a clear and concise format that is easy for hiring managers to read and navigate. We'll ensure your resume is ATS-friendly to optimize its chances of passing through applicant tracking systems."
    },
  ];

  const toggleItem = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 4400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? <Loader /> : (
        <div className="w-full mt-20">
          <div className="w-full h-[70vh] bg-cover bg-center relative flex items-center justify-center" style={{ backgroundImage: `url('./about.jpeg')` }}>
            <div className="absolute inset-0 bg-blue-900 opacity-60 z-0"></div>
            <div className="relative z-10 text-white flex flex-col gap-4 items-center text-center">
              <h1 className="text-4xl md:text-5xl font-bold capitalize">Specialist</h1>
              <div className="flex items-center gap-2 font-semibold text-lg">
                <span>Home</span>
                <ChevronRight />
                <span>Specialist</span>
              </div>
            </div>
          </div>

          <div className="w-full md:flex gap-1 mt-20">
            <div className="md:w-1/3 md:p-10">
              <h1 className='text-3xl font-bold text-center mb-5'>All Services</h1>
              <div className="flex flex-col px-10 py-2 items-center gap-5">
                {services.map((item) => (
                  <div
                    key={item.value}
                    className={` cursor-pointer text-lg font-semibold capitalize flex justify-between items-center w-full p-2 rounded transition-all duration-300
                  ${activetab === item.value ? 'bg-blue-700 text-white' : 'hover:bg-blue-700 hover:text-white hover:translate-x-1'}`}
                    onClick={() => setActivetab(item.value)}
                  >
                    {item.title}
                    <ArrowRight className={`transition-transform duration-300 ${activetab === item.value ? 'text-white' : ''}`} />
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-2/3 w-full ">
              {renderComponent()}
            </div>
          </div>

          <div className="w-full h-auto mt-20">
            <div className="w-full flex flex-col md:flex-row gap-10 justify-center items-center">
              <img src="./details.jpg" alt="" className='object-cover w-[400px]' />
              <div className='px-5'>
                <h1 className='text-3xl font-semibold mb-1'>Benefits With Our Service</h1>
                <p className='text-lg mb-6'>Highlight your strengths and target the right employers.</p>
                <span className='flex gap-2 items-center mb-2'><CircleCheck className='text-blue-700' /> Get Matched with Perfect Job Opportunities</span>
                <span className='flex gap-2 items-center mb-2'><CircleCheck className='text-blue-700' /> Increase Your Interview Rate</span>
                <span className='flex gap-2 items-center mb-2'><CircleCheck className='text-blue-700' /> Make a Strong First Impression</span>
              </div>
            </div>

            <div className="w-full flex justify-center items-center mt-8">
              <p className='md:w-[60%] w-full px-10'>We'll translate your skills and accomplishments into a clear and concise format that captures the attention of hiring managers and makes them want to learn more about you. We'll also ensure your resume is ATS-friendly to optimize its chances of passing through applicant tracking systems used by many companies.</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 my-15">
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Most Asked Common Questions</h2>
            </motion.div>

            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {accordionData.map((item) => (
                <div key={item.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none rounded-lg"
                  >
                    <span className="text-lg font-semibold text-blue-700 pr-4">{item.title}</span>
                    {openItem === item.id ? <ChevronUp className="w-5 h-5 text-blue-600" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openItem === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-4">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-700 text-base leading-relaxed">{item.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <Footer />
        </div>
      )}
    </>
  );
};

export default Specialist;