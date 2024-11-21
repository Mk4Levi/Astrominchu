import Link from "next/link";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com/astrominchu",
      aria: "Facebook",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/astrominchu",
      aria: "Twitter",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/astrominchu",
      aria: "Instagram",
    },
    {
      icon: Github,
      href: "https://github.com/astrominchu",
      aria: "GitHub",
    },
  ];

  const quickLinks = [
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white border-b-2 border-blue-500 pb-2">
              About AstroMinchu
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Exploring the cosmos, one celestial wonder at a time. We are passionate about bringing
              the magic of astronomy closer to everyone, inspiring curiosity and awe for the vast
              universe around us.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.aria}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.aria}
                  className="text-gray-300 hover:text-white transition-colors duration-300 
                             hover:scale-110 transform"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white border-b-2 border-blue-500 pb-2">
              Quick Navigation
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-white hover:pl-2 
                             transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">→</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white border-b-2 border-blue-500 pb-2">
              Get In Touch
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-white">Email:</strong>{" "}
                <a
                  href="mailto:astrominchu@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  astrominchu@gmail.com
                </a>
              </p>
              <p>
                <strong className="text-white">Phone:</strong>{" "}
                <a href="tel:+918976543201" className="hover:text-blue-400 transition-colors">
                  (+91) 89765-43201
                </a>
              </p>
              <p>
                <strong className="text-white">Location:</strong> Bangalore, India
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} AstroMinchu | All Rights Reserved. Exploring the
            Universe and Inspiring Minds.
          </p>
        </div>
      </div>
    </footer>
  );
}
