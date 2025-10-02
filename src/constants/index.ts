import { SocialLink, Project, Skill, Experience, Education } from '../types';
import placeholderProject from '../assets/images/placeholder-project.jpg';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/kavindu-suriyawansha-5064b5282/',
    icon: 'LinkedinIcon'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/suriyawansha',
    icon: 'GithubIcon'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/kavindu_s',
    icon: 'TwitterIcon'
  },
  {
    name: 'Email',
    url: 'mailto:suriyawansha.me@gmail.com',
    icon: 'MailIcon'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
    image: placeholderProject,
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/kavindu/ecommerce',
    featured: true
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: placeholderProject,
    technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL'],
    liveUrl: 'https://example-tasks.com',
    githubUrl: 'https://github.com/kavindu/taskmanager',
    featured: true
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard that displays current weather and forecasts for multiple cities with interactive charts and maps.',
    image: placeholderProject,
    technologies: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
    liveUrl: 'https://example-weather.com',
    githubUrl: 'https://github.com/kavindu/weather-dashboard',
    featured: false
  }
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'React', level: 90, category: 'frontend' },
  //{ name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'HTML5', level: 95, category: 'frontend' },
  { name: 'CSS3', level: 90, category: 'frontend' },
  //{ name: 'Tailwind CSS', level: 85, category: 'frontend' },
  //{ name: 'Next.js', level: 80, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 80, category: 'backend' },
  // { name: 'Express.js', level: 75, category: 'backend' },
  // { name: 'MongoDB', level: 70, category: 'backend' },
  // { name: 'PostgreSQL', level: 65, category: 'backend' },
  
  // Tools
  { name: 'Git', level: 85, category: 'tools' },
  // { name: 'Vite', level: 80, category: 'tools' },
  // { name: 'Webpack', level: 70, category: 'tools' },
  // { name: 'Docker', level: 60, category: 'tools' }
];

export const EXPERIENCES: Experience[] = [
  // {
  //   id: '1',
  //   title: 'Frontend Developer Intern',
  //   company: 'Tech Solutions Inc.',
  //   duration: 'Jan 2024 - Present',
  //   description: 'Developing responsive web applications using React and TypeScript. Collaborating with cross-functional teams to deliver high-quality user experiences.',
  //   technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Git']
  // },
  // {
  //   id: '2',
  //   title: 'Web Development Freelancer',
  //   company: 'Self-Employed',
  //   duration: 'Jun 2023 - Dec 2023',
  //   description: 'Created custom websites for small businesses and individuals. Specialized in responsive design and modern web technologies.',
  //   technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
  // }
];

export const EDUCATION: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Science (BSc) in Software Engineering',
    institution: 'National Institute of Business Management (NIBM)',
    duration: '2024 - 2028',
    description: 'Focused on web development, software architecture, and modern programming practices.'
  }
];

export const CONTACT_INFO = {
  email: 'suriyawansha.me@gmail.com',
  //phone: '+94 77 123 4567',
  //location: 'Colombo, Sri Lanka',
  socialLinks: SOCIAL_LINKS
};
