
import { ArrowUp, Instagram, Linkedin, Mail, PhoneCall, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

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

    return (
        <footer className="bg-[#15132c] text-white pt-10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Column 1: Logo + Social */}
                <motion.div
                    custom={0}
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInUp}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    <h1 className="text-2xl font-bold">The BlueOrbit</h1>
                    <p className="text-sm">Your Vision is Our Mission</p>
                    <div className="flex gap-3 pt-2">
                        <button className="p-2 border border-white rounded hover:bg-blue-700 hover:text-white transition">
                            <Instagram size={20} />
                        </button>
                        <button className="p-2 border border-white rounded hover:bg-blue-700 hover:text-white transition">
                            <Linkedin size={20} />
                        </button>
                    </div>
                </motion.div>

                {/* Column 2: Quick Links */}
                <motion.div
                    custom={1}
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInUp}
                    viewport={{ once: true }}
                >
                    <h2 className="text-lg font-bold mb-3 border-b border-gray-500 w-max">Quick Links</h2>
                    <ul className="space-y-2 text-sm flex flex-col ">
                        {/* {["About Us", "Our Services", "Specialist", "Contact Us"].map((link, index) => ( */}
                        <Link to={"/about"} className="hover:underline cursor-pointer text-lg hover:text-blue-700">About Us</Link>
                        <Link to={"/services"} className="hover:underline cursor-pointer text-lg hover:text-blue-700">Our Servicess</Link>
                        <Link to={"/specialist"} className="hover:underline cursor-pointer text-lg hover:text-blue-700">Specialist</Link>
                        <Link to={"/contact"} className="hover:underline cursor-pointer text-lg hover:text-blue-700">Contact US</Link>
                        {/* ))} */}
                    </ul>
                </motion.div>

                {/* Column 3: Contact Info */}
                <motion.div
                    custom={2}
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInUp}
                    viewport={{ once: true }}
                >
                    <h2 className="text-lg font-bold mb-3 border-b border-gray-500 w-max">Contact Us</h2>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2"><MapPin size={16} /> 1309 Coffeen Ave, Suite Sheridan, WY, 82801</li>
                        <li className="flex items-start gap-2"><MapPin size={16} /> 639 Iscon Emporio, Satellite, Ahmedabad-380015</li>
                        <li className="flex items-center gap-2"><PhoneCall size={16} /> +1 307-309-2505</li>
                        <li className="flex items-center gap-2"><Mail size={16} /> info@vision-xperts.com</li>
                    </ul>
                    {/* <button className="mt-5 bg-indigo-600 hover:bg-indigo-700 transition text-white px-6 py-2 rounded font-semibold">
                        Book A Call →
                    </button> */}
                </motion.div>
            </div>

            {/* Bottom Strip */}
            <motion.div
                custom={3}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
                className="bg-blue-600 text-white text-center mt-10 py-10 flex flex-col md:flex-row justify-between items-center px-5 md:px-10 text-sm"
            >
                <p>© All Copyright 2024 by The BlueOrbit </p>
                <div className="space-x-5 mt-2 md:mt-0">
                    <a href="#" className="hover:underline">Terms & Condition</a>
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </div>
            </motion.div>

            {/* Scroll to top */}
            <motion.div
                custom={4}
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
                className="flex justify-center items-start md:items-center md:justify-end absolute md:bottom-17  md:right-1/2 bottom-25 left-40"
            >
                <button
                    onClick={scrollToTop}
                    className="bg-indigo-600 hover:bg-indigo-700 md:p-4 p-3 rounded-full border-4 border-white transition"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={24} />
                </button>
            </motion.div>
        </footer>
    );
};

export default Footer;

