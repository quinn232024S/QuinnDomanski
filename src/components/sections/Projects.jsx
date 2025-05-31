export const Projects = () => {
    return <section id = "projects" className = "min-h-screen flex items-center justify-center py-20">
        <div className = "max-w-5xl mx-auto px-4">
            <h2 className =  "text-3xl font-bold mb-8 text-green-400 text-center">Featured Projects</h2>
            <div className = "grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className = "p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                <h3 className= "text-xl font-bold mb-2">Portfolio Website</h3>
                <p className= "text-gray-400 mb-4">A personal portfolio website that explains who I am and shows off my skills,
                background, and projects.</p>
                <div className = "flex flex-wrap gap-2 mb-4" >
                    {["React", "Tailwindcss", "HTML", "Javascript", "github pages"].map((tech, key) => (
                        <span
                            key={key}
                            className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                        >
                    {tech}
                  </span>
                        ))}
                </div>

                   <div className = "flex justify-between items-center mb-2" >
                       <a href = "#" className = "text-green-400 hover:text-green-300 transition-colors"> View Project → </a>
                   </div>
               </div>

                <div className = "p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className= "text-xl font-bold mb-2">Portfolio Website</h3>
                    <p className= "text-gray-400 mb-4">A personal portfolio website that explains who I am and shows off my skills,
                        background, and projects.</p>
                    <div className = "flex flex-wrap gap-2 mb-4" >
                        {["React", "Tailwindcss", "HTML", "Javascript", "github pages"].map((tech, key) => (
                            <span
                                key={key}
                                className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                            >
                    {tech}
                  </span>
                        ))}
                    </div>

                    <div className = "flex justify-between items-center mb-2" >
                        <a href = "#" className = "text-green-400 hover:text-green-300 transition-colors"> View Project → </a>
                    </div>
                </div>


            </div>
        </div>
    </section>
}

