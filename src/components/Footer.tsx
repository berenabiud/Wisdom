import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const CustomTiktokIcon = ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.527V7.79a4.831 4.831 0 0 1-1.003-.104z"
      />
    </svg>
  );

  const services = [
    'General Dentistry',
    'Cosmetic Dentistry',
    'Orthodontics',
    'Pediatric Care',
    'Dental Implants'
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about-us' },
    { name: 'Meet the Team', path: '/about-us' },
    { name: 'Patient Reviews', path: '/testimonials' },
    { name: 'Blog', path: '/blogs' }
  ];

  const legalLinks = [
    'Privacy Policy',
    'Terms of Service',
    'Accessibility'
  ];

  const socialLinks = [
    { 
      Icon: Facebook, 
      url: 'https://www.facebook.com/WisdomDentalClinicKe' 
    },
    { 
      Icon: Instagram, 
      url: 'https://www.instagram.com/wisdom.dentalclinic?igsh=MWl6MXNzeDRlcnpzaw==' 
    },
    { 
      Icon: CustomTiktokIcon,
      url: 'https://www.tiktok.com/@wisdomdentalclinic?_t=ZM-8vy7DDBiQ90&_r=1' 
    }
  ];

  return (
    <footer className="bg-[rgba(27,69,54,0.85)] backdrop-blur-sm text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
          {/* Company Info */}
          <div className="space-y-3">
            <div className="flex items-center">
              <span className="text-xl font-semibold text-[#F9D77E]">Wisdom Dental Clinic</span>
            </div>
            <p className="text-xs text-gray-200">
              Providing exceptional dental care with compassion and advanced technology.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map(({ Icon, url }, index) => (
                <motion.a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="text-[#F9D77E] hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-2">
            <h4 className="text-base font-medium text-[#F9D77E]">Our Services</h4>
            <ul className="space-y-1">
              {services.map((item, index) => (
                <li key={index}>
                  <a href="/services" className="text-xs text-gray-200 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="text-base font-medium text-[#F9D77E]">Quick Links</h4>
            <ul className="space-y-1">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.path} 
                    className="text-xs text-gray-200 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <h4 className="text-base font-medium text-[#F9D77E]">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-[#F9D77E] mt-0.5 flex-shrink-0" />
                <p className="ml-2 text-xs text-gray-200">NHC House 1st floor, opposite cooperative bank, agha khan walk, Kenya</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-[#F9D77E] flex-shrink-0" />
                <p className="ml-2 text-xs text-gray-200">0714 270 997, 0791 531 408</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-[#F9D77E] flex-shrink-0" />
                <p className="ml-2 text-xs text-gray-200">wisdomdentalclinic0@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-2">
            <h4 className="text-base font-medium text-[#F9D77E]">Newsletter</h4>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 text-xs rounded border border-[#F9D77E]/50 focus:outline-none focus:ring-1 focus:ring-[#1EB053] text-gray-900"
                required
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="bg-[#1EB053] text-white py-2 px-4 rounded hover:bg-[#169544] transition-colors text-xs font-medium"
              >
                Subscribe
              </motion.button>
            </form>
            <p className="text-xs text-gray-200 mt-1">
              Get dental health tips and special offers
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-[#F9D77E]/10 text-center">
          <p className="text-xs text-gray-300">
            © {new Date().getFullYear()} Wisdom Dental Clinic Limited. All rights reserved.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            {legalLinks.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-xs text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}