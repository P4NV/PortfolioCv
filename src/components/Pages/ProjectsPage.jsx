import Background from "../UI_Components/Background.jsx";
import PageTransition from "../UI_Components/PageTransition.jsx";
import BackButton from "../UI_Components/BackButton.jsx";

function ProjectsPage() {
    return (
        <PageTransition>
            <div className='relative w-screen h-screen overflow-y-auto'>
                <Background/>
                <div className='min-w-screen min-h-screen flex justify-center items-center
                                max-sm:py-10'>
                    <div className='page border glass rounded-4xl p-10 h-full
                                    max-xl:p-0'>
                        <div className='h-full'>
                            <div className='flex justify-between
                                            max-xl:px-10 max-xl:py-5'>
                                <h1 className='text-5xl'>Project Showcase</h1>
                                <BackButton/>
                            </div>
                            <section className='flex justify-center items-center h-fit w-full py-10 gap-10
                                                max-xl:gap-4 max-xl:px-2
                                                max-lg:flex-col max-lg:items-start max-lg:pl-10
                                                max-sm:p-2'>
                                <div className='flex flex-col h-full w-1/3
                                                max-lg:flex-row max-lg:w-2/3
                                                max-sm:flex-col max-sm:w-full'>
                                    <div className='border w-full h-fit
                                                    max-lg:min-w-[450px]
                                                    max-sm:min-w-full'>
                                        <img src="/project1.png" alt='project1' />
                                    </div>
                                    <div className='px-5 py-8'>
                                        <ul>
                                            <li>
                                                BulletPoint
                                            </li>
                                            <li>
                                                BulletPoint
                                            </li>
                                            <li>
                                                BulletPoint
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='flex flex-col h-full w-1/3
                                                max-lg:flex-row max-lg:w-2/3
                                                max-sm:flex-col max-sm:w-full'>
                                    <div className='border w-full h-fit
                                                    max-lg:min-w-[450px]
                                                    max-sm:min-w-full'>
                                        <img src="/project2.png" alt='project2' />
                                    </div>
                                    <div className='px-5 py-8'>
                                        <ul>
                                            <li>
                                                BulletPoint
                                            </li>
                                            <li>
                                                BulletPoint
                                            </li>
                                            <li>
                                                BulletPoint
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='flex flex-col h-full w-1/3
                                                max-lg:flex-row max-lg:w-2/3
                                                max-sm:flex-col max-sm:w-full'>
                                    <div className='border w-full h-fit
                                                    max-lg:min-w-[450px]
                                                    max-sm:min-w-full'>
                                        <img src="/project3.png" alt='project3' />
                                    </div>
                                    <div className='px-5 py-8'>
                                        <ul>
                                            <li>
                                                BulletPoint
                                            </li>
                                            <li>
                                                BulletPoint
                                            </li>
                                            <li>
                                                BulletPoint
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}

export default ProjectsPage;