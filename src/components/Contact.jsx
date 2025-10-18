import React from "react";

const Contact = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900">
      <h2 className="text-4xl font-bold mb-8 text-white">Contact Me 🌌</h2>
      <p className="text-gray-300 mb-8 text-center max-w-md">
        Ready to create something cosmic together? Let's connect and build amazing projects!
      </p>
      <form className="flex flex-col w-80 space-y-4">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-pink-500 focus:outline-none transition-colors"
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-pink-500 focus:outline-none transition-colors"
        />
        <textarea 
          placeholder="Your Message" 
          rows="4"
          className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-pink-500 focus:outline-none transition-colors resize-none"
        />
        <a href="mailto:aanchal@example.com" className="w-full">
          <button 
            type="button" 
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 p-3 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Send Message 🚀
          </button>
        </a>
      </form>
      <div className="mt-8 flex space-x-6">
        <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
      </div>
    </div>
  );
};

export default Contact;