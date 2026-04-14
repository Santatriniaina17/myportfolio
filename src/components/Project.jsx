import React from "react";
import { PROJECTS } from "../constants/ProjectContent";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <h1 className="my-20 text-center text-4xl">Project</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className={`mb-8 flex flex-wrap lg:justify-center ${
              project.link ? "cursor-pointer group" : ""
            }`}
            onClick={() => project.link && window.open(project.link, "_blank")}
          >
            <div className="w-full lg:w-1/4 relative">
              <img
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className="mb-6 rounded"
              />
              {project.link && (
                <span className="absolute top-0 left-0 flex items-center gap-1.5 rounded-full bg-neutral-900 border border-green-500/30 px-2.5 py-1 text-xs font-medium text-green-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Live
                </span>
              )}
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h5 className="mb-2 font-semibold">{project.title}</h5>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded-4xl bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
                >
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
