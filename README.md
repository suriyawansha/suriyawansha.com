# Kavindu Suriyawansha - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Optimized for speed and performance
- **SEO Friendly**: Proper meta tags and semantic HTML
- **TypeScript**: Full type safety throughout the application
- **Accessible**: Built with accessibility in mind

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header with mobile menu
│   ├── Hero.tsx        # Hero section with call-to-action
│   ├── SocialLinks.tsx # Social media links
│   └── Footer.tsx      # Site footer with contact info
├── layouts/            # Layout components
│   └── Layout.tsx      # Main layout wrapper
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── About.tsx       # About page with skills and experience
│   ├── Services.tsx    # Services offered
│   ├── Portfolio.tsx   # Portfolio showcase
│   └── Contact.tsx     # Contact form and information
├── types/              # TypeScript type definitions
│   └── index.ts        # All type definitions
├── constants/          # Application constants
│   └── index.ts        # Data constants (projects, skills, etc.)
├── assets/             # Static assets
│   ├── images/         # Image files
│   └── icons/          # Icon files
└── App.tsx             # Main app component
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Vite** - Build tool and dev server

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd suriyawansha
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Contact Form Email Setup (EmailJS)

This project uses EmailJS to send contact form submissions directly to your email without a backend.

1) Create a free account at https://www.emailjs.com/

2) In EmailJS dashboard:
- Create an Email Service (e.g., Gmail)
- Create an Email Template with variables: `from_name`, `from_email`, `subject`, `message`, `to_email`
- Copy your Service ID, Template ID, and Public Key

3) Add these to your `.env` in the project root:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_CONTACT_TO_EMAIL=suriyawansha.me@gmail.com
```

4) Restart the dev server if it’s running.

The contact form at `/contact` will now send messages to your configured email.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📱 Pages

- **Home** (`/`) - Hero section with introduction
- **About** (`/about`) - Skills, experience, and education
- **Services** (`/services`) - Services offered and process
- **Portfolio** (`/portfolio`) - Project showcase with filtering
- **Contact** (`/contact`) - Contact form and information

## 🎨 Customization

### Updating Personal Information

Edit the constants file at `src/constants/index.ts` to update:
- Personal information
- Social media links
- Skills and technologies
- Work experience
- Education
- Projects

### Styling

The website uses Tailwind CSS for styling. You can customize:
- Colors in the Tailwind config
- Component styles in individual component files
- Global styles in `src/index.css`

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/AppRouter.tsx`
3. Update navigation in `src/components/Header.tsx`

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Email**: kavindu@suriyawansha.me
- **LinkedIn**: [linkedin.com/in/kavindu-suriyawansha](https://linkedin.com/in/kavindu-suriyawansha)
- **GitHub**: [github.com/kavindu-suriyawansha](https://github.com/kavindu-suriyawansha)

---

Built with ❤️ by Kavindu Suriyawansha