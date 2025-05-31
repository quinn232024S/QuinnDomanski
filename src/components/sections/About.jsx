import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const Skills = [
        "Object-Oriented Programming",
        "Data Structures and Algorithms",
        "Data Analytics",
        "Low-Level Programming",
    ];

    const Interests = [
        "Hiking",
        "Coding/Building Projects",
        "Working Out",
        "Snowboarding",
        "Scuba Diving"
    ];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-green-400 text-center">
                        {" "}
                        About Me
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            I’m a Computer Science major at Virginia Tech with a strong interest in backend development and a
                            solid foundation in core CS principles. I’m proficient in data structures and algorithms,
                            object-oriented programming, data analytics and visualization, and low-level programming.
                            I’m passionate about building efficient, scalable systems and eager to grow alongside experienced
                            professionals in a collaborative, forward-thinking environment. With strong problem-solving skills
                            and a commitment to continuous learning,
                            I’m ready to make a meaningful impact in a backend development role.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {Skills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className= "bg-green-400/10 text-green-400 py-1 px-3 rounded-full text-sm hover:bg-green-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                                        "
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Interests</h3>
                                <div className="flex flex-wrap gap-2">
                                    {Interests.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="bg-green-400/10 text-green-400 py-1 px-3 rounded-full text-sm hover:bg-green-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong className= "text-green-400"> B.S. in Computer Science </strong> - <span className = "text-orange-300">Virginia Tech </span >
                                    <br/>
                                    Expected Graduation Date: May 2026
                                </li>
                                <li>
                                    Relevant Coursework: Data Structures and Algorithms, Object-Oriented Programming,
                                    Data Analytics, Low-Level Programming, Processor Design, Machine Learning,
                                    Data Visualization.
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">🛠️ Extracurriculars </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold text-green-400">
                                        {" "}
                                        InspireFly: Programming Sub-team September 2024 - present{" "}
                                    </h4>
                                    <p>
                                        Helped design and implement a fully functional satellite to send and receive
                                        AX.25 command packets. Reviewed and refactored existing code to meet technical
                                        needs and remove redundancy. Developed reliable,
                                        compatible code for satellite control boards.
                                    </p>
                                </div>
                            </div>
                            <br />
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold text-green-400">
                                        Boy Scouts Of America: Eagle Scout September 2015 - August 2023
                                    </h4>
                                    <p>
                                        I led a community service project and as Senior Patrol Leader,
                                        I managed volunteers, coordinated with park officials, and mentored scouts.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};