import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Loader({ onComplete }) {
    const [startSlide, setStartSlide] = useState(false);
    const [exitSlide, setExitSlide] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => setStartSlide(true), 2500); // Start slide-in
        const timer2 = setTimeout(() => setExitSlide(true), 4000);  // Start slide-out
        const timer3 = setTimeout(() => setFadeOut(true), 4800);    // Fade out
        const timer4 = setTimeout(() => onComplete(), 5500);        // Remove Loader

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
        };
    }, [onComplete]);

    // Slide animation variants
    const slideVariants = {
        hidden: { x: "-100%" },
        visible: (i) => ({
            x: "0%",
            transition: {
                delay: i * 0.3,
                duration: 0.8,
                ease: "easeInOut",
            },
        }),
        exit: (i) => ({
            x: "100%",
            transition: {
                delay: i * 0.3,
                duration: 0.8,
                ease: "easeInOut",
            },
        }),
    };

    return (
        <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={fadeOut ? { opacity: 0, scale: 0.95 } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-[999] bg-white overflow-hidden flex items-center justify-center flex-col px-4"
        >
            {/* Logo and Spinner */}
            {!startSlide && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="flex flex-col items-center z-10"
                >
                    {/* Responsive Spinner */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 border-[4px] sm:border-[6px] border-blue-200 border-t-blue-600 rounded-full animate-spin shadow-xl mb-4"></div>

                    {/* Responsive Text */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="text-lg sm:text-2xl tracking-widest font-bold text-blue-700 text-center"
                    >
                        The Stack-hawk
                    </motion.p>
                </motion.div>
            )}

            {/* Sliding Panels */}
            {startSlide &&
                [0, 1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        custom={i}
                        variants={slideVariants}
                        initial="hidden"
                        animate={exitSlide ? "exit" : "visible"}
                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 to-blue-400 z-40"
                    />
                ))}
        </motion.div>
    );
}

export default Loader;
