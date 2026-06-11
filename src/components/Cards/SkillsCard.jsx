import {motion} from 'framer-motion'

function SkillsCard() {

    const skills = ['Html/Css','JavaScript','TypeScript','React','Next.js','Node.js','Express.js','PostgreSQL','TailwindCSS','Motion']

    return (
        <div className='h-full'>
            <div className='text-white text-2xl'>
                <h1>My Expertise</h1>
            </div>
            <div className='flex flex-col h-full justify-around'>
                <div className='flex flex-col gap-5'>
                    <h2 className='text-white text-2xl' >Stack & Tools</h2>
                    <div className='flex flex-wrap gap-2'>
                        {skills.map((skill) => (
                            <motion.div
                                initial={{ borderColor: 'rgba(255,255,255,0)' }}
                                whileHover={{ borderColor: 'rgba(255,255,255,1)' }}
                                transition={{ duration: 0.1 }}
                                key={skill}
                                className='glass rounded-sm w-fit px-5 py-1'
                                style={{ border: '2px solid rgba(255,255,255,0)' }}
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </div>
                <section>
                    <p>
                        Beyond coding, I'm passionate about design, illustration, animation, photography, and parametric 3D modelling. I love travelling, and I have an unusual hobby of collecting vintage passports, fascinating pieces of history.
                    </p>
                </section>
            </div>
        </div>
    )
}

export default SkillsCard;