import {Link} from 'react-router-dom'

function ProjectsCard() {
    return (
        <div className='h-full flex flex-row justify-between'>
            <div className='flex flex-col w-full text-3xl text-shadow-lg text-white font-black tracking-wide space-y-3
                            max-lg:text-2xl
                            max-sm:justify-center'>
                <h1>Projects</h1>
                <p className='text-xl
                              max-lg:text-[18px]
                              max-sm:hidden'>
                    Some of the featured projects
                </p>
            </div>
            <button className='w-8 h-8 hover:cursor-pointer
                               max-lg:w-6 max-lg:h-6'>
                <Link to='/components/Pages/ProjectsPage'>
                    <img src='/external-link.png' alt='External link'/>
                </Link>
            </button>
        </div>
    )
}

export default ProjectsCard;