import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import { CircleCheck } from 'lucide-react'
import Loader from '../../components/Loader';

const DataSci = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setLoading(false), 4400);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <>
            {loading ? <Loader /> : (
                <div className='w-full h-full'>
                    <div className='w-full h-full'>

                        {/* Hero Section */}
                        <div
                            className="w-full h-[60vh] md:h-[70vh] bg-cover bg-center relative flex items-center justify-center"
                            style={{ backgroundImage: `url('./about.jpeg')` }}
                        >
                            <div className="absolute inset-0 bg-blue-900 opacity-60 z-0"></div>
                            <div className="relative z-10 text-white flex flex-col gap-4 items-center text-center px-4">
                                <h1 className="text-3xl md:text-5xl font-bold capitalize">Demanded IT role</h1>
                                <div className="flex items-center gap-2 font-semibold text-lg">
                                    <span>Data Scientist</span>
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="w-full px-4 md:px-20 my-10 md:my-20 relative">
                            <img src="/images/ds.jpeg" alt="Data Scientist" className='w-full h-[40vh] md:h-[90vh] object-cover rounded-md' />

                            {/* Main Content */}
                            <div className="md:w-2/3 space-y-5 mt-7 text-left">
                                <h1 className='text-2xl md:text-3xl font-bold'>Data Scientist Jobs</h1>
                                <p className='font-light'>
                                    Data Scientists are key players in unlocking insights from complex data sets. Opportunities abound nationwide, with companies seeking experts to drive their data-driven strategies.
                                </p>

                                <h1 className='text-2xl md:text-3xl font-bold'>Key Data Scientist Skills</h1>
                                <p className='font-light'>
                                    Our expertise in placing top Data Scientists across the United States is unmatched.
                                    Companies are actively seeking candidates who possess:
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {[
                                        "Proficiency in machine learning",
                                        "Proficiency in Python or R",
                                        "Cloud architecture design",
                                        "Mastery in data visualization tools",
                                        "Advanced data analysis skills",
                                        "Knowledge of big data tools"
                                    ].map((skill, i) => (
                                        <span key={i} className='flex gap-2 items-center text-sm md:text-base'>
                                            <CircleCheck className='text-blue-700' />
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* Stats Box */}
                                <div className="bg-white shadow-md p-6 w-full sm:w-80 border-t-4 border-blue-700 mt-10 sm:absolute sm:top-0 sm:right-0 sm:translate-y-[20%]">
                                    <div className="space-y-4 mt-2 text-sm sm:text-base">
                                        <div className="flex justify-between">
                                            <span className="font-semibold">Total Vacancies:</span>
                                            <span>9000+</span>
                                        </div>
                                        <hr />
                                        <div className="flex justify-between">
                                            <span className="font-semibold">Successful Placements:</span>
                                            <span>24+</span>
                                        </div>
                                        <hr />
                                        <div className="flex justify-between">
                                            <span className="font-semibold">Salary Range:</span>
                                            <span>$60 - $100 <span className="text-sm">/hr</span></span>
                                        </div>
                                        <hr />
                                        <div className="flex justify-between">
                                            <span className="font-semibold">Highest Vacancies In:</span>
                                            <span>Chicago, Dallas</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Section */}
                            <div className="mt-16">
                                <h1 className='text-2xl md:text-3xl font-bold'>The Path Ahead</h1>
                                <p className='font-light mt-2'>
                                    Our expertise in placing top Full Stack Developers across the United States is unmatched.
                                    We continuously strive to enhance our services by integrating new technologies and methodologies.
                                    Our goal is to ensure that both our clients and our candidates achieve their objectives through a seamless and rewarding placement process.
                                </p>
                            </div>
                        </div>

                        <Footer />
                    </div>
                </div>
            )}
        </>
    )
}

export default DataSci
