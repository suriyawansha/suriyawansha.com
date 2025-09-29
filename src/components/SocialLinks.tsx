import React from 'react';
import { GithubIcon, TwitterIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const iconMap = {
  GithubIcon: GithubIcon,
  LinkedinIcon: LinkedinIcon,
  TwitterIcon: TwitterIcon,
  MailIcon: MailIcon,
};

export function SocialLinks() {
  return (
    <div className="flex justify-center space-x-6 py-8">
      {SOCIAL_LINKS.map((social) => {
        const IconComponent = iconMap[social.icon as keyof typeof iconMap];
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#3498db] transition-all duration-300 transform hover:scale-110"
            aria-label={social.name}
          >
            <IconComponent size={24} />
          </a>
        );
      })}
    </div>
  );
}