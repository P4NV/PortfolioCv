
function ProfileCard() {
    const links = [
        { id: 1, href: "https://github.com/P4NV",   icon: <img src="/github.png" alt="GitHub" className="w-full h-full object-contain" /> },
        { id: 2, href: "https://www.linkedin.com/in/antonio-pavin-764383335/", icon: <img src="/linkedin.png" alt="LinkedIn" className="w-full h-full object-contain" /> },
        { id: 3, href: "mailto:ex000static@gmail.com",  icon: <img src='/envelope.png' alt='mail'></img> },
        { id: 4, href: "",  icon: <></> },
        { id: 5, href: "",  icon: <></> },
    ];

    return (
        <div className="h-full">
            <div className="flex flex-col justify-between h-full max-w-3/4">
                <div className="flex flex-col gap-1">
                    <span className="text-xl  text-white tracking-widest uppercase">welcome</span>
                    <p className="text-2xl font-semibold leading-snug">
                        Hi, I'm <span className="text-white">Antonio Pavin</span>, a full-stack developer
                        <span className="text-white"> (FrontEnd-leaning)</span> with a good eye for design.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed mt-1">
                        I've worked freelance and I'm constantly pushing my skills forward —
                        always building, always learning.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Have a project in mind or just want to say hello?{" "}
                        <span className="text-white font-medium">I'd love to hear from you.</span>
                    </p>
                </div>
                <div className="flex flex-row gap-10">
                    {links.map((link) => (
                        <button key={link.id} className="w-14 h-14 hover:scale-95 border-white border-b-4 border-r-4 rounded-[18px] overflow-clip">
                            <a href={link.href} target="_blank" rel="noopener noreferrer">
                                {link.icon}
                            </a>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default ProfileCard;