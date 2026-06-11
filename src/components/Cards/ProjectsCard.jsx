function ProjectsCard() {
    return (
        <div className='h-full flex flex-row justify-between'>
            <div className='flex w-5/6 text-5xl items-center'>
                <h1>Projects</h1>
            </div>
            <button className='w-8 h-8 hover:cursor-pointer'>
                <a>
                    <img src='/external-link.png' alt='External link'/>
                </a>
            </button>
        </div>
    )
}

export default ProjectsCard;