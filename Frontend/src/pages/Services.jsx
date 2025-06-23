import { ArrowRightToLine, BrainCog, ChevronDown, ChevronRight, ChevronUp, Dock, File, HandCoins, HeartHandshake, PencilRuler, Speech, SquareMousePointer } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';


const Services = () => {
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

  const items = [
    ' Profile Optimization ',
    "★",
    ' Salary Negotiation ',
    "★",
    ' Interview Preparation ', "★",
    ' Job Support ', "★",
    ' Job Application Strategy ', "★",
    ' Onboarding Assistance ', "★",
    ' Profile Optimization ',
    "★",
    ' Salary Negotiation ',
    "★",
    ' Interview Preparation ', "★",
    ' Job Support ', "★",
    ' Job Application Strategy ', "★",
    ' Onboarding Assistance ', "★",
  ];

  const services = [
    {
      logo: <File size={50} />,
      h: "Resume Revamp",
      p: "Craft compelling narratives that showcase your strengths."
    },
    {
      logo: <PencilRuler size={50} />,
      h: "Profile Optimization",
      p: "Make your online presence shine and attract opportunities."
    },
    {
      logo: <Dock size={50} />,
      h: "Job Application Strategy",
      p: "Reach the right employers with targeted applications."
    },
    {
      logo: <SquareMousePointer size={50} />,
      h: "Interview Preparation",
      p: "Interview Preparation Build confidence and excel in interviews."
    },
    {
      logo: <HandCoins size={50} />,
      h: "Salary Negotiation",
      p: "Secure the compensation you deserve."
    },
    {
      logo: <BrainCog size={50} />,
      h: " On boarding Assistance",
      p: " Navigate the on boarding process smoothly."
    },
    {
      logo: <HeartHandshake size={50} />,
      h: "Job Support ",
      p: "Continued guidance in your first year."
    },
    {
      logo: <Speech size={50} />,
      h: "Immigration Advisory ",
      p: "Expert advice for US visa options."
    },
  ]
  const [openItem, setOpenItem] = useState(null);

  const accordionData = [
    {
      id: 1,
      title: "Resume & Cover Letter Revamp",
      content: "Our experienced writers craft compelling documents tailored to your background and target jobs."
    },
    {
      id: 2,
      title: "Profile Optimization?",
      content: "We optimize your online profiles (like LinkedIn) to showcase expertise and increase visibility to potential employers."
    },
    {
      id: 3,
      title: "Interview Preparation?",
      content: "We provide personalized coaching, mock interviews, and feedback to build interview confidence."
    },


  ];
  const toggleItem = (itemId) => {
    // If clicking the same item that's already open, close it
    if (openItem === itemId) {
      setOpenItem(null);
    } else {
      // Otherwise, open the new item (this automatically closes any previously open item)
      setOpenItem(itemId);
    }
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 4400);
    return () => clearTimeout(timeout);
  }, []);


  return (
    <>
      {loading ? < Loader /> : (
        <div className='w-full h-screen mt-20'>
          <div className="w-full h-[70vh] bg-cover bg-center relative flex items-center justify-center"
            style={{ backgroundImage: `url('./about.jpeg')` }}>
            <div className="absolute inset-0 bg-blue-900 opacity-60 z-0"></div>
            <div className="relative z-10 text-white flex flex-col gap-4 items-center text-center">
              <h1 className="text-4xl md:text-5xl font-bold capitalize">Services</h1>
              <div className="flex items-center gap-2 font-semibold text-lg">
                <span>Home</span>
                <ChevronRight />
                <span>Services</span>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col p-10 gap-10 md:mt-20 ">


            <div className="w-full text-center space-y-2">
              <p className='text-xl font-semibold text-blue-700 '>OUR SERVICES</p>
              <h1 className='text-4xl font-bold'>Your Complete US IT
                Job Search Toolkit</h1>
            </div>


            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }} className="w-full h-full flex gap-5 justify-center items-center  flex-wrap">
              {services.map((el, id) => (
                <Link to={"/specialist"} key={id} className="w-80 h-full flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-blue-600 hover:text-white rounded-xl">
                  <div className="size-65 p-3">
                    <div className="w-20 h-20 flex justify-start items-center">
                      {el.logo}
                    </div>
                    <h1 className="text-xl font-bold mb-3">{el.h}</h1>
                    <p className="text-md font-light mb-3">{el.p}</p>
                    <button className="text-lg font-semibold flex items-center gap-3 transition-all duration-300">
                      Read More <span><ArrowRightToLine /></span>
                    </button>
                  </div>
                </Link>


              ))}
              {/* <p className='font-bold text-lg'>Explore how we can help you land your dream IT job. <span className='text-blue-700 underline'> View Services</span></p> */}
            </motion.div>



          </div>

          <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 my-15">
            {/* Header */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }} className="text-center mb-8">
              <p className=" text-lg max-w-2xl mx-auto uppercase text-blue-700">
                Service-Specific FAQs:
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Land your dream US IT job with our comprehensive suite of services.
              </h2>


            </motion.div>

            {/* Accordion */}
            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }} className="space-y-4">
              {accordionData.map((item, index) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-lg"
                    aria-expanded={openItem === item.id}
                    aria-controls={`accordion-content-${item.id}`}
                  >
                    <span className="text-base sm:text-lg font-semibold text-blue-700 pr-4">
                      {item.title}
                    </span>
                    <div className="flex-shrink-0">
                      {openItem === item.id ? (
                        <ChevronUp className="w-5 h-5 text-blue-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </button>

                  {/* Accordion Content */}
                  <div
                    id={`accordion-content-${item.id}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openItem === item.id
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                      }`}
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Footer */}
            <motion.div
              custom={2.2}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }} className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <Link to={"/contact"} className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Contact Support
              </Link>
            </motion.div>
          </div>

          <Footer />


        </div>
      )}
    </>
  )
}

export default Services