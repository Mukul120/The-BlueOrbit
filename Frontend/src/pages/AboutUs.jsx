import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

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

const members = [
  {
    img: "./mn.jpeg",
    name: "Parth Raval",
    role: "Founder"
  },
  {
    img: "./mn.jpeg",
    name: "Parth Raval",
    role: "Founder"
  },
]


const AboutUs = () => {


  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 1700);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 4400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? <Loader /> : (
        <div className="w-full h-screen bg-white mt-20">
          {/* Hero Section */}
          <div
            className="w-full h-[70vh] bg-cover bg-center relative flex items-center justify-center"
            style={{ backgroundImage: `url('./about.jpeg')` }}
          >
            <div className="absolute inset-0 bg-blue-900 opacity-60 z-0"></div>
            <div className="relative z-10 text-white flex flex-col gap-4 items-center text-center">
              <h1 className="text-4xl md:text-5xl font-bold capitalize">About Us</h1>
              <div className="flex items-center gap-2 font-semibold text-lg">
                <span>Home</span>
                <ChevronRight />
                <span>About Us</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full flex flex-col lg:flex-row items-center px-4  md:px-20 py-10 gap-10 mt-20">
            {/* Left Section - Images */}
            <div className="w-full lg:w-1/2 relative flex flex-col items-center">
              <img src="./about.jpeg" alt="Main" className="w-full rounded-xl object-cover shadow-lg" />
              <img
                src="./ds.jpeg"
                alt="Overlay"
                className="absolute bottom-5 right-5 w-48 md:w-64 border-4 border-white rounded-xl shadow-xl"
              />
            </div>

            {/* Right Section - Text & Cards */}
            <div className="w-full lg:w-1/2 space-y-8">
              <motion.div
                custom={1}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                <p className="text-blue-700 font-semibold text-xl">ABOUT THE BLUEORBIT</p>
                <h2 className="text-3xl md:text-4xl font-bold leading-snug mt-2">
                  Secure your dream IT job in the USA with <span className="text-blue-700">The BlueOrbit</span>
                </h2>
                <p className="text-gray-700 text-base mt-3">
                  Elevate your profile and land your dream IT role with our comprehensive services at The BlueOrbit.
                </p>
              </motion.div>

              {/* Cards */}
              <motion.div
                custom={1.5}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6"
              >
                {[1, 2].map((_, i) => (
                  <div
                    key={i}
                    className="flex flex-col md:flex-row items-center gap-4 bg-slate-100 p-5 rounded-lg shadow w-full"
                  >
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center p-2">
                      <img src="icon1.png" alt="Icon" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="font-bold text-xl">Strategic Job Matching</h3>
                      <p className="text-sm text-gray-700">
                        We strategically apply to over 100+ relevant positions at leading companies.
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Button + Founder */}
              <motion.div
                custom={2}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center  justify-between mt-5 gap-6 px-20"
              >
                <button className="relative overflow-hidden px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg group">
                  {/* Top block */}
                  <span className="absolute top-0 left-0 w-full h-1/2 bg-black opacity-0 transform translate-x-0 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-x-full" />
                  {/* Bottom block */}
                  <span className="absolute bottom-0 left-0 w-full h-1/2 bg-black opacity-0 transform translate-x-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-full" />
                  <span className="relative z-10">Explore More</span>
                </button>

                {/* Founder */}
                <div className="flex items-center  gap-3">
                  <div className="w-14 h-14  rounded-full ">
                    <img src="./mn.jpeg" alt="Founder" className="w-full h-full object-cover object-top border rounded-full p-1" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Parth Raval</h4>
                    <p className="text-sm text-gray-600">Founder</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="w-full md:my-27 mt-10">
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

          <div className="w-full mb-10 ">
            <div className="w-full flex flex-col px-20 gap-5">
              <span className='uppercase text-blue-700'>team member</span>
              <span className='uppercase md:text-4xl text-2xl font-bold '>The Minds Behind The BlueOrbit</span>
            </div>
            <div className="w-full h-full   flex justify-evenly  items-center gap-5 px-10">
              {members.map((el, id) => (
                <div className="w-sm h-[60vh] bg-blue-500 space-x-10 relative  shadow-2xl">
                  <div className="w-full h-full">
                    <img src={el.img} alt="" className=' object-cover object-top w-full h-full' />
                  </div>
                  <div className="w-full bg-indigo-800 text-center text-white absolute bottom-0 right-0">
                    <h1 className='text-xl font-bold'>{el.name}</h1>
                    <span className='text-lg font-light'>{el.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Footer />

        </div>
      )}

    </>

  );
};

export default AboutUs;
