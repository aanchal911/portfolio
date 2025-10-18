import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Cosmic E-Commerce",
      description: "Full-stack e-commerce platform with AI recommendations",
      tech: ["React", "Node.js", "MongoDB", "AI"],
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Galaxy Chat App",
      description: "Real-time chat application with cosmic themes",
      tech: ["React", "Socket.io", "Express", "JWT"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Stellar Dashboard",
      description: "Analytics dashboard with beautiful data visualizations",
      tech: ["React", "D3.js", "Python", "FastAPI"],
      color: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-16 text-white">My Cosmic Projects 🚀</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className={`bg-gradient-to-br ${project.color} p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl`}>
            <h3 className="text-xl font-bold mb-4 text-white">{project.title}</h3>
            <p className="text-gray-100 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm text-white">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;