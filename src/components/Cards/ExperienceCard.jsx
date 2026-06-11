import {Link} from "react-router-dom";

function ExperienceCard() {
    return (
        <div className='h-full flex flex-row justify-between'>
            <div className='flex flex-col w-5/6 text-2xl '>
                <h1>Experience</h1>
                <p className='text-xl'>some some desc desc</p>
            </div>
            <button className='w-8 h-8 hover:cursor-pointer'>
                <Link to='/components/Pages/ExperiencePage'>
                    <img src='/external-link.png' alt='External link'/>
                </Link>
            </button>
        </div>
    )
}

export default ExperienceCard;