import { useState } from "react";
import ListDiv from "./ListDiv.jsx";
import { motion } from "framer-motion";

export default function ProjectDescription({ items, title = "Description" }) {
    const [isOpen, setIsOpen] = useState(false);

    const dropdownVariants = {
        hidden: {
            height: 0,
            opacity: 1,
            transition: { ease: "easeInOut", duration: 0.25 }
        },
        visible: {
            height: "auto",
            opacity: 1,
            transition: { ease: "easeInOut", duration: 0.2 }
        }
    };

    return (
        <div className='w-full px-5 py-8 max-lg:px-2 max-lg:py-3
                        lg:flex-1 lg:min-h-0 lg:overflow-y-auto'>
            <div className={`hover:bg-black rounded-xl
                            ${isOpen ? 'bg-gray-800' : ''}`}>
                <button
                    type='button'
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-expanded={isOpen}
                    className='lg:hidden w-full flex justify-between items-center
                                glass rounded-xl px-4 py-3
                                text-white uppercase tracking-tight font-semibold text-sm'
                >
                    <span>{title}</span>
                    <svg
                        className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        fill='none' stroke='currentColor' viewBox='0 0 24 24'
                    >
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                    </svg>
                </button>
            </div>

            <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
                className="overflow-hidden lg:overflow-visible lg:flex flex-col gap-2 mt-3 lg:mt-0 lg:!h-auto lg:!opacity-100"
            >
                <div className="flex flex-col gap-2 max-lg:pt-1">
                    {items.map((item) => (
                        <ListDiv key={item}>{item}</ListDiv>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}