import React from "react";
import { Github, Linkedin, Heart, MessageCircle } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/aveshm-479",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/avesh-memon-bb2301186",
      label: "LinkedIn",
    },
    {
      icon: <MessageCircle size={20} />,
      href: "https://wa.me/918488050759",
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                AM
              </div>
              <span className="font-bold text-lg">Avesh Memon</span>
            </div>
            <p className="text-secondary-400 text-sm">
              Node.js developer crafting high-availability APIs, serverless workflows, and integration-heavy backends.
            </p>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Technologies</h3>
            <ul className="space-y-2">
              <li className="text-secondary-400">Node.js & TypeScript</li>
              <li className="text-secondary-400">Serverless (AWS Lambda)</li>
              <li className="text-secondary-400">Fastify · NestJS · Ts.ED</li>
              <li className="text-secondary-400">Prisma · tRPC · GraphQL</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Get in Touch</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary-800 text-secondary-400 hover:text-white hover:bg-secondary-700 transition-all duration-200"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-secondary-400 text-sm">
            © {currentYear} Avesh Memon. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-secondary-400 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>using React & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
