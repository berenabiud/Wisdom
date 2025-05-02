
import { MapPin, Phone, Mail, Facebook,  Instagram,  } from 'lucide-react';
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
  return (
    <footer className="bg-[#1B4536] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-[#F9D77E]">Wisdom Dental Clinic Limited</span>
            </div>
            <p className="text-sm text-gray-300">
              Providing exceptional dental care with compassion and advanced technology.
            </p>
            <div className="flex space-x-4">
  {[
    { 
      Icon: Facebook, 
      url: 'https://www.facebook.com/WisdomDentalClinicKe' 
    },
    { 
      Icon: Instagram, 
      url: 'https://www.instagram.com/wisdom.dentalclinic?igsh=MWl6MXNzeDRlcnpzaw==' 
    },
    { 
      Icon: CustomTiktokIcon,  // Use our custom component
      url: 'https://www.tiktok.com/@wisdomdentalclinic?_t=ZM-8vy7DDBiQ90&_r=1' 
    }
  ].map(({ Icon, url }, index) => (
    <motion.a
      key={index}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2 }}
      className="text-[#F9D77E] hover:text-white transition-colors"
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  ))}
</div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#F9D77E] mb-2">Our Services</h4>
            <ul className="space-y-2">
              {['General Dentistry', 'Cosmetic Dentistry', 'Orthodontics', 'Pediatric Care', 'Dental Implants'].map((item, index) => (
                <li key={index}>
                  <a href="/services" className="text-sm text-gray-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#F9D77E] mb-2">Quick Links</h4>
            {/* <li <a>href="/blogs" className="text-sm text-gray-300 hover:text-white transition-colors"</a>>About Us</li> */}
            <a href="/" className="text-sm text-gray-300 hover:text-white transition-colors">
            Home 
                  </a>
                  <ul className="space-y-2">
  {[
    { name: 'About Us', path: '/about-us' },
    { name: 'Meet the Team', path: '/about-us' },
    { name: 'Patient Reviews', path: '/testimonials' },
    { name: 'Blog', path: '/blogs' },
    // { name: 'Careers', path: '/services' }
  ].map((item, index) => (
    <li key={index}>
      <a 
        href={item.path} 
        className="text-sm text-gray-300 hover:text-white transition-colors"
      >
        {item.name}
      </a>
    </li>
  ))}
</ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#F9D77E] mb-2">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#F9D77E] mt-1 flex-shrink-0" />
                <p className="ml-2 text-sm text-gray-300">NHC House 1st floor , opposite cooperative bank, agha khan walk <br/>Kenya</p>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-[#F9D77E] mt-1 flex-shrink-0" />
                <p className="ml-2 text-sm text-gray-300">0714 270 997 ,0791 531 408</p>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-[#F9D77E] mt-1 flex-shrink-0" />
                <p className="ml-2 text-sm text-gray-300">wisdomdentalclinic0@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#F9D77E] mb-2">Newsletter</h4>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 rounded-lg border border-[#F9D77E] focus:outline-none focus:ring-2 focus:ring-[#1EB053] text-gray-900"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-[#1EB053] text-white py-3 px-6 rounded-lg hover:bg-[#169544] transition-colors font-medium"
              >
                Subscribe
              </motion.button>
            </form>
            <p className="mt-2 text-sm text-gray-300">
              Get dental health tips and special offers
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#F9D77E]/20 text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear() }Wisdom Dental Clinic Limited. All rights reserved.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            {['Privacy Policy', 'Terms of Service', 'Accessibility'].map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-sm text-gray-300 hover:text-white transition-colors"
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