export const TechStack = ({ onTechClick }) => {
    const techItems = [
        { name: "Python", icon: "🐍", level: "Expert" },
        { name: "Java", icon: "☕", level: "Mid" },
        { name: "C", icon: "🧠", level: "Mid" },
        { name: "Linux", icon: "🐧", level: "Mid" },
        { name: "Git", icon: "🔧", level: "Expert" },
        { name: "C++", icon: "💻", level: "Mid" },
        { name: "JavaScript", icon: "🟨", level: "Expert" },
        { name: "React", icon: "⚛️", level: "Expert" },
        { name: "HTML/CSS", icon: "🌐", level: "Beginner" },
    ];

    const levelToBorder = {
        Beginner: "group-hover:border-green-400",
        Mid: "group-hover:border-yellow-500",
        Expert: "group-hover:border-blue-500",
    };

    const levelTextColor = {
        Beginner: "text-green-400",
        Mid: "text-yellow-400",
        Expert: "text-blue-400",
    };

    return (
        <section id="tech-stack" className="min-h-screen flex items-center justify-center py-10">
            <div className="w-full max-w-6xl px-4">
                <h2 className="text-3xl font-semibold text-center text-green-400 mb-6">Coding Skills</h2>

                <div
                    className="grid gap-6"
                    style={{
                        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                    }}
                >
                    {techItems.map((tech, index) => (
                        <div
                            key={index}
                            onClick={() => onTechClick(tech.name)}
                            className="group glass aspect-square border border-green-200 transition-all flex flex-col justify-center items-center text-center p-4 cursor-pointer"
                        >
                            <div className="text-3xl mb-3">
                                <span className="group-hover:hidden">{tech.icon}</span>
                                <div
                                    className={`hidden group-hover:flex items-center justify-center w-20 h-20 rounded-full border-4 bg-black ${levelToBorder[tech.level]}`}
                                >
                  <span className={`text-sm font-semibold ${levelTextColor[tech.level]}`}>
                    {tech.level}
                  </span>
                                </div>
                            </div>
                            <h3 className="text-green-400 text-base font-medium">{tech.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};







