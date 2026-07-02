import Background from "../UI_Components/Background.jsx";
import PageTransition from "../UI_Components/PageTransition.jsx";
import BackButton from "../UI_Components/BackButton.jsx";
import ProjectDescription from "../UI_Components/ProjectDescription.jsx";

function ProjectsPage() {

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
                <div className='min-w-screen min-h-full flex justify-center items-center
                                max-sm:py-5'>
                    <div className='page glass shadow-xl rounded-4xl p-10 h-full min-w-11/12
                                    max-xl:p-0 max-lg:my-5'>
                        <div className='h-full'>
                            <div className='flex justify-between
                                            max-xl:px-10 max-xl:py-5'>
                                <h1 className='text-5xl text-white tracking-tighter uppercase font-bold
                                               max-lg:text-4xl max-md:text-3xl'>Featured project Showcase</h1>
                                <BackButton/>
                            </div>
                            <section className='flex justify-center items-center h-full w-full py-10 gap-2
                                                max-xl:gap-4 max-xl:px-2
                                                max-lg:flex-col max-lg:items-start max-lg:pl-5
                                                max-sm:p-2'>
                                <div className='flex flex-col h-full w-1/3 items-center max-lg:w-full overflow-clip'>
                                    <div className='rounded-xl overflow-clip w-full h-fit max-w-[450px] shrink-0
                                                    max-lg:min-w-[450px]
                                                    max-sm:min-w-full'>
                                        <img src="/project1.png" alt='project1'/>
                                    </div>
                                    <ProjectDescription items={projectInfo1}/>
                                </div>
                                <div className='flex flex-col h-full w-1/3 items-center max-lg:w-full overflow-clip'>
                                    <div className='rounded-xl overflow-clip w-full h-fit max-w-[450px] shrink-0
                                                    max-lg:min-w-[450px]
                                                    max-sm:min-w-full'>
                                        <img src="/project2.png" alt='project2' />
                                    </div>
                                    <ProjectDescription items={projectInfo2} />
                                </div>
                                <div className='flex flex-col h-full w-1/3 items-center max-lg:w-full overflow-clip'>
                                    <div className='rounded-xl overflow-clip w-full h-fit max-w-[450px] shrink-0
                                                    max-lg:min-w-[450px]
                                                    max-sm:min-w-full'>
                                        <img src="/project3.png" alt='project3' />
                                    </div>
                                    <ProjectDescription items={projectInfo3} />
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