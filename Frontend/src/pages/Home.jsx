import { ArrowBigRightIcon, ArrowRightToLine, BoomBox, BrainCircuit, BrainCog, Dock, File, HandCoins, Handshake, HeartHandshake, PencilRuler, Shield, Speech, SquareMousePointer, ToggleRight, User, ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import "../App.css"
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';


const Home = () => {

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
        ease: 'easeOut'
      }
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

  const slides = [
    {
      id: 1,
      title: "Fullstack Developer",
      content: "This is the first slide content",
      bg: './dev.jpeg'
    },
    {
      id: 2,
      title: "Bussiness Analyst",
      content: "This is the second slide content",
      bg: "./ba.jpeg"
    },
    {
      id: 3,
      title: "Data Analyst",
      content: "This is the third slide content",
      bg: "./da.jpeg"
    },
    {
      id: 4,
      title: "Software Engineer",
      content: "This is the fourth slide content",
      bg: "./sd.jpeg"
    },
    {
      id: 5,
      title: "Software Developer",
      content: "This is the fourth slide content",
      bg: "./sd.jpeg"
    },
    {
      id: 6,
      title: "Java Developer",
      content: "This is the fourth slide content",
      bg: "./dev.jpeg"
    },
    {
      id: 7,
      title: "Python Developer",
      content: "This is the fourth slide content",
      bg: "./pd.jpeg"
    },
    {
      id: 8,
      title: "Cyber Security",
      content: "This is the fourth slide content",
      bg: "./cs.jpeg"
    },
    {
      id: 9,
      title: "DeveOps",
      content: "This is the fourth slide content",
      bg: "./do.jpeg"
    },
    {
      id: 10,
      title: "Cloud Engineering",
      content: "This is the fourth slide content",
      bg: "./do.jpeg"
    },
    {
      id: 11,
      title: "Data Scientist",
      content: "This is the fourth slide content",
      bg: "./ds.jpeg"
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 1700);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };


  const teamMembers = [
    {
      id: 1,
      role: "Founder & Managing Director",
      name: "Parth Raval",
      description1: "Pioneering excellence, guiding strategic vision.",
      description2: "Empowering through innovation, driving success."
    },
    {
      id: 2,


      role: "MM",
      name: "Harshil Pethani",
      description1: "Guiding growth, delivering exceptional results.",
      description2: "Leading operations, ensuring business excellence."
    },
    {
      id: 3,
      role: "Co-founder",
      name: "Mohil Vaghasiya, Vivek Gajera",
      description1: "Empowering teams, crafting business success.",
      description2: "Inspiring excellence, fostering team empowerment.",
    }
  ];


  const [openItem, setOpenItem] = useState(null);

  const accordionData = [
    {
      id: 1,
      title: "What are the benefits of using The Stake-hawk for my us it job Search?",
      content: "The Stake-hawk offers a comprehensive suite of services designed to optimize your job search and maximize your success. We provide everything from resume and interview prep to strategic job application and immigration guidance (if applicable). Our dedicated team of experts will help you stand out from the crowd and land your dream IT job in the USA."
    },
    {
      id: 2,
      title: "what types of It jobs do you help candidates to find?",
      content: "We work with a wide range of IT companies and specialize in placing candidates in various positions. From software engineering and data analysis to cybersecurity and cloud architecture, our network reaches across diverse IT fields. Tell us about your skills and experience, and we'll connect you with the perfect opportunity."
    },
    {
      id: 3,
      title: "Do you offer any guarantees with your services",
      content: "We are confident in the effectiveness of our services. Depending on the plan you choose, some plans offer a service guarantee (details outlined in our Service Agreement). This demonstrates our commitment to your success. Additionally, we offer ongoing support throughout your first year on the job (optional depending on plan)."
    },
    {
      id: 4,
      title: "what are the cost associated with your services",
      content: "We offer flexible service plans to cater to various budgets and needs. Each plan includes a core set of services, with additional benefits offered in premium options. You can find detailed information on pricing and plan features on our website or by contacting us directly."
    },
    // {
    //   id: 5,
    //   title: "What payment methods do you accept?",
    //   content: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, Google Pay, and bank transfers. All payments are processed securely through encrypted connections. We do not store your payment information on our servers for your security and privacy."
    // }
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

  const toggleAll = () => {
    // Since only one item can be open at a time, this will either open the first item or close all
    if (openItem !== null) {
      setOpenItem(null);
    } else {
      setOpenItem(accordionData[0].id);
    }
  };


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 4400);
    return () => clearTimeout(timeout);
  }, []);


  return (

    <>
      {loading ? <Loader /> : (
        <div div className='w-full h-screen mt-20 ' >
          <div
            className="w-full h-full md:flex overflow-auto hide-scrollbar " style={{
              background: `url("/blue.jpeg") center/cover no-repeat`
            }}>
            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }} className="md:h-full  md:w-2/3 w-full md:p-30 p-10 flex flex-col justify-center md:items-start items-center gap-7 ">
              <p className="text-xl font-semibold mb-2 md:text-blue-700 text-white"><span className='flex items-center gap-3'><ToggleRight size={30} />USA Top IT Job Provider</span></p>
              <span className="md:text-6xl text-3xl font-bold  mb-4 text-center md:text-start">Transforming Your Vision into Our Mission.</span>
              <p className=" text-lg  md:font-medium font-extralight text-center md:text-start">Shine in the IT Job Market. Get expert advice, full services, and personalized
                support to make your mark in the IT industry.</p>
            </motion.div>

            <motion.div
              custom={3}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              className="md:h-full md:w-1/3 flex justify-center items-center "
              style={{ backgroundImage: `url()` }}
            >
              <img src="/hero1.png" alt="Hero" className="h-full object-contain" />
            </motion.div>

          </div>

          <div className=" w-full overflow-hidden bg-blue-700 py-4 mt-5">
            <div className="flex gap-5 text-white text-2xl font-semibold animate-[scroll_20s_linear_infinite] whitespace-nowrap">
              {items.concat(items).map((item, index) => (
                <span key={index} className="px-4">
                  {item}
                </span>
              ))}
            </div>
          </div>


          <div
            className="w-full  p-7 md:my-20">
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              className="w-full h-full flex flex-col justify-center items-center gap-7">
              <p className='text-xl text-blue-700 font-semibold'>ABOUT The Stake-hawk</p>
              <p className='text-4xl font-bold '>Secure your dream IT job in the USA with <span className='text-blue-700'>The Stake-hawk</span></p>
              <p className='text-lg font-light'>Elevate your profile and land your dream IT role with our comprehensive services with The Stake-hawk</p>
            </motion.div>

            <motion.div
              custom={1.3}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }} className="w-full mt-5 h-full p-2 flex flex-col justify-center items-center gap-4">
              {/* Card 1 */}
              <div className="w-full max-w-3xl flex flex-col md:flex-row items-center md:gap-7 gap-3 bg-slate-300 md:p-5 p-3 rounded-lg shadow">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-700 rounded-full flex items-center justify-center p-2 md:p-3">
                  <img src="icon1.png" alt="" className="object-cover w-full h-full" />
                </div>
                <div className="flex flex-col justify-center text-center md:text-left">
                  <h2 className="font-bold text-xl md:text-2xl">Strategic Job Matching</h2>
                  <p className="text-base md:text-lg">We strategically apply to over 100+ relevant positions at leading companies</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="w-full  max-w-3xl flex flex-col md:flex-row items-center md:gap-7 gap-3 bg-slate-300 md:p-5 p-3 rounded-lg shadow">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-500 rounded-full flex items-center justify-center p-2 md:p-3">
                  <img src="icon1.png" alt="" className="object-cover w-full h-full" />
                </div>
                <div className="flex flex-col justify-center text-center md:text-left">
                  <h2 className="font-bold text-xl md:text-2xl">Expert Interview Coaching
                  </h2>
                  <p className="text-base md:text-lg">We provide personalized coaching on common interview questions and strategies.

                  </p>
                </div>
              </div>
            </motion.div>


            <motion.div
              custom={3}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }} className="w-full h-full flex  justify-center items-center mt-3 md:space-x-36 space-x-16">
              <button className="relative overflow-hidden px-6 py-3  bg-blue-600 text-white font-semibold rounded-lg group">
                {/* Top block: slides LEFT */}
                <span className="absolute top-0 left-0 w-full h-1/2 bg-black opacity-0 transform translate-x-0 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-x-full" />

                {/* Bottom block: slides RIGHT */}
                <span className="absolute bottom-0 left-0 w-full h-1/2 bg-black opacity-0 transform translate-x-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-full " />

                {/* Button Text */}
                <Link to={"/about"} className="">Explore More</Link>
              </button>
              <div className="flex gap-3 justify-center items-center">
                <div className="w-15  bg-gray-900 rounded-full">
                  <img src="/founder.jpeg" alt="" className='w-full object-cover ' />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <h1 className='text-lg font-semibold'>Parth Raval</h1>
                  <p className='text-gray-600 font-light'>Founder</p>
                </div>
              </div>

            </motion.div>

          </div>

          <div className="w-full h-full flex justify-center items-center flex-col gap-10 px-4 py-10">
            <h1 className="text-xl md:text-2xl font-bold text-center">PLACED OUR CANDIDATE IN</h1>

            <div className="w-full max-w-6xl flex justify-center md:justify-around flex-wrap gap-5">
              {[
                './amazon.jpeg',
                './flipkart.jpeg',
                './intel.jpeg',
                './micro.jpeg',
                './nestle.jpeg',
                './coc.jpeg',
              ].map((src, index) => (
                <div key={index} className="w-36 h-36 sm:w-48 sm:h-48 md:size-60 shadow-xl">
                  <img
                    src={src}
                    alt={`company-${index}`}
                    className="object-contain w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>



          <div className="w-full flex flex-col p-10 gap-5 md:mt-20">


            <p className='text-xl font-semibold text-blue-700 '>OUR SERVICES</p>
            <h1 className='text-4xl font-bold'>Your Complete US IT
              Job Search Toolkit</h1>


            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }} className="w-full h-full flex gap-5 justify-center items-center  flex-wrap">
              {services.map((el, id) => (
                <Link to={"/services"} className="w-80 h-full flex justify-center items-center transition-all duration-300 ease-in-out hover:bg-blue-600 hover:text-white rounded-xl">
                  <div key={id} className="size-65 p-3">
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
              <p className='font-bold text-lg'>Explore how we can help you land your dream IT job. <Link to={"/services"} className='text-blue-700 underline'> View Services</Link></p>
            </motion.div>



          </div>


          <div className="w-full h-full flex justify-center items-center md:my-10 mt-60 px-4 md:px-0">
            <div className="max-w-7xl w-full bg-blue-700 p-10 md:p-20 text-white space-y-10">
              <motion.div
                custom={1}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }} className="w-full md:w-1/2 p-5 capitalize space-y-3">
                <h2 className="uppercase text-xl font-semibold">achievement</h2>
                <p className="text-3xl md:text-4xl font-bold">
                  Empowering IT Professionals for Career Success
                </p>
              </motion.div>

              <div className="w-full flex flex-col md:flex-row md:justify-between md:flex-wrap gap-6">
                {/* Each box */}
                <motion.div
                  custom={2}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInUp}
                  viewport={{ once: true }} className="w-full sm:w-60 h-50 text-white flex flex-col justify-start items-center gap-3 mx-auto md:mx-0">
                  <span><Handshake size={70} /></span>
                  <h1 className="text-5xl font-bold">430+</h1>
                  <p className="text-xl font-semibold">Placed Candidate</p>
                </motion.div>
                <motion.div
                  custom={2.4}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInUp}
                  viewport={{ once: true }} className="w-full sm:w-60 h-50 text-white flex flex-col justify-start items-center gap-3 mx-auto md:mx-0">
                  <span><BrainCircuit size={70} /></span>
                  <h1 className="text-5xl font-bold">80%</h1>
                  <p className="text-xl font-semibold capitalize">job efficiency</p>
                </motion.div>
                <motion.div
                  custom={2.5}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInUp}
                  viewport={{ once: true }} className="w-full sm:w-60 h-50 text-white flex flex-col justify-start items-center gap-3 mx-auto md:mx-0">
                  <span><Shield size={70} /></span>
                  <h1 className="text-5xl font-bold">220+</h1>
                  <p className="text-xl font-semibold capitalize">partner Company</p>
                </motion.div>
                <motion.div
                  custom={2.6}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeInUp}
                  viewport={{ once: true }} className="w-full sm:w-60 h-50 text-white flex flex-col justify-start items-center gap-3 mx-auto md:mx-0">
                  <span><BoomBox size={70} /></span>
                  <h1 className="text-5xl font-bold">570+</h1>
                  <p className="text-xl font-semibold capitalize">Project Completed</p>
                </motion.div>
              </div>
            </div>
          </div>


          <div className="w-full md:my-20 mt-70">
            <h1 className='md:text-5xl text-4xl font-bold md:text-center text-start px-5'>High Demand IT Jobs in the USA</h1>
            <div className="w-full">
              <div className="max-w-6xl mx-auto p-6">
                <div className="relative overflow-hidden rounded-lg shadow-lg h-96">
                  {/* Slides Container */}
                  <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {slides.map((slide, index) => (
                      <div
                        key={slide.id}
                        className={`min-w-full h-full flex items-center justify-center `}
                        style={{
                          backgroundImage: `url(${slide.bg})`, backgroundRepeat: 'no-repeat',
                          backgroundSize: 'cover', // optional, makes the image cover the entire div
                          backgroundPosition: 'center', // optional, centers the imag   
                        }}
                      >

                        <div className="text-center w-1/2 h-full  text-black px-8 py-3 flex flex-col justify-end">
                          <div className="bg-white text-blue-700 flex justify-center items-center">
                            <h2 className="text-4xl font-bold mb-4 ">{slide.title}</h2>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center mt-6 space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                        ? 'bg-blue-600 scale-125'
                        : 'bg-gray-400 hover:bg-gray-600'
                        }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Slide Counter */}
                <div className="text-center mt-4 text-gray-600">
                  {currentSlide + 1} / {slides.length}
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto p-6">
            {/* Header Section */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }} className="bg-gradient-to-r from-blue-600 to-blue-900 rounded-t-lg p-6 relative overflow-hidden">
              {/* Header Badge */}
              <div className="inline-block bg-blue-500 px-4 py-1 rounded mb-4">
                <span className="text-white text-sm font-medium tracking-wide">EXPERT PEOPLE</span>
              </div>

              {/* Main Title */}
              <h1 className="text-white text-4xl font-bold mb-2">The Minds Behind The Stake-hawk</h1>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-10 rounded-full transform translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-blue-400 opacity-10 rounded-full transform translate-y-24"></div>
            </motion.div>

            {/* Table */}
            <div className="bg-white rounded-b-lg shadow-2xl overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="bg-blue-50 border-b-2 border-blue-200">
                    <th className="text-left py-4 px-4 sm:px-6 text-blue-800 font-semibold text-base sm:text-lg">Role</th>
                    <th className="text-left py-4 px-4 sm:px-6 text-blue-800 font-semibold text-base sm:text-lg">Name</th>
                    <th className="text-left py-4 px-4 sm:px-6 text-blue-800 font-semibold text-base sm:text-lg">Expertise & Vision</th>
                  </tr>
                </thead>
                <tbody>
                  {teamMembers.map((member, index) => (
                    <tr
                      key={member.id}
                      className={`border-b border-gray-200 hover:bg-blue-50 transition-colors duration-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                    >
                      <td className="py-4 px-4 sm:px-6">
                        <motion.div
                          custom={2}
                          initial="hidden"
                          whileInView="visible"
                          variants={fadeInUp}
                          viewport={{ once: true }}
                          className="flex items-center"
                        >
                          <div className="w-2 h-10 bg-blue-600 rounded-full mr-3 sm:mr-4"></div>
                          <span className="text-blue-600 font-medium text-sm sm:text-base">{member.role}</span>
                        </motion.div>
                      </td>
                      <td className="py-4 px-4 sm:px-6">
                        <motion.div
                          custom={2.3}
                          initial="hidden"
                          whileInView="visible"
                          variants={fadeInUp}
                          viewport={{ once: true }}
                          className="text-gray-900 font-bold text-base sm:text-xl"
                        >
                          {member.name}
                        </motion.div>
                      </td>
                      <td className="py-4 px-4 sm:px-6">
                        <motion.div
                          custom={2.4}
                          initial="hidden"
                          whileInView="visible"
                          variants={fadeInUp}
                          viewport={{ once: true }}
                          className="space-y-2"
                        >
                          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{member.description1}</p>
                          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{member.description2}</p>
                        </motion.div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>


            {/* Footer Stats */}
            {/* <div className="mt-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-4">
          <div className="flex justify-center items-center text-white">
            <div className="text-center">
              <span className="text-2xl font-bold">{teamMembers.length}</span>
              <span className="text-blue-200 ml-2">Expert Leaders</span>
            </div>
          </div>
        </div> */}
          </div>

          <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 my-15">
            {/* Header */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }} className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Keep Your Business Safe &
                Ensure High Availability
              </p>

              {/* Toggle All Button */}
              {/* <button
            onClick={toggleAll}
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
          >
            {openItem !== null ? 'Collapse All' : 'Open First'}
          </button> */}
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
              <Link to="/contact" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Contact Support
              </Link>
            </motion.div>
          </div>

          <Footer />

        </div >
      )}
    </>

  );
};

export default Home;
