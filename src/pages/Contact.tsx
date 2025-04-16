// import React from 'react';
// import { MapPin, Phone, Mail, Clock } from 'lucide-react';

// export function Contact() {
//   return (
//     <div className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             We're here to help! Reach out to us with any questions or concerns.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           <div className="bg-white rounded-lg shadow-md p-8">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">
//               Get in Touch
//             </h2>

//             <div className="space-y-6">
//               <div className="flex items-start">
//                 <MapPin className="h-6 w-6 text-blue-600 mt-1" />
//                 <div className="ml-4">
//                   <h3 className="text-lg font-medium text-gray-900">Address</h3>
//                   <p className="text-gray-600">
//                     123 Dental Street<br />
//                     New York, NY 10001
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <Phone className="h-6 w-6 text-blue-600 mt-1" />
//                 <div className="ml-4">
//                   <h3 className="text-lg font-medium text-gray-900">Phone</h3>
//                   <p className="text-gray-600">(555) 123-4567</p>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <Mail className="h-6 w-6 text-blue-600 mt-1" />
//                 <div className="ml-4">
//                   <h3 className="text-lg font-medium text-gray-900">Email</h3>
//                   <p className="text-gray-600">info@dentalcare.com</p>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <Clock className="h-6 w-6 text-blue-600 mt-1" />
//                 <div className="ml-4">
//                   <h3 className="text-lg font-medium text-gray-900">
//                     Office Hours
//                   </h3>
//                   <p className="text-gray-600">
//                     Monday - Friday: 8:00 AM - 6:00 PM<br />
//                     Saturday: 9:00 AM - 2:00 PM<br />
//                     Sunday: Closed
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-lg shadow-md p-8">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">
//               Send us a Message
//             </h2>

//             <form className="space-y-6">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   rows={4}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <div style={{ 
      background: '#f8fafc',
      padding: '4rem 0'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-[#1EB053] mb-4" style={{ textShadow: '0 2px 4px rgba(30,176,83,0.2)' }}>
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? We're always here to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
            style={{ border: '2px solid #F9D77E' }}
          >
            <div className="space-y-8">
              {contactItems.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div style={{
                    background: '#1EB053',
                    borderRadius: '12px',
                    padding: '14px',
                    marginRight: '1rem',
                    boxShadow: '0 4px 6px -1px rgba(30,176,83,0.2)'
                  }}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed" style={{ color: '#2d3748' }}>
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg"
            style={{ border: '2px solid #F9D77E' }}
          >
            <h2 className="text-3xl font-bold text-[#1EB053] mb-8">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1EB053] focus:ring-2 focus:ring-[#1EB053]/20 transition-all"
                    style={{ outline: 'none' }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1EB053] focus:ring-2 focus:ring-[#1EB053]/20 transition-all"
                    style={{ outline: 'none' }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  // rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1EB053] focus:ring-2 focus:ring-[#1EB053]/20 transition-all"
                  style={{ outline: 'none' }}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1EB053] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#169544] transition-all transform hover:scale-[1.02]"
                style={{ boxShadow: '0 4px 14px -2px rgba(30,176,83,0.4)' }}
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-16 rounded-2xl overflow-hidden shadow-lg"
          style={{ 
            height: '400px',
            border: '2px solid #F9D77E'
          }}
        >
          <iframe
            title="clinic-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.839011013198!2d36.8236504!3d-1.2887272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1186c9d8f2c1%3A0xb730e1dff8cd34d8!2sWisdom+Dental+Clinic+Limited!5e0!3m2!1sen!2ske!4v1699261116928!5m2!1sen!2ske"
            width="100%"
            height="100%"
            style={{ border: 0 }}
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}

const contactItems = [
  {
    icon: MapPin,
    title: "Address",
    content: "NHC House 1st floor , opposite cooperative bank, agha khan walk "
  },
  {
    icon: Phone,
    title: "Phone",
    content: " 0714 270 997 ,0791 531 408"
  },
  {
    icon: Mail,
    title: "Email",
    content: "wisdomdentalclinic0@gmail.com"
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Mon-Fri: 7:00AM - 7:00PM\nSaturday:700 AM - 4:00 PM\nSunday: Closed"
  }
];