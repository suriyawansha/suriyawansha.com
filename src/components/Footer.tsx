import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const iconMap = {
  GithubIcon: GithubIcon,
  LinkedinIcon: LinkedinIcon,
  TwitterIcon: TwitterIcon,
  MailIcon: MailIcon,
};

export function Footer() {
  return (
    
    <footer id ="footer" className="bg-[#1a1a1a] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#3498db]">Kavindu Suriyawansha</h3>
            <p className="text-gray-400">
              Passionate web developer creating modern, responsive websites and applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="about" className="text-gray-400 hover:text-[#3498db] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="services" className="text-gray-400 hover:text-[#3498db] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="portfolio" className="text-gray-400 hover:text-[#3498db] transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="contact" className="text-gray-400 hover:text-[#3498db] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-2">
              <p className="text-gray-400">{CONTACT_INFO.email}</p>
              {/* <p className="text-gray-400">{CONTACT_INFO.location}</p> */}
            </div>
            <div className="flex space-x-4">
              {CONTACT_INFO.socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#3498db] transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} - suriyawansha.me     -     All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
