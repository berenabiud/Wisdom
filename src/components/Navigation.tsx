import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import logo from '../images/ChatGPT Image Apr 4, 2025, 10_21_03 PM.png';

export function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const controls = useAnimation();
  const [activePath, setActivePath] = useState(location.pathname);

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/services", name: "Services" },
    { path: "/book", name: "Book Appointment" },
    { path: "/testimonials", name: "Testimonials" },
    { path: "/blogs", name: "Blogs" },
    { path: "/about-us", name: "About Us" },
    { path: "/contact", name: "Contact Us" },
  ];

  useEffect(() => {
    setActivePath(location.pathname);
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
        controls.start({ y: "-100%" });
      } else {
        controls.start({ y: "0%" });
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, controls]);

  const isActive = (path: string) => activePath === path;

  return (
    <>
      <motion.nav
        animate={controls}
        transition={{ duration: 0.3 }}
        className="fixed top-0 w-full z-50"
      >
        {/* Centered container */}
        <div className="flex justify-center px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-full mt-4 max-w-7xl w-full">
            <div className="flex justify-between h-28 items-center px-6">
              {/* Logo */}
              <Link
                to="/"
                className="flex items-center group"
                onClick={() => setIsOpen(false)}
              >
                <img
                  src={logo}
                  alt="Logo"
                  className="h-18 w-20 transition-transform group-hover:rotate-12"
                />
                <span className="ml-3 text-xl font-bold bg-gradient-to-r from-[#1EB053] to-[#169544] bg-clip-text text-transparent">
                  Wisdom Dental
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-4">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    whileHover={{ scale: 1.05 }}
                    className="relative"
                  >
                    <Link
                      to={link.path}
                      className={`px-3 py-2 text-sm font-medium transition-colors relative group ${
                        isActive(link.path)
                          ? 'text-[#1EB053]'
                          : 'text-gray-600 hover:text-[#1EB053]'
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-[#F9D77E] transition-all duration-300 ${
                          isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-full hover:bg-[#F9D77E]/20 transition-colors"
                >
                  {isOpen ? (
                    <X className="h-6 w-6 text-[#1EB053]" />
                  ) : (
                    <Menu className="h-6 w-6 text-[#1EB053]" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white mx-4 mt-2 rounded-xl shadow-lg"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive(link.path)
                        ? 'bg-[#F9D77E]/20 text-[#1EB053]'
                        : 'text-gray-600 hover:bg-[#F9D77E]/10 hover:text-[#1EB053]'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      <div className="h-20" />
    </>
  );
}