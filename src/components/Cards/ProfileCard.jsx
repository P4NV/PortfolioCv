
function ProfileCard() {
    const links = [
        { id: 1, href: "https://github.com/P4NV",   icon: <img src="/github.png" alt="GitHub" className="w-full h-full object-contain" /> },
        { id: 2, href: "https://www.linkedin.com/in/antonio-pavin-764383335/", icon: <img src="/linkedin.png" alt="LinkedIn" className="w-full h-full object-contain" /> },
        { id: 3, href: "mailto:ex000static@gmail.com",  icon: <img src='/envelope.png' alt='mail'></img> },
    ];

    return (
        <div className="h-full">
            <div className="flex flex-col justify-between h-full max-w-3/4
                            max-xl:flex-row max-xl:max-w-full">
                <div className="flex flex-col gap-1
                                max-xl:max-w-[90%]">
                    <span className="text-xl text-white tracking-widest uppercase
                                     max-xl:text-lg
                                     max-lg:text-sm
                                     max-sm:text-xs">
                        welcome
                    </span>
                    <p className="text-2xl font-semibold leading-snug
                                  max-lg:text-xl
                                  max-sm:text-[20px]">
                        Hi, I'm <span className="text-white">Antonio Pavin</span>, a full-stack developer
                        <span className="text-white"> (FrontEnd-leaning)</span> with a good eye for design.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed mt-1
                                  max-lg:text-lg
                                  max-sm:text-sm">
                        I've worked freelance and I'm constantly pushing my skills forward —
                        always building, always learning.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed
                                  max-lg:text-sm
                                  max-sm:hidden">
                        Have a project in mind or just want to say hello?{" "}
                        <span className="text-white font-medium">I'd love to hear from you.</span>
                    </p>
                </div>
                <div className="flex flex-row gap-10 justify-start
                                max-xl:flex-col max-xl:gap-5 max-xl:justify-center
                                max-sm:gap-3">
                    {links.map((link) => (
                        <button key={link.id} className="w-14 h-14 hover:scale-95 border-white border-b-4 border-r-4 rounded-[18px] overflow-clip
                                                         max-lg:w-12 max-lg:h-12
                                                         max-sm:w-8 max-sm:h-8 max-sm:border-b-2 max-sm:border-r-2">
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