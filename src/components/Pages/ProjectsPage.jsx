import Background from "../UI_Components/Background.jsx";
import PageTransition from "../UI_Components/PageTransition.jsx";
import BackButton from "../UI_Components/BackButton.jsx";

function ProjectsPage() {
    return (
        <PageTransition>
            <div className='relative w-screen h-screen overflow-y-auto'>
                <Background/>
                <div className='w-screen h-screen flex justify-center items-center'>
                    <div className='page border glass rounded-4xl p-10 h-full'>
                        <div className='h-full'>
                            <div className='flex justify-between'>
                                <h1 className='text-5xl'>Project Showcase</h1>
                                <BackButton/>
                            </div>
                            <section className='flex justify-center items-center h-full w-full py-10 gap-10'>
                                <div className='flex flex-col h-full w-1/3'>
                                    <div className='border w-full h-1/2'>
                                        <div>

                                        </div>
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
                                <div className='flex flex-col h-full w-1/3'>
                                    <div className='border w-full h-1/2'>
                                        <div>

                                        </div>
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
                                <div className='flex flex-col h-full w-1/3'>
                                    <div className='border w-full h-1/2'>
                                        <div>

                                        </div>
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