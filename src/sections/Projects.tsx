type Projects = {
    title: string;
    description: string;
    tech: string[];
    github: string;
    demo: string;
}

const projects: Projects[] = [
    {
    title: "Portfolio Website",
    description: "Responsive portfolio built with Next.js and Tailwind.",
    tech: ["Next.js", "TailwindCSS"],
    github: "https://github.com/deep04shikha11/PortfolioWebsite-ModernStack-",
    demo: "https://github.com/deep04shikha11",
    },
    {
    title: "chatbot with storage",
    description: "Responsive portfolio built with Next.js and Tailwind.",
    tech: ["Laravel", "MySQL"],
    github: "https://github.com/deep04shikha11/chatbot-in-laravel",
    demo: "https://github.com/deep04shikha11",
    },
    {
    title: "student Mgmt Sys",
    description: "Responsive portfolio built with Next.js and Tailwind.",
    tech: ["python", "MySQL"],
    github: "https://github.com/deep04shikha11/python-studentMgmtSys",
    demo: "https://github.com/deep04shikha11",
  }
]

export default function Projects() {
    return (
        <section className="py-20 container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
                Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((proj, idx)=>(
                    <div key={idx} className="p-6 border rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold">{proj.title}</h3>
                        <p className="text-gray-600 mt-2">{proj.description}</p>
                        <div className="mt-2 flex gap-2 flex-wrap">
                            {proj.tech.map((t) => (
                                <span key={t} className="px-2 py-1 bg-gray-200 rounded text-sm">{t}</span>
                            ))}
                        </div>
                        <div className="mt-4 flex gap-4">
                            <a href="{proj.github}" target="_blank" className="text-blue-500">GitHub</a>
                            <a href="" target="_blank" className="text-blue-500">Live Demo</a>
                        </div>
                </div>
                ))}
            </div>
      </section>  
    );
}