import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Project
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {/* ProShop Card */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)]">
              
              <h3 className="text-xl font-bold mb-2 text-white">
                ProShop (MERN E-commerce)
              </h3>

              <p className="text-gray-400 mb-4">
                Full Stack E-commerce application built using MERN stack with user authentication, product management, and secure backend integration.
              </p>

              <div>
                {["React", "Node.js", "Express", "MongoDB"].map((item, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 mr-2 rounded-full text-sm hover:bg-blue-500/20 transition-all"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://proshop-production-0df9.up.railway.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project ➡
                </a>
              </div>

            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
