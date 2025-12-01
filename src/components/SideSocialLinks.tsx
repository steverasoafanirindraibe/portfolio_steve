'use client';
import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter, Mail } from 'lucide-react';

const SideSocialLinks = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/steve",
      label: "LinkedIn",
      color: "hover:text-blue-500"
    },
    {
      icon: Github,
      href: "https://github.com/steve",
      label: "GitHub",
      color: "hover:text-gray-700 dark:hover:text-white"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/steve",
      label: "Twitter",
      color: "hover:text-sky-500"
    },
    {
      icon: Mail,
      href: "mailto:steve@example.com",
      label: "Email",
      color: "hover:text-teal-500"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed left-6 top-1/4 transform -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="flex flex-col items-center space-y-6">
        {/* Ligne verticale */}
        <div className="w-0.5 h-32 bg-teal-500/30 rounded-full"></div>
        
        {/* Liens sociaux */}
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
            whileHover={{ 
              scale: 1.2,
              y: -2
            }}
            className={`text-gray-600 dark:text-gray-400 transition-all duration-300 ${social.color}`}
            aria-label={social.label}
          >
            <social.icon size={20} />
          </motion.a>
        ))}
        
        {/* Ligne verticale */}
        <div className="w-0.5 h-32 bg-teal-500/30 rounded-full"></div>
      </div>
    </motion.div>
  );
};

export default SideSocialLinks;