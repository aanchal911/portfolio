import React from "react";

const ProjectModal = ({ show, setShow, project }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-lg w-96 relative border border-pink-500 shadow-2xl">
        <button onClick={() => setShow(false)} className="absolute top-2 right-2 text-white hover:text-pink-400 text-xl">×</button>
        <h2 className="text-2xl font-bold mb-2 text-white">{project?.name}</h2>
        <p className="mb-4 text-gray-300">{project?.description}</p>
        <div className="flex space-x-4">
          <a href={project?.github} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white">GitHub</a>
          <a href={project?.live} target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white">Live Demo</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;