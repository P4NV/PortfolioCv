import {Link} from "react-router-dom";

function BackButton(){
    return (
        <div>
            <Link to='/'>
                <button className='w-8 h-8 hover:cursor-pointer'>
                    <img src='/external-link.png' alt='External link' />
                </button>
            </Link>
        </div>
    )
}

export default BackButton;