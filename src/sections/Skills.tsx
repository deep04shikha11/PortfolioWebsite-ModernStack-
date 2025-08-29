import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiMongodb, SiDocker, SiFastapi, SiFlask } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa"; 
type Skill = {
    name: string;
    icon: JSX.Element;
}

const skills: Skill[] = [
    { name: "React", icon: <FaReact size={50} className="text-blue-500" /> },
    { name: "Flask", icon: <SiFlask size={50} className="text-black" /> },
    { name: "NodeJs", icon: <FaNodeJs size={50} className="text-green-500" /> },
    { name: "Github", icon: <FaGithub size={50} className="text-gray-900" /> },
    { name: "MongoDB", icon: <SiMongodb size={50} className="text-green-600" /> },
    { name: "Docker", icon: <SiDocker size={50} className="text-blue-500" /> },
    { name: "FastAPI", icon: <SiFastapi size={50} className="text-green-500" /> },
    { name: "LLD", icon: <FaProjectDiagram size={50} className="text-purple-500" /> },
]

export default function Skills() {
    return (
        <section className="py-20 container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Skills</h2>
            <div className="grid grid-col2 md:grid-cols-8 gap-6">
                {skills.map((skill, idx) => (
                    <div key={idx} className="flex flex-col items-center transform hover:scale-110 transition">
                        {skill.icon}<p className="mt-2">{ skill.name}</p>
                    </div> 
                ))}
            </div>
        </section>
    );
}