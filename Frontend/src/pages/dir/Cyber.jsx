import { ChevronRight, CircleCheck } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Loader from '../../components/Loader';

const Cyber = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setLoading(false), 4400);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <>
            {loading ? <Loader /> : (
                <div className="w-full h-full">
                    {/* Hero Section */}
                    <div
                        className="w-full h-[50vh] md:h-[70vh] bg-cover bg-center relative flex items-center justify-center"
                        style={{ backgroundImage: `url('./about.jpeg')` }}
                    >
                        <div className="absolute inset-0 bg-blue-900 opacity-60 z-0"></div>
                        <div className="relative z-10 text-white flex flex-col gap-2 md:gap-4 items-center text-center px-4">
                            <h1 className="text-3xl md:text-5xl font-bold capitalize">Demanded IT role</h1>
                            <div className="flex items-center gap-2 font-semibold text-lg">
                                <span>Devops
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="w-full px-4 md:px-40  py-10 relative">
                        <img src="/images/cs.jpeg" alt="about" className="w-full h-[90vh] object-cover rounded-md" />

                        <div className="md:w-2/3 w-full space-y-5 mt-7">
                            <h1 className="text-2xl md:text-3xl font-bold">Cyber Security Jobs
                            </h1>
                            <p className="font-light text-justify">
                                The demand for Cyber Security professionals is skyrocketing as companies prioritize safeguarding their digital assets. From major cities to smaller tech hubs, there are numerous opportunities for experts in this critical field.


                            </p>

                            <h1 className="text-2xl md:text-3xl font-bold">Key Cyber Security Skills
                            </h1>
                            <p className="font-light">
                                Our expertise in placing top Cyber Security professionals across the United States is unmatched.

                                Companies are actively seeking candidates who possess:
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
                                {[
                                    "Expertise in network security",
                                    "Advanced encryption protocols",
                                    "Proficiency in threat detection",
                                    "Knowledge of compliance standards",
                                    "Skills with firewalls and VPNs",
                                    "Incident response capabilities",
                                ].map((skill, index) => (
                                    <span key={index} className="flex gap-2 items-center">
                                        <CircleCheck className="text-blue-700" />
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {/* Vacancy Info Box */}
                            <div className="bg-white shadow-md p-6 w-full md:w-80 border-t-4 border-blue-700 rounded-md mt-10 md:absolute md:top-130 md:right-50">
                                <div className="space-y-4">
                                    <div className="flex justify-between">
                                        <span className="font-semibold">Total Vacancies:</span>
                                        <span>13,490+</span>
                                    </div>
                                    <hr />
                                    <div className="flex justify-between">
                                        <span className="font-semibold">Successful Placements:</span>
                                        <span>67+</span>
                                    </div>
                                    <hr />
                                    <div className="flex justify-between">
                                        <span className="font-semibold">Salary Range:</span>
                                        <span>$60 - $100 <span className="text-sm">/hr</span></span>
                                    </div>
                                    <hr />
                                    <div className="flex justify-between">
                                        <span className="font-semibold">Highest Vacancies In:</span>
                                        <span> Austin, New York
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Section */}
                        <div className="mt-10 md:mt-20">
                            <h1 className="text-2xl md:text-3xl font-bold">The Path Ahead</h1>
                            <p className="font-light mt-2 text-justify">
                                Our expertise in placing top Full Stack Developers across the United States is unmatched. We continuously strive to enhance our services by integrating new technologies and methodologies. Our goal is to ensure that both our clients and our candidates achieve their objectives through a seamless and rewarding placement process.
                            </p>
                        </div>
                    </div>

                    <Footer />
                </div>)}
        </>
    )
}

export default Cyber
