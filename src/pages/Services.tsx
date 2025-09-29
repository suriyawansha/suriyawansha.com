import React from 'react';
import { Code, Palette, Smartphone, Search, Zap, Shield } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies like React, TypeScript, and Node.js. Responsive, fast, and user-friendly.',
    features: ['React & Node.js', 'TypeScript', 'Responsive Design', 'Performance Optimization']
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that provide exceptional user experiences across all devices.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
  },
  // {
  //   icon: Smartphone,
  //   title: 'Mobile-First Development',
  //   description: 'Mobile-optimized websites and progressive web apps that work seamlessly on all screen sizes.',
  //   features: ['Responsive Design', 'PWA Development', 'Touch Optimization', 'Cross-Platform']
  // },
  // {
  //   icon: Search,
  //   title: 'SEO Optimization',
  //   description: 'Search engine optimized websites that rank well and drive organic traffic to your business.',
  //   features: ['Technical SEO', 'Content Optimization', 'Page Speed', 'Analytics']
  // },
  // {
  //   icon: Zap,
  //   title: 'Performance Optimization',
  //   description: 'Fast-loading websites with optimized performance for better user experience and search rankings.',
  //   features: ['Code Splitting', 'Image Optimization', 'Caching Strategies', 'Bundle Optimization']
  // },
  {
    icon: Shield,
    title: 'Maintenance & Support',
    description: 'Ongoing maintenance and support to keep your website secure, updated, and running smoothly.',
    features: ['Security Updates', 'Bug Fixes', 'Feature Updates', '24/7 Support']
  }
];

export function Services() {
  return (
    <div id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Services I Offer</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I provide comprehensive web development services to help you build, 
            launch, and maintain your digital presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-[#1a1a1a] p-8 rounded-lg hover:bg-[#2a2a2a] transition-all duration-300 group"
            >
              <div className="text-[#3498db] mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <div className="w-2 h-2 bg-[#3498db] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">My Development Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3498db] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Discovery</h4>
              <p className="text-gray-400 text-sm">
                Understanding your requirements, goals, and target audience.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3498db] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Planning</h4>
              <p className="text-gray-400 text-sm">
                Creating wireframes, user flows, and technical specifications.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3498db] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Development</h4>
              <p className="text-gray-400 text-sm">
                Building your project with clean, maintainable code.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3498db] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Launch</h4>
              <p className="text-gray-400 text-sm">
                Testing, deployment, and ongoing support.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-[#1a1a1a] p-12 rounded-lg">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and bring your ideas to life with modern web technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="contact"
              className="border border-[#3498db] text-[#3498db] hover:bg-[#3498db] hover:text-white px-8 py-3 rounded-md font-medium transition duration-300"
            >
              Hire me
            </a>
            <a 
              href="portfolio"
              className="border border-[#3498db] text-[#3498db] hover:bg-[#3498db] hover:text-white px-8 py-3 rounded-md font-medium transition duration-300"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
