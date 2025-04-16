// import { motion } from 'framer-motion';
// import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

// export function Footer() {
//   return (
//     <motion.footer
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//       className="relative"
//       style={{
//         background: 'linear-gradient(15deg, #F9D77E22 0%, #FFFFFF 50%)',
//         borderTop: '3px solid #1EB053',
//         boxShadow: '0 -4px 30px -10px #1EB05333'
//       }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
//           {/* Company Info */}
//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.2 }}
//           >
//             <div className="p-6 rounded-xl bg-white shadow-lg border border-[#F9D77E]">
//               <h3 className="text-lg font-bold text-[#1EB053] mb-4">Dental Care</h3>
//               <p className="text-gray-700 text-sm leading-relaxed">
//                 Committed to providing exceptional dental services with care and precision.
//               </p>
//               <div className="mt-4 flex space-x-3">
//                 {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
//                   <motion.a
//                     key={index}
//                     href="#"
//                     whileHover={{ y: -3 }}
//                     className="p-2 rounded-full bg-[#F9D77E] text-[#1EB053] hover:bg-[#1EB053] hover:text-white transition-all"
//                   >
//                     <Icon className="w-5 h-5" />
//                   </motion.a>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* Services */}
//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.4 }}
//           >
//             <div className="p-6 bg-white rounded-xl shadow-lg border border-[#F9D77E]">
//               <h4 className="text-lg font-semibold text-[#1EB053] mb-4">Services</h4>
//               <ul className="space-y-3">
//                 {['General Dentistry', 'Orthodontics', 'Cosmetic', 'Implants', 'Pediatric'].map((item, index) => (
//                   <li key={index}>
//                     <a href="#" className="flex items-center group">
//                       <span className="w-2 h-2 bg-[#F9D77E] rounded-full mr-2 group-hover:bg-[#1EB053] transition-colors" />
//                       <span className="text-gray-700 text-sm group-hover:text-[#1EB053] transition-colors">
//                         {item}
//                       </span>
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.6 }}
//           >
//             <div className="p-6 bg-white rounded-xl shadow-lg border border-[#F9D77E]">
//               <h4 className="text-lg font-semibold text-[#1EB053] mb-4">Quick Links</h4>
//               <ul className="space-y-3">
//                 {['About Us', 'Services', 'Doctors', 'Testimonials', 'Contact'].map((item, index) => (
//                   <li key={index}>
//                     <a href="#" className="flex items-center group">
//                       <div className="w-3 h-px bg-[#F9D77E] mr-2 group-hover:w-6 group-hover:bg-[#1EB053] transition-all" />
//                       <span className="text-gray-700 text-sm group-hover:text-[#1EB053] transition-colors">
//                         {item}
//                       </span>
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>

//           {/* Contact Info */}
//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.8 }}
//           >
//             <div className="p-6 bg-white rounded-xl shadow-lg border border-[#F9D77E]">
//               <h4 className="text-lg font-semibold text-[#1EB053] mb-4">Contact Info</h4>
//               <div className="space-y-4">
//                 <div className="flex items-start">
//                   <div className="p-2 bg-[#1EB053] rounded-lg mr-3">
//                     <MapPin className="w-5 h-5 text-white" />
//                   </div>
//                   <p className="text-gray-700 text-sm">123 Dental Street, NY 10001</p>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="p-2 bg-[#1EB053] rounded-lg mr-3">
//                     <Phone className="w-5 h-5 text-white" />
//                   </div>
//                   <p className="text-gray-700 text-sm">(555) 123-4567</p>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="p-2 bg-[#1EB053] rounded-lg mr-3">
//                     <Mail className="w-5 h-5 text-white" />
//                   </div>
//                   <p className="text-gray-700 text-sm">info@dentalcare.com</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Copyright */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1 }}
//           className="pt-8 text-center"
//         >
//           <div className="border-t border-[#1EB053]/20 pt-8">
//             <p className="text-sm text-gray-700">
//               © {new Date().getFullYear()} Dental Care. All rights reserved.
//             </p>
//             <div className="mt-2 flex justify-center space-x-4">
//               {['Privacy Policy', 'Terms of Service', 'Accessibility'].map((item, index) => (
//                 <a
//                   key={index}
//                   href="#"
//                   className="text-gray-700 text-sm hover:text-[#1EB053] transition-colors"
//                 >
//                   {item}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </motion.footer>
//   );
// }


// import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

// export function Footer() {
//   return (
//     <footer className="bg-[#1B4536] text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
//           {/* Company Info */}
//           <div className="space-y-4">
//             <div className="flex items-center">
//               <span className="text-2xl font-bold text-[#F9D77E]">DentalCare</span>
//             </div>
//             <p className="text-sm text-gray-300">
//               Providing exceptional dental care with compassion and advanced technology since 2010.
//             </p>
//             <div className="flex space-x-4">
//               {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
//                 <a
//                   key={index}
//                   href="#"
//                   className="text-[#F9D77E] hover:text-white transition-colors"
//                 >
//                   <Icon className="w-5 h-5" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Services */}
//           <div className="space-y-4">
//             <h4 className="text-lg font-semibold text-[#F9D77E] mb-2">Our Services</h4>
//             <ul className="space-y-2">
//               {['General Dentistry', 'Cosmetic Dentistry', 'Orthodontics', 'Pediatric Care', 'Dental Implants'].map((item, index) => (
//                 <li key={index}>
//                   <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-4">
//             <h4 className="text-lg font-semibold text-[#F9D77E] mb-2">Quick Links</h4>
//             <ul className="space-y-2">
//               {['About Us', 'Meet the Team', 'Patient Reviews', 'Blog', 'Careers'].map((item, index) => (
//                 <li key={index}>
//                   <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-4">
//             <h4 className="text-lg font-semibold text-[#F9D77E] mb-2">Contact Us</h4>
//             <div className="space-y-3">
//               <div className="flex items-start">
//                 <MapPin className="w-5 h-5 text-[#F9D77E] mt-1 flex-shrink-0" />
//                 <p className="ml-2 text-sm text-gray-300">Nairobi,Opposite Cooperative<br/>Kenya, NY 10001</p>
//               </div>
//               <div className="flex items-start">
//                 <Phone className="w-5 h-5 text-[#F9D77E] mt-1 flex-shrink-0" />
//                 <p className="ml-2 text-sm text-gray-300">0728732301</p>
//               </div>
//               <div className="flex items-start">
//                 <Mail className="w-5 h-5 text-[#F9D77E] mt-1 flex-shrink-0" />
//                 <p className="ml-2 text-sm text-gray-300">obadiakimmaasai03@gmail.com</p>
//               </div>
//             </div>
//           </div>
//           {/* Newsletter */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
//             <form className="flex flex-col">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="mb-3 p-2 rounded text-gray-900"
//                 required
//               />
//               <button
//                 type="submit"
//                 className="bg-white text-blue-900 py-2 px-4 rounded hover:bg-blue-100 transition"
//               >
//                 Subscribe
//               </button>
//             </form>
//             <p className="mt-4 text-sm">Get dental health tips and special offers</p>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="pt-8 border-t border-[#F9D77E]/20 text-center">
//           <p className="text-sm text-gray-300">
//             © {new Date().getFullYear()} Wisdom Dental Clinc. All rights reserved.
//           </p>
//           <div className="mt-2 flex flex-wrap justify-center space-x-4">
//             {['Privacy Policy', 'Terms of Service', 'Accessibility'].map((item, index) => (
//               <a
//                 key={index}
//                 href="#"
//                 className="text-sm text-gray-300 hover:text-white transition-colors"
//               >
//                 {item}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-[#1B4536] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-[#F9D77E]">DentalCare</span>
            </div>
            <p className="text-sm text-gray-300">
              Providing exceptional dental care with compassion and advanced technology since 2010.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
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
            About Us 
                  </a>
            <ul className="space-y-2">
              {['About Us', 'Meet the Team', 'Patient Reviews', 'Blog', 'Careers'].map((item, index) => (
                <li key={index}>
                  <a href="/blogs" className="text-sm text-gray-300 hover:text-white transition-colors">
                    {item}
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
            © {new Date().getFullYear()} Wisdom Dental Clinic. All rights reserved.
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