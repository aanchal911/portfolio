import React from "react";

const Skills = () => {
  const skills = [
    { name: "React", level: 90, color: "#61DAFB" },
    { name: "Node.js", level: 85, color: "#339933" },
    { name: "Python", level: 88, color: "#3776AB" },
    { name: "JavaScript", level: 92, color: "#F7DF1E" },
    { name: "AI/ML", level: 80, color: "#FF6B6B" },
    { name: "UI/UX", level: 85, color: "#9B59B6" }
  ];

  return (
    <div className="min-h-screen py-20 px-8 bg-gradient-to-b from-gray-900 to-black">
      <h2 className="text-4xl font-bold text-center mb-16 text-white">Cosmic Skills ✨</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
              <span className="text-sm text-gray-300">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-600 rounded-full h-2">
              <div 
                className="h-2 rounded-full transition-all duration-1000"
                style={{ 
                  width: `${skill.level}%`, 
                  backgroundColor: skill.color,
                  boxShadow: `0 0 10px ${skill.color}`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;