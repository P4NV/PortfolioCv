
function ProfileCard(){
    const links = [
        {id:1,href:"",icon:<></>},
        {id:2,href:"",icon:<></>},
        {id:3,href:"",icon:<></>},
        {id:4,href:"",icon:<></>},
        {id:5,href:"",icon:<></>},
    ]
    return (
        <div className='h-full'>
            <div className='flex flex-col justify-between h-full max-w-3/4'>
                <div>
                    <p>Hi, I'm Gianmarco Cavallo, a full-stack developer (frontend-leaning) with a good eye for design.</p>
                    <p>I've worked across startups, consultancy agencies and corporate companies, often as the bridge between designers and engineers. </p>
                    <p>If you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you.</p>
                </div>
                <div className='flex flex-row gap-10'>
                    {links.map((link) => (
                        <button key={link.id}
                                className='bg-black w-12 h-12'>
                            <a href={link.href} target="_blank" rel="noopener noreferrer">
                                {link.icon}
                            </a>
                        </button>
                    )) }
                </div>
            </div>
        </div>
    )
}
export default ProfileCard;