import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { CONTACT_INFO } from '../constants';



const iconMap = {
  GithubIcon: Github,
  LinkedinIcon: Linkedin,
  TwitterIcon: Twitter,
  MailIcon: Mail,
};

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Honeypot field to deter bots
  const [website, setWebsite] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Basic validation
      const trimmedName = formData.name.trim();
      const trimmedEmail = formData.email.trim();
      const trimmedSubject = formData.subject.trim();
      const trimmedMessage = formData.message.trim();

      if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
        throw new Error('Please fill in all required fields.');
      }

      // Simple email pattern
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!emailRegex.test(trimmedEmail)) {
        throw new Error('Please enter a valid email address.');
      }

      // Honeypot: if filled, treat as spam
      if (website) {
        throw new Error('Spam detected.');
      }

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;
      const toEmail = import.meta.env.VITE_CONTACT_TO_EMAIL as string;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Missing EmailJS configuration.');
      }

      const templateParams = {
        from_name: trimmedName,
        from_email: trimmedEmail,
        subject: trimmedSubject,
        message: trimmedMessage,
        to_email: toEmail || 'suriyawansha.me@gmail.com',
      };

      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey,
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 4000);
    }
  };

  return (
    <div id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Hire me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you. Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-[#3498db] p-3 rounded-full">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-300">{CONTACT_INFO.email}</p>
                </div>
              </div>

              {/* <div className="flex items-center space-x-4">
                <div className="bg-[#3498db] p-3 rounded-full">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-300">{CONTACT_INFO.phone}</p>
                </div>
              </div> */}

              {/* <div className="flex items-center space-x-4">
                <div className="bg-[#3498db] p-3 rounded-full">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-300">{CONTACT_INFO.location}</p>
                </div>
              </div> */}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {CONTACT_INFO.socialLinks.map((social) => {
                  const IconComponent = iconMap[social.icon as keyof typeof iconMap];
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#1a1a1a] p-3 rounded-full hover:bg-[#3498db] hover:text-white transition-all duration-300"
                      aria-label={social.name}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#1a1a1a] p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Honeypot field (hidden for real users) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  autoComplete="off"
                  tabIndex={-1}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-600 rounded-md focus:outline-none focus:border-[#3498db] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-600 rounded-md focus:outline-none focus:border-[#3498db] transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-600 rounded-md focus:outline-none focus:border-[#3498db] transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#2a2a2a] border border-gray-600 rounded-md focus:outline-none focus:border-[#3498db] transition-colors resize-none"
                  placeholder="Tell me about your project or question..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#3498db] hover:bg-[#2980b9] disabled:bg-gray-600 text-white py-3 px-6 rounded-md font-medium transition duration-300 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-600 bg-opacity-20 border border-green-600 text-green-400 px-4 py-3 rounded-md">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-600 bg-opacity-20 border border-red-600 text-red-400 px-4 py-3 rounded-md">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
