import Background from "../UI_Components/Background.jsx";
import PageTransition from "../UI_Components/PageTransition.jsx";
import BackButton from "../UI_Components/BackButton.jsx";
import { Atom, Zap, Database, Sparkles, Layout, Terminal, BarChart3 } from "lucide-react";

function ExperiencePage() {
    return (
        <PageTransition>
            <div className='relative w-screen h-screen overflow-y-auto font-sans antialiased selection:bg-white/20 selection:text-white'>
                <Background/>

                <div className='w-screen min-h-screen flex justify-center items-center p-4 sm:p-8 md:p-12 lg:p-20'>

                    {/* Main Glass Dashboard Card */}
                    <div className='page shadow-2xl glass rounded-4xl p-8 sm:p-10 md:p-12 w-full max-w-6xl min-h-[600px] flex flex-col justify-between gap-10 border border-white/15'>

                        {/* Header Row */}
                        <div className='flex justify-between items-center w-full pb-4 border-b border-white/10'>
                            <h1 className='text-3xl sm:text-4xl md:text-5xl text-white tracking-tighter uppercase font-extrabold'>
                                Experience Journey
                            </h1>
                            <BackButton/>
                        </div>

                        {/* Split Interface Workspace */}
                        <div className='flex flex-col lg:flex-row justify-between items-stretch w-full gap-10 lg:gap-16 flex-grow'>

                            {/* Left Text Segment - Your Software Evolution Timeline */}
                            <section className='w-full lg:w-[55%] flex flex-col justify-start gap-8 text-left text-white/80'>
                                <p className='text-sm sm:text-base leading-relaxed font-light text-white/90 max-w-xl tracking-wide'>
                                    From crafting responsive user interfaces to designing scalable, production-ready server ecosystems. My journey is driven by a strong eye for design and structural logic.
                                </p>

                                {/* Unique Tech Bullet List */}
                                <div className='space-y-6 pl-1 relative before:absolute before:left-[10px] before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10'>

                                    <div className='group relative pl-7'>
                                        <div className='flex items-center gap-3 text-sm sm:text-base font-semibold tracking-wide text-cyan-400'>
                                            <div className='absolute left-0 bg-neutral-900 border border-white/20 p-1 rounded-md text-cyan-400 group-hover:border-cyan-400 transition-colors'>
                                                <Atom size={14} className="stroke-[2.5]" />
                                            </div>
                                            <span>FrontEnd Specialization</span>
                                        </div>
                                        <p className='text-xs sm:text-sm text-white/60 font-light mt-1 leading-relaxed group-hover:text-white/80 transition-colors'>
                                            I started my engineering journey with FrontEnd education focusing on component driven architecture and clean,scalable code in react and javascript later on with typescript.
                                        </p>
                                    </div>

                                    <div className='group relative pl-7'>
                                        <div className='flex items-center gap-3 text-sm sm:text-base font-semibold tracking-wide text-emerald-400'>
                                            <div className='absolute left-0 bg-neutral-900 border border-white/20 p-1 rounded-md text-emerald-400 group-hover:border-emerald-400 transition-colors'>
                                                <Zap size={14} className="stroke-[2.5]" />
                                            </div>
                                            <span>Freelance Foundations</span>
                                        </div>
                                        <p className='text-xs sm:text-sm text-white/60 font-light mt-1 leading-relaxed group-hover:text-white/80 transition-colors'>
                                            Started Building fullstack applications for local businesses.
                                        </p>
                                    </div>

                                    <div className='group relative pl-7'>
                                        <div className='flex items-center gap-3 text-sm sm:text-base font-semibold tracking-wide text-amber-400'>
                                            <div className='absolute left-0 bg-neutral-900 border border-white/20 p-1 rounded-md text-amber-400 group-hover:border-amber-400 transition-colors'>
                                                <Database size={14} className="stroke-[2.5]" />
                                            </div>
                                            <span>Systems & Architecture Expansion</span>
                                        </div>
                                        <p className='text-xs sm:text-sm text-white/60 font-light mt-1 leading-relaxed group-hover:text-white/80 transition-colors'>
                                            Started experimenting with backend engineering and system architecture.Reusable and scalable components,scalable backend services using Node.js and structured relational data layouts in PostgreSQL.
                                        </p>
                                    </div>

                                    <div className='group relative pl-7'>
                                        <div className='flex items-center gap-3 text-sm sm:text-base font-semibold tracking-wide text-purple-400'>
                                            <div className='absolute left-0 bg-neutral-900 border border-white/20 p-1 rounded-md text-purple-400 group-hover:border-purple-400 transition-colors'>
                                                <Sparkles size={14} className="stroke-[2.5]" />
                                            </div>
                                            <span>Continuous Discovery</span>
                                        </div>
                                        <p className='text-xs sm:text-sm text-white/60 font-light mt-1 leading-relaxed group-hover:text-white/80 transition-colors'>
                                            I constantly push into new  technology ecosystems—experimenting with microservices,complex animations like Framer Motion, and finding new tools to refine my stack.
                                        </p>
                                    </div>

                                </div>
                            </section>

                            {/* Right Visual Segment - High Contrast UI Micro-Views */}
                            {/*triba napraviti usestate da activni tab bude full height ali da ne conflictuje druge elemente i do su drugi neaktivni budu u jednostavnom baru*/}
                            <section className='w-full lg:w-[45%] flex flex-col sm:flex-row lg:flex-col gap-5 justify-center items-stretch'>

                                {/* UI Layout / Wireframe Card */}
                                <div className='glass_card p-4 flex-1 flex flex-col justify-between min-h-[115px] border border-white/20 bg-neutral-950/40 relative overflow-hidden group hover:border-white/40 transition-all shadow-lg'>
                                    <div className='flex justify-between items-center mb-2'>
                                        <div className='flex gap-1.5'>
                                            <div className='w-2 h-2 rounded-full bg-white/40' />
                                            <div className='w-2 h-2 rounded-full bg-white/40' />
                                            <div className='w-2 h-2 rounded-full bg-white/40' />
                                        </div>
                                        <Layout size={14} className="text-white/40 group-hover:text-white/70 transition-colors" />
                                    </div>
                                    <div className='w-full h-3 bg-white/20 rounded-sm mb-3' />
                                    <div className='grid grid-cols-3 gap-2 flex-grow'>
                                        <div className='bg-white/5 rounded border border-dashed border-white/20 flex items-center justify-center text-[10px] text-white/50 font-mono'>App</div>
                                        <div className='bg-white/5 rounded border border-dashed border-white/20 flex items-center justify-center text-[10px] text-white/50 font-mono'>UI</div>
                                        <div className='bg-white/5 rounded border border-dashed border-white/20 flex items-center justify-center text-[10px] text-white/50 font-mono'>Grid</div>
                                    </div>
                                </div>

                                {/* Code / Terminal Card */}
                                <div className='glass_card p-4 flex-1 font-mono text-[11px] leading-relaxed text-cyan-300 min-h-[115px] border border-white/20 bg-neutral-950/60 flex flex-col justify-center shadow-2xl relative group hover:border-white/40 transition-all'>
                                    <Terminal size={14} className="absolute top-3 right-3 text-white/30 group-hover:text-white/60 transition-colors" />
                                    <div><span className='text-purple-400 font-semibold'>const</span> engineer = &#123;</div>
                                    <div className='pl-4'><span className='text-amber-400'>stack</span>: <span className='text-emerald-400'>'NextJS + Node'</span>,</div>
                                    <div className='pl-4'><span className='text-amber-400'>db</span>: <span className='text-emerald-400'>'PostgreSQL'</span>,</div>
                                    <div className='pl-4'><span className='text-amber-400'>pattern</span>: <span className='text-emerald-400'>'Architecture'</span></div>
                                    <div>&#125;;</div>
                                </div>

                                {/* Analytics / Performance Bar Chart Card */}
                                <div className='glass_card p-4 flex-1 flex flex-col justify-between min-h-[115px] border border-white/20 bg-neutral-950/40 relative group hover:border-white/40 transition-all shadow-lg'>
                                    <div className='flex justify-between items-center w-full mb-1'>
                                        <span className='text-[10px] font-mono font-bold tracking-wider text-white/50'>METRICS / SYSTEM LOAD</span>
                                        <BarChart3 size={14} className="text-white/40 group-hover:text-white/70 transition-colors" />
                                    </div>
                                    <div className='flex items-end justify-between gap-3 h-14 w-full px-2'>
                                        <div className='w-full bg-white/20 h-[35%] rounded-t-sm transition-all group-hover:bg-cyan-400 duration-500' />
                                        <div className='w-full bg-white/20 h-[65%] rounded-t-sm transition-all group-hover:bg-emerald-400 duration-500 delay-75' />
                                        <div className='w-full bg-white/20 h-[100%] rounded-t-sm transition-all group-hover:bg-purple-400 duration-500 delay-150' />
                                        <div className='w-full bg-white/20 h-[50%] rounded-t-sm transition-all group-hover:bg-amber-400 duration-500 delay-200' />
                                    </div>
                                </div>

                            </section>
                        </div>

                        {/* Bottom Metadata Bar */}
                        <div className='pt-4 border-t border-white/5 flex justify-between items-center text-[10px] uppercase tracking-widest text-white/30 font-mono'>
                            <span>System Status: Operational</span>
                            <span>V1.0</span>
                        </div>

                    </div>
                </div>
            </div>
        </PageTransition>
    );
}

export default ExperiencePage;