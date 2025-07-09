import React, { useState } from 'react';
import { ChevronDown, Facebook, FacebookIcon, Instagram, Linkedin, Menu, Twitter, X, Youtube, } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [showMobileDemanded, setShowMobileDemanded] = useState(false);
    const [showMobileServices, setShowMobileServices] = useState(false);


    return (
        <nav className="bg-white text-black md:px-20 px-7 fixed w-full  top-0 z-50 shadow-2xl">
            <div className="flex items-center justify-between ">
                <Link to={"/"} className="w-20">
                    <img src="./logo.png" alt="" className='md:w-full w-20 ' />
                </Link>

                {/* Desktop nav */}
                <ul className="hidden md:flex space-x-10 items-center text-lg font-semibold">
                    <Link to={"/"} className="cursor-pointer capitalize  hover:text-blue-700">Home</Link>
                    <Link to={"/about"} className="cursor-pointer capitalize  hover:text-blue-700">About</Link>
                    <Link to={"/services"} className="cursor-pointer capitalize  hover:text-blue-700">services</Link>
                    <Link to={"/specialist"} className="relative group cursor-pointer  hover:text-blue-700">
                        <span className="flex justify-center items-center gap-2"> Specialist <ChevronDown /></span>
                        <ul className="absolute left-0 mt-2 w-64 bg-white text-black rounded-md shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-1 z-10 text-md">
                            <li className="px-4 py-2 hover:bg-blue-700 hover:text-white capitalize">resume revamp</li>
                            <li className="px-4 py-2 hover:bg-blue-700 hover:text-white capitalize">profile optimazation</li>
                            <li className="px-4 py-2 hover:bg-blue-700 hover:text-white capitalize">job application </li>
                            <li className="px-4 py-2 hover:bg-blue-700 hover:text-white capitalize">interrview preparation </li>
                            <li className="px-4 py-2 hover:bg-blue-700 hover:text-white capitalize">Salary negotiation </li>
                            <li className="px-4 py-2 hover:bg-blue-700 hover:text-white capitalize">on boarding assistance </li>
                            <li className="px-4 py-2 hover:bg-blue-700 hover:text-white capitalize">job support </li>
                            <li className="px-4 py-2 hover:bg-blue-700 hover:text-white capitalize">Imigration advisory </li>
                        </ul>
                    </Link>
                    <Link to={"/dir"} className="relative group cursor-pointer  hover:text-blue-700">
                        <span className="flex  justify-center items-center gap-2">Demanded IT Roles <ChevronDown /></span>
                        <ul className="absolute flex flex-col left-0 mt-2 w-64 bg-white text-black rounded-md shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-1 z-10 text-md">
                            <Link to={"/dir"} className="px-4 py-2 hover:bg-blue-700 hover:text-white capitalize">FullStack Developer</Link>
                            <Link to={"/se"} className="px-4 py-2 hover:bg-blue-700 hover:text-white capitalize">Software engineer</Link>
                            <Link to={"/da"} className="px-4 py-2 hover:bg-blue-700 hover:text-white capitalize">data analyst </Link>
                            <Link to={"/ba"} className="px-4 py-2 hover:bg-blue-700 hover:text-white capitalize">bussiness analyst </Link>
                            <Link to={"/ce"} className="px-4 py-2 hover:bg-blue-700 hover:text-white capitalize">cloud enginner </Link>
                            <Link to={"/ds"} className="px-4 py-2 hover:bg-blue-700 hover:text-white capitalize">data scientist </Link>
                            <Link to={"/sd"} className="px-4 py-2 hover:bg-blue-700 hover:text-white capitalize">softwaare developer </Link>
                            <Link to={"/jd"} className="px-4 py-2 hover:bg-blue-700 hover:text-white capitalize">java developer </Link>
                            <Link to={"/pd"} className="px-4 py-2 hover:bg-blue-700 hover:text-white capitalize">python developer </Link>
                            <Link to={"/do"} className="px-4 py-2 hover:bg-blue-700 hover:text-white capitalize">dev ops </Link>
                            <Link to={"/cs"} className="px-4 py-2 hover:bg-blue-700 hover:text-white capitalize">cyber security </Link>
                        </ul>
                    </Link>

                    <Link to={"/contact"} className="cursor-pointer  hover:text-blue-700 capitalize">Contact Us</Link>
                </ul>

                {/* Mobile menu button */}
                <div className="md:hidden ">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <Menu size={28} />
                    </button>
                </div>
            </div>

            {/* Framer Motion Animated Mobile Menu */}


            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        key="mobileMenu"
                        initial={{ x: '100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '100%', opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="fixed top-0 right-0 h-full w-72 bg-white text-black shadow-2xl px-6 py-6 z-50 overflow-y-auto rounded-l-xl"
                    >
                        <button
                            className="hover:bg-blue-700 p-1 rounded-full hover:text-white absolute right-4 top-4"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <X size={28} />
                        </button>

                        <ul className="flex flex-col space-y-4 text-lg mt-12 font-medium ">
                            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:bg-blue-500 hover:text-white rounded p-2">
                                Home
                            </Link>
                            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:bg-blue-500 hover:text-white rounded p-2">
                                About
                            </Link>

                            {/* Toggle Services */}
                            <button
                                onClick={() => setShowMobileServices(!showMobileServices)}
                                className="text-left hover:bg-blue-500 hover:text-white p-2 rounded w-full"
                            >
                                Services
                            </button>
                            {showMobileServices && (
                                <div className="pl-4 text-sm space-y-1">
                                    <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="block px-2 py-1 hover:bg-blue-50 rounded">
                                        All Services
                                    </Link>
                                    <Link to="/specialist" onClick={() => setIsMobileMenuOpen(false)} className="block px-2 py-1 hover:bg-blue-50 rounded">
                                        Specialist
                                    </Link>
                                </div>
                            )}

                            {/* Toggle Demanded IT Roles */}
                            <button
                                onClick={() => setShowMobileDemanded(!showMobileDemanded)}
                                className="text-left hover:bg-blue-500 hover:text-white p-2 rounded w-full"
                            >
                                Demanded IT Roles
                            </button>
                            {showMobileDemanded && (
                                <div className="pl-4 text-sm space-y-1">
                                    {[
                                        ["FullStack Developer", "/dir"],
                                        ["Software Engineer", "/se"],
                                        ["Data Analyst", "/da"],
                                        ["Business Analyst", "/ba"],
                                        ["Cloud Engineer", "/ce"],
                                        ["Data Scientist", "/ds"],
                                        ["Software Developer", "/sd"],
                                        ["Java Developer", "/jd"],
                                        ["Python Developer", "/pd"],
                                        ["DevOps", "/do"],
                                        ["Cyber Security", "/cs"]
                                    ].map(([label, path]) => (
                                        <Link
                                            key={label}
                                            to={path}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block hover:bg-blue-50 px-2 py-1 rounded"
                                        >
                                            {label}
                                        </Link>
                                    ))}
                                </div>
                            )}

                            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:bg-blue-500 hover:text-white rounded p-2">
                                Contact Us
                            </Link>

                            <div className="flex justify-between items-start    pt-6">

                                <a href="https://www.instagram.com/stakehawksolutions?igsh=MTN1c2d1N3lvMHI2bg%3D%3D&utm_source=qr"
                                    target="_blank"
                                     className="hover:bg-blue-700 p-2 rounded-full hover:text-white">
                                    <Instagram size={25} />
                                </a>
                                <a href="https://www.instagram.com/stakehawksolutions?igsh=MTN1c2d1N3lvMHI2bg%3D%3D&utm_source=qr"
                                    target="_blank"
                                     className="hover:bg-blue-700 p-2 rounded-full hover:text-white">
                                    <Linkedin size={25} />
                                </a>
                                <a href="https://www.instagram.com/stakehawksolutions?igsh=MTN1c2d1N3lvMHI2bg%3D%3D&utm_source=qr"
                                    target="_blank"
                                     className="hover:bg-blue-700 p-2 rounded-full hover:text-white">
                                    <Youtube size={25} />
                                </a>

                            </div>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* </AnimatePresence> */}

        </nav>
    );
};

export default Header;
