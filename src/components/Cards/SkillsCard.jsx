import {motion} from 'framer-motion'

function SkillsCard() {

    const skills = ['Html/Css','JavaScript','TypeScript','Java','React','SpringBoot','Next.js','Express.js','Node.js','PostgreSQL','Motion','TailwindCSS']

    return (
        <div className='h-full'>
            <div className='text-white text-2xl font-black tracking-wider text-shadow-lg
                            max-lg:text-xl'>
                <h1>My Expertise</h1>
            </div>
            <div className='flex flex-col h-full justify-around max-sm:justify-evenly'>
                <div className='flex flex-col gap-5 max-sm:gap-2'>
                    <h2 className='text-white text-2xl font-black tracking-widest text-shadow-lg
                                    max-lg:text-xl' >
                        Stack & Tools
                    </h2>
                    <div className='flex flex-wrap gap-2'>
                        {skills.map((skill) => (
                            <motion.div
                                initial={{ borderColor: 'rgba(255,255,255,0)' }}
                                whileHover={{ borderColor: 'rgba(255,255,255,1)' }}
                                transition={{ duration: 0.1 }}
                                key={skill}
                                className='glass rounded-lg w-fit px-2 py-1
                                            max-lg:text-sm
                                            max-md:text-lg
                                            max-sm:text-lg'
                                style={{ border: '2px solid rgba(255,255,255,0)' }}
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </div>
                <section>
                    <p className='text-white text-xl font-semibold tracking-wide text-shadow-lg
                                    max-lg:text-lg '>
                        Beyond coding, I'm passionate about design,3D modeling,art and electronics. Love creating and discovering new interests
                    </p>
                </section>
            </div>
        </div>
    )
}

export default SkillsCard;