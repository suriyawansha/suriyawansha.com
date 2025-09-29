import React, { useState } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import { PROJECTS } from '../constants';

export function Portfolio() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(filter.toLowerCase())
        )
      );

  const categories = ['all', 'react', 'node', 'typescript', 'mongodb'];

  return (
    <div id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Portfolio</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience 
            in web development.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-[#3498db] text-white'
                  : 'bg-[#1a1a1a] text-gray-300 hover:bg-[#2a2a2a] hover:text-white'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-[#1a1a1a] rounded-lg overflow-hidden hover:bg-[#2a2a2a] transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-[#3498db] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star size={16} className="mr-1" />
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black p-3 rounded-full hover:bg-[#3498db] hover:text-white transition-colors duration-300"
                        aria-label="View live project"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black p-3 rounded-full hover:bg-[#3498db] hover:text-white transition-colors duration-300"
                        aria-label="View source code"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-[#3498db] bg-opacity-20 text-[#3498db] rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#3498db] hover:bg-[#2980b9] text-white text-center py-2 px-4 rounded-md font-medium transition duration-300 text-sm"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-[#3498db] text-[#3498db] hover:bg-[#3498db] hover:text-white text-center py-2 px-4 rounded-md font-medium transition duration-300 text-sm"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found for the selected filter.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 text-center bg-[#1a1a1a] p-12 rounded-lg">
          <h3 className="text-3xl font-bold mb-4">Interested in Working Together?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and create amazing web experiences.
          </p>
          <a 
            href="contact"
            className="bg-[#3498db] hover:bg-[#2980b9] text-white px-8 py-3 rounded-md font-medium transition duration-300"
          >
            Let's Discuss Your Project
          </a>
        </div>
      </div>
    </div>
  );
}
