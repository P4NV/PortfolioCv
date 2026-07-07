import Background from "../UI_Components/Background.jsx";
import PageTransition from "../UI_Components/PageTransition.jsx";
import BackButton from "../UI_Components/BackButton.jsx";
import ProjectDescription from "../UI_Components/ProjectDescription.jsx";
import { useState } from "react";
// 1. Import motion and AnimatePresence
import { motion, AnimatePresence } from "framer-motion";

function ProjectsPage() {
    const project1Images = ["/ivas1.png", "/ivas2.png", "/ivas3.png", "/ivas4.png", "/ivas5.png"];
    const project2Images = ["/project2.png", "/project2_2.png"];
    const project3Images = ["/project3.png", "/project3_2.png", "/project3_3.png"];

    const [activeImages, setActiveImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (imagesArray, initialIndex = 0) => {
        setActiveImages(imagesArray);
        setCurrentIndex(initialIndex);
    };

    const closeLightbox = () => {
        setActiveImages([]);
        setCurrentIndex(0);
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prevIndex) => (prevIndex + 1) % activeImages.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prevIndex) => (prevIndex - 1 + activeImages.length) % activeImages.length);
    };

    const projectInfo1 = [
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem enim explicabo in quaerat. Architecto consequuntur doloribus earum, nisi quod rerum?',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem enim explicabo in quaerat. Architecto consequuntur doloribus earum, nisi quod rerum?',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem enim explicabo in quaerat. Architecto consequuntur doloribus earum, nisi quod rerum?',
        'somebuletpoint4',
        'somebuletpoint5',
    ]
    const projectInfo2 = [
        'somebuletpoint1',
        'somebuletpoint2',
        'somebuletpoint3',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem enim explicabo in quaerat. Architecto consequuntur doloribus earum, nisi quod rerum?',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem enim explicabo in quaerat. Architecto consequuntur doloribus earum, nisi quod rerum?',
    ]
    const projectInfo3 = [
        'somebuletpoint1',
        'somebuletpoint2',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem enim explicabo in quaerat. Architecto consequuntur doloribus earum, nisi quod rerum?',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem enim explicabo in quaerat. Architecto consequuntur doloribus earum, nisi quod rerum?',
        'somebuletpoint5',
    ]

    return (
        <PageTransition>
            <div className='relative w-screen h-screen overflow-y-auto'>
                <Background/>
                <div className='min-w-screen min-h-full flex justify-center items-center max-sm:py-5'>
                    <div className='page glass shadow-xl rounded-4xl p-10 h-full min-w-11/12 max-xl:p-0 max-lg:my-5'>
                        <div className='h-full'>
                            <div className='flex justify-between max-xl:px-10 max-xl:py-5'>
                                <h1 className='text-5xl text-white tracking-tighter uppercase font-bold max-lg:text-4xl max-md:text-3xl'>
                                    Featured project Showcase
                                </h1>
                                <BackButton/>
                            </div>
                            <section className='flex justify-center items-center h-full w-full py-10 gap-2
                                                max-xl:gap-4 max-xl:px-2 max-lg:flex-col max-lg:items-start max-lg:pl-5 max-sm:p-2'>

                                {/* Project 1 */}
                                <div className='flex flex-col h-full w-1/3 items-center max-lg:w-full overflow-clip'>
                                    <div
                                        className='rounded-xl overflow-clip w-full h-fit max-w-[450px] shrink-0 max-lg:min-w-[450px] max-sm:min-w-full cursor-pointer transition-transform hover:scale-105'
                                        onClick={() => openLightbox(project1Images, 0)}
                                    >
                                        <img src={project1Images[0]} alt='project1' className="w-full h-auto" />
                                    </div>
                                    <ProjectDescription items={projectInfo1}/>
                                </div>

                                {/* Project 2 */}
                                <div className='flex flex-col h-full w-1/3 items-center max-lg:w-full overflow-clip'>
                                    <div
                                        className='rounded-xl overflow-clip w-full h-fit max-w-[450px] shrink-0 max-lg:min-w-[450px] max-sm:min-w-full cursor-pointer transition-transform hover:scale-105'
                                        onClick={() => openLightbox(project2Images, 0)}
                                    >
                                        <img src={project2Images[0]} alt='project2' className="w-full h-auto" />
                                    </div>
                                    <ProjectDescription items={projectInfo2} />
                                </div>

                                {/* Project 3 */}
                                <div className='flex flex-col h-full w-1/3 items-center max-lg:w-full overflow-clip'>
                                    <div
                                        className='rounded-xl overflow-clip w-full h-fit max-w-[450px] shrink-0 max-lg:min-w-[450px] max-sm:min-w-full cursor-pointer transition-transform hover:scale-105'
                                        onClick={() => openLightbox(project3Images, 0)}
                                    >
                                        <img src={project3Images[0]} alt='project3' className="w-full h-auto" />
                                    </div>
                                    <ProjectDescription items={projectInfo3} />
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* 2. Wrap conditional layout in AnimatePresence for exit animations */}
                    <AnimatePresence>
                        {activeImages.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className='fixed inset-0 z-50 flex justify-center items-center bg-black/55 backdrop-blur-md p-4 select-none'
                                onClick={closeLightbox}
                            >
                                {/* Main Wrapper: Centered container that stops clicks from closing the modal */}
                                <div
                                    className='relative max-w-4xl w-full flex flex-col items-center justify-center'
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {/* Main Active Image */}
                                    <motion.img
                                        key={currentIndex}
                                        src={activeImages[currentIndex]}
                                        alt={`showcase item ${currentIndex + 1}`}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 28 }}
                                        className='max-w-full max-h-[70vh] lg:max-h-[80vh] rounded-xl shadow-2xl object-contain'
                                    />

                                    {/* Controls Row: Automatically acts as a bottom bar on mobile, spreads out on desktop */}
                                    <div className='flex items-center justify-center gap-6 mt-5 w-full'>

                                        {/* Left Arrow Animation */}
                                        {activeImages.length > 1 && (
                                            <motion.button
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className='text-white w-12 h-14 text-3xl bg-white/30 hover:bg-white/50 p-2 rounded-xl transition-all z-50
                                                            lg:fixed lg:left-8 lg:top-1/2 lg:-translate-y-1/2 lg:w-14 lg:h-25 lg:text-4xl'
                                                onClick={prevImage}
                                            >
                                                &#10094;
                                            </motion.button>
                                        )}

                                        {/* Image Counter Indicator */}
                                        {activeImages.length > 1 && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-white tracking-widest text-sm font-semibold bg-black/50 px-5 py-2 rounded-xl min-w-[90px] text-center"
                                            >
                                                {currentIndex + 1} / {activeImages.length}
                                            </motion.div>
                                        )}

                                        {/* Right Arrow Animation */}
                                        {activeImages.length > 1 && (
                                            <motion.button
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 20 }}
                                                className='text-white w-12 h-14 text-3xl bg-white/30 hover:bg-white/50 p-2 rounded-xl transition-all z-50
                                                             lg:fixed lg:right-8 lg:top-1/2 lg:-translate-y-1/2 lg:w-14 lg:h-25 lg:text-4xl'
                                                onClick={nextImage}
                                            >
                                                &#10095;
                                            </motion.button>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </PageTransition>
    );
}

export default ProjectsPage;