import Cell from "./UI/Cell.jsx"

export default function MainContainer() {
    return (
        <div className="h-full w-full flex items-center justify-center">
            <div className="bento p-6 w-4/5 glass relative">

                <Cell
                    colStart={1} rowStart={1} col={15} row={4}
                    className="rounded-tl-[60px] min-h-[180px] md:min-h-0"
                    expandedClassName="rounded-[75px]"
                    preview={
                        <div className="p-12">
                            <p className="text-white/40 text-xs tracking-widest uppercase mb-1">welcome</p>
                            <h1 className="text-white text-2xl font-semibold">Hi, I'm John</h1>
                            <p className="text-white/60 text-sm mt-1">Frontend developer & designer</p>
                        </div>
                    }
                    expanded={
                        <div className="p-6 flex flex-col gap-4">
                            <h1 className="text-white text-4xl font-bold">Hi, I'm John</h1>
                            <p className="text-white/70 text-lg max-w-lg leading-relaxed">
                                A frontend developer with a focus on motion, UI detail, and
                                things that feel as good as they look.
                            </p>
                            <div className="flex gap-3 mt-2">
                                <button className="px-4 py-2 rounded-full bg-white/20 text-white text-sm hover:bg-white/30 transition-colors">
                                    Book a call
                                </button>
                            </div>
                        </div>
                    }
                />

                <Cell
                    colStart={16} rowStart={1} col={5} row={8}
                    className="rounded-tr-[60px] rounded-br-[60px] min-h-[160px] md:min-h-0"
                    expandedClassName="rounded-[75px]"
                    preview={
                        <div className="p-5">
                            <p className="text-white/60 text-sm font-medium">About me</p>
                        </div>
                    }
                    expanded={
                        <div className="p-6">
                            <h2 className="text-white text-2xl font-semibold mb-3">About me</h2>
                            <p className="text-white/70 text-sm leading-relaxed">
                                Based in Italy. Working with JavaScript, React, and whatever
                                tool fits the job best.
                            </p>
                        </div>
                    }
                />

                <Cell
                    colStart={1} rowStart={5} col={5} row={4}
                    className="rounded-bl-[60px] min-h-[140px] md:min-h-0"
                    expandedClassName="rounded-[75px]"
                    preview={<div className="p-5"><p className="text-white/60 text-sm">Contact</p></div>}
                    expanded={
                        <div className="p-6">
                            <h2 className="text-white text-xl font-semibold mb-2">Contact</h2>
                            <p className="text-white/60 text-sm">hello@example.com</p>
                        </div>
                    }
                />

                <Cell
                    colStart={6} rowStart={5} col={5} row={2}
                    className="rounded-xl min-h-[120px] md:min-h-0"
                    expandedClassName="rounded-[75px]"
                    preview={<div className="p-5"><p className="text-white/60 text-sm">Works</p></div>}
                    expanded={
                        <div className="p-6">
                            <h2 className="text-white text-xl font-semibold">Works</h2>
                        </div>
                    }
                />

                <Cell
                    colStart={11} rowStart={5} col={5} row={2}
                    className="rounded-xl min-h-[120px] md:min-h-0"
                    expandedClassName="rounded-[75px]"
                    preview={<div className="p-5"><p className="text-white/60 text-sm">Status</p></div>}
                    expanded={
                        <div className="p-6">
                            <h2 className="text-white text-xl font-semibold">Status</h2>
                            <p className="text-white/60 text-sm mt-1">Available for freelance</p>
                        </div>
                    }
                />

                <Cell
                    colStart={6} rowStart={7} col={5} row={2}
                    className="rounded-xl min-h-[120px] md:min-h-0"
                    expandedClassName="rounded-[75px]"
                    preview={<div className="p-5"><p className="text-white/60 text-sm">Projects</p></div>}
                    expanded={
                        <div className="p-6">
                            <h2 className="text-white text-xl font-semibold">Projects</h2>
                        </div>
                    }
                />

                <Cell
                    colStart={11} rowStart={7} col={5} row={2}
                    className="rounded-xl min-h-[120px] md:min-h-0"
                    expandedClassName="rounded-[75px]"
                    preview={<div className="p-5"><p className="text-white/60 text-sm">Playground</p></div>}
                    expanded={
                        <div className="p-6">
                            <h2 className="text-white text-xl font-semibold">Playground</h2>
                        </div>
                    }
                />

            </div>
        </div>
    )
}