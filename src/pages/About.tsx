import React from 'react';
import { SKILLS, EXPERIENCES, EDUCATION } from '../constants';

export function About() {
  const frontendSkills = SKILLS.filter(skill => skill.category === 'frontend');
  const backendSkills = SKILLS.filter(skill => skill.category === 'backend');
  const toolSkills = SKILLS.filter(skill => skill.category === 'tools');

  return (
    <div id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* About Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-300 mb-6">
              I'm a passionate web developer with a strong foundation in modern web technologies. 
              Currently pursuing my Bachelor's degree in Software Engineering, I specialize in 
              creating responsive, user-friendly web applications that deliver exceptional user experiences.
            </p>
            <p className="text-lg text-gray-400">
              My journey in web development started with curiosity and has evolved into a deep passion 
              for creating digital solutions that make a difference. I believe in continuous learning 
              and staying up-to-date with the latest technologies and best practices.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <div className="bg-[#1a1a1a] p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-[#3498db] mb-4">Frontend</h4>
              <div className="space-y-3">
                {frontendSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-[#3498db] h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="bg-[#1a1a1a] p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-[#3498db] mb-4">Backend</h4>
              <div className="space-y-3">
                {backendSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-[#3498db] h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-[#1a1a1a] p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-[#3498db] mb-4">Tools</h4>
              <div className="space-y-3">
                {toolSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-[#3498db] h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        {/* <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Experience</h3>
          <div className="space-y-8">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="bg-[#1a1a1a] p-6 rounded-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-[#3498db]">{exp.title}</h4>
                    <p className="text-lg text-gray-300">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-400 mt-2 md:mt-0">{exp.duration}</span>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-[#3498db] bg-opacity-20 text-[#3498db] rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Education Section */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Education</h3>
          <div className="space-y-8">
            {EDUCATION.map((edu) => (
              <div key={edu.id} className="bg-[#1a1a1a] p-6 rounded-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-[#3498db]">{edu.degree}</h4>
                    <p className="text-lg text-gray-300">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-gray-400 mt-2 md:mt-0">{edu.duration}</span>
                </div>
                {edu.description && (
                  <p className="text-gray-300">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
