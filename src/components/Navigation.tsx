import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import logo from '../images/ChatGPT Image Apr 4, 2025, 10_21_03 PM.png';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const controls = useAnimation();

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/services", name: "Services" },
    { path: "/book", name: "Book Appointment" },
    { path: "/testimonials", name: "Testimonials" },
    { path: "/blogs", name: "Blogs" },
    { path: "/contact", name: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
        // Scroll down: hide navbar
        controls.start({ y: "-100%" });
      } else {
        // Scroll up: show navbar
        controls.start({ y: "0%" });
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, controls]);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        animate={controls}
        transition={{ duration: 0.3 }}
        className="bg-white shadow-md fixed top-0 w-full z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center group"
              onClick={() => setIsOpen(false)}
            >
              <img
                src={logo}
                alt="Logo"
                className="h-9 w-9 transition-transform group-hover:rotate-12"
              />
              <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-[#1EB053] to-[#169544] bg-clip-text text-transparent">
                Wisdom Dental Clinic
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <Link
                    to={link.path}
                    className="px-3 py-2 text-gray-700 hover:text-[#1EB053] font-medium 
                      transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F9D77E] 
                      transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-[#F9D77E] transition-colors"
              >
                {isOpen ? (
                  <X className="h-7 w-7 text-[#1EB053]" />
                ) : (
                  <Menu className="h-7 w-7 text-[#1EB053]" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#F9D77E]/10 backdrop-blur-sm"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="block px-4 py-3 rounded-lg text-gray-700 
                      hover:bg-[#F9D77E]/30 hover:text-[#1EB053] font-medium transition-colors"
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

      {/* 👇 Ensure page content doesn't get hidden */}
      <div className="h-20" />
    </>
  );
}


// import  { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';
// import { motion } from 'framer-motion';

// export function Navigation() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState('');

//   const navLinks = [
//     { path: "/", name: "Home" },
//     { path: "/services", name: "Services" },
//     { path: "/book", name: "Book Appointment" },
//     { path: "/testimonials", name: "Testimonials" },
//     { path: "/contact", name: "Contact" }
//   ];

//   return (
//     <motion.nav 
//       className="bg-white shadow-md"
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-20 items-center">
//           {/* Logo */}
//           <Link 
//             to="/" 
//             className="flex items-center group"
//             onMouseEnter={() => setActiveLink('')}
//           >
//             {/* <Tooth className="h-9 w-9 text-[#1EB053] transition-transform group-hover:rotate-12" /> */}
//             <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-[#1EB053] to-[#169544] bg-clip-text text-transparent">
//               DentalCare
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <motion.div
//                 key={link.name}
//                 whileHover={{ scale: 1.05 }}
//                 className="relative"
//               >
//                 <Link
//                   to={link.path}
//                   className={`px-3 py-2 text-sm font-medium ${
//                     activeLink === link.path 
//                       ? 'text-[#1EB053] font-semibold'
//                       : 'text-gray-700 hover:text-[#1EB053]'
//                   } transition-colors`}
//                   onMouseEnter={() => setActiveLink(link.path)}
//                   onMouseLeave={() => setActiveLink('')}
//                 >
//                   {link.name}
//                   {activeLink === link.path && (
//                     <motion.div
//                       className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F9D77E]"
//                       layoutId="underline"
//                       transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
//                     />
//                   )}
//                 </Link>
//               </motion.div>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 rounded-lg hover:bg-[#F9D77E] transition-colors"
//             >
//               {isOpen ? (
//                 <X className="h-7 w-7 text-[#1EB053]" />
//               ) : (
//                 <Menu className="h-7 w-7 text-[#1EB053]" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="md:hidden bg-[#F9D77E]/10 backdrop-blur-sm"
//         >
//           <div className="px-4 pt-2 pb-4 space-y-2">
//             {navLinks.map((link) => (
//               <motion.div
//                 key={link.name}
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ type: 'spring', stiffness: 300 }}
//               >
//                 <Link
//                   to={link.path}
//                   className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-[#F9D77E]/30 hover:text-[#1EB053] font-medium transition-colors"
//                   onClick={() => {
//                     setIsOpen(false);
//                     setActiveLink(link.path);
//                   }}
//                 >
//                   {link.name}
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       )}
//     </motion.nav>
//   );
// }