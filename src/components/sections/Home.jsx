export const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative"
        >
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-300 to-white bg-clip-text text-transparent">
                    Hi, I'm Quinn Domanski
                </h1>

                <p className= "text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    I'm a Computer Science student at <span className= "text-orange-300">Virginia Tech</span>. I am
                    seeking opportunities to leverage my skills for innovative projects in a collaborative
                    environment.
                </p>
                <div className= "flex justify-center space-x-4">
                    <a
                        href="#projects"
                        className="bg-green-400 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                    >
                        View Projects
                    </a>

                    <a
                        href="#contact"
                        className="border border-white text-green-400-500 py-3 px-6 rounded font-medium transition-all duration-200
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>);
};