// import { useState } from 'react';
// import { MapPin, Phone, Mail, Clock, ChevronDown } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// export function Contact() {
//   const [openIndex, setOpenIndex] = useState(null);

//   return (
//     <div style={{ 
//       background: '#f8fafc',
//       padding: '4rem 0'
//     }}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-5xl font-bold text-[#1EB053] mb-4" style={{ textShadow: '0 2px 4px rgba(30,176,83,0.2)' }}>
//             Get in Touch
//           </h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Have questions or need assistance? We're always here to help.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-3 gap-12">
//           {/* Contact Information Column */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="bg-white rounded-2xl p-8 shadow-lg"
//             style={{ border: '2px solid #F9D77E' }}
//           >
//             <div className="space-y-8">
//               {contactItems.map((item, index) => (
//                 <div key={index} className="flex items-start">
//                   <div style={{
//                     background: '#1EB053',
//                     borderRadius: '12px',
//                     padding: '14px',
//                     marginRight: '1rem',
//                     boxShadow: '0 4px 6px -1px rgba(30,176,83,0.2)'
//                   }}>
//                     <item.icon className="h-6 w-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
//                     <p className="text-gray-600 leading-relaxed" style={{ color: '#2d3748' }}>
//                       {item.content}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Contact Form Column */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg"
//             style={{ border: '2px solid #F9D77E' }}
//           >
//             <h2 className="text-3xl font-bold text-[#1EB053] mb-8">Send us a message</h2>
//             <form className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
//                   <input
//                     type="text"
//                     className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1EB053] focus:ring-2 focus:ring-[#1EB053]/20 transition-all"
//                     style={{ outline: 'none' }}
//                      placeholder="Enter Your Name"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//                   <input
//                     type="email"
//                     className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1EB053] focus:ring-2 focus:ring-[#1EB053]/20 transition-all"
//                     style={{ outline: 'none' }}
//                     placeholder='Enter Your Email'
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
//                 <textarea
//                   // rows="5"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1EB053] focus:ring-2 focus:ring-[#1EB053]/20 transition-all"
//                   style={{ outline: 'none' }}
//                   placeholder='Message'
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-[#1EB053] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#169544] transition-all transform hover:scale-[1.02]"
//                 style={{ boxShadow: '0 4px 14px -2px rgba(30,176,83,0.4)' }}
//               >
//                 Send Message
//               </button>
//             </form>
//           </motion.div>
//         </div>

//         {/* FAQ Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
//           style={{ border: '2px solid #F9D77E' }}
//         >
//           <h2 className="text-3xl font-bold text-[#1EB053] mb-8">Frequently Asked Questions</h2>
//           <div className="space-y-4">
//             {faqItems.map((item, index) => (
//               <div key={index} className="border-b border-gray-200 last:border-0 pb-4">
//                 <button
//                   onClick={() => setOpenIndex(openIndex === index ? null : index)}
//                   className="w-full flex justify-between items-center gap-4"
//                 >
//                   <span className="text-lg font-semibold text-gray-900 text-left">
//                     {item.question}
//                   </span>
//                   <motion.div
//                     animate={{ rotate: openIndex === index ? 180 : 0 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     <ChevronDown className="h-6 w-6 text-[#1EB053]" />
//                   </motion.div>
//                 </button>
//                 <AnimatePresence>
//                   {openIndex === index && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: 'auto' }}
//                       exit={{ opacity: 0, height: 0 }}
//                       transition={{ duration: 0.2 }}
//                       className="overflow-hidden"
//                     >
//                       <p className="pt-4 text-gray-600">{item.answer}</p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Map Section */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="mt-16 rounded-2xl overflow-hidden shadow-lg"
//           style={{ 
//             height: '400px',
//             border: '2px solid #F9D77E'
//           }}
//         >
//           <iframe
//             title="clinic-location"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.839011013198!2d36.8236504!3d-1.2887272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1186c9d8f2c1%3A0xb730e1dff8cd34d8!2sWisdom+Dental+Clinic+Limited!5e0!3m2!1sen!2ske!4v1699261116928!5m2!1sen!2ske"
//             width="100%"
//             height="100%"
//             style={{ border: 0 }}
//           ></iframe>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// const contactItems = [
//   {
//     icon: MapPin,
//     title: "Address",
//     content: "NHC House 1st floor , opposite cooperative bank, agha khan walk "
//   },
//   {
//     icon: Phone,
//     title: "Phone",
//     content: " 0714 270 997 ,0791 531 408"
//   },
//   {
//     icon: Mail,
//     title: "Email",
//     content: "wisdomdentalclinic0@gmail.com"
//   },
//   {
//     icon: Clock,
//     title: "Hours",
//     content: "Mon-Fri: 7:00AM - 7:00PM\nSaturday:700 AM - 4:00 PM\nSunday: Closed"
//   }
// ];

// const faqItems = [
//   {
//     question: "What are your opening hours?",
//     answer: "We are open from Monday to Friday, 7:00 AM to 7:00 PM, and on Saturdays from 7:00 AM to 4:00 PM. We are closed on Sundays."
//   },
//   {
//     question: "Do I need to make an appointment?",
//     answer: "While walk-ins are welcome, we recommend scheduling an appointment to ensure minimal waiting time and personalized attention."
//   },
//   {
//     question: "What insurance plans do you accept?",
//     answer: "We accept most major dental insurance plans. Please contact our office directly to verify if your specific plan is accepted."
//   },
//   {
//     question: "How often should I have a dental check-up?",
//     answer: "We recommend visiting us every six months for routine check-ups and cleanings to maintain optimal oral health."
//   },
//   {
//     question: "What safety measures do you have in place?",
//     answer: "We follow strict sterilization protocols and use state-of-the-art equipment to ensure patient safety and comfort."
//   }
// ];



import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

emailjs.init('hKA2XCD6rBYxhBQWl'); // Replace with your EmailJS user ID

export function Contact() {
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_7pyvo9e', // Your Service ID
        'template_memb0jg', // Your Template ID
        e.target
      );

      Swal.fire({
        title: 'Success!',
        text: 'Message sent successfully!We will respond to you! Thank you',
        icon: 'success',
        confirmButtonColor: '#1EB053',
        customClass: { confirmButton: 'swal-confirm-button' }
      });

      setFormData({
        from_name: '',
        from_email: '',
        message: ''
      });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Failed to send message. Please try again later.',
        icon: 'error',
        confirmButtonColor: '#1EB053'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          {/* Contact Information Column */}
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

          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg"
            style={{ border: '2px solid #F9D77E' }}
          >
            <h2 className="text-3xl font-bold text-[#1EB053] mb-8">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="from_name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1EB053] focus:ring-2 focus:ring-[#1EB053]/20 transition-all"
                    style={{ outline: 'none' }}
                    placeholder="Enter Your Name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="from_email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1EB053] focus:ring-2 focus:ring-[#1EB053]/20 transition-all"
                    style={{ outline: 'none' }}
                    placeholder="Enter Your Email"
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                    pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1EB053] focus:ring-2 focus:ring-[#1EB053]/20 transition-all"
                  style={{ outline: 'none' }}
                  placeholder="Message"
                  // rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1EB053] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#169544] transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ boxShadow: '0 4px 14px -2px rgba(30,176,83,0.4)' }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
          style={{ border: '2px solid #F9D77E' }}
        >
          <h2 className="text-3xl font-bold text-[#1EB053] mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 last:border-0 pb-4">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center gap-4"
                >
                  <span className="text-lg font-semibold text-gray-900 text-left">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-6 w-6 text-[#1EB053]" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-gray-600">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Map Section */}
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

      <style>
        {`
          .swal-confirm-button {
            background-color: #1EB053 !important;
            color: white !important;
            border: none !important;
          }
          .swal-title {
            color: #1EB053 !important;
          }
          .swal-text {
            color: #2d3748 !important;
          }
        `}
      </style>
    </div>
  );
}

const contactItems = [
  {
    icon: MapPin,
    title: "Address",
    content: "NHC House 1st floor, opposite cooperative bank, Agha Khan Walk"
  },
  {
    icon: Phone,
    title: "Phone",
    content: "0714 270 997 / 0791 531 408"
  },
  {
    icon: Mail,
    title: "Email",
    content: "wisdomdentalclinic0@gmail.com"
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Mon-Fri: 7:00AM - 7:00PM\nSaturday: 7:00AM - 4:00PM\nSunday: Closed"
  }
];

const faqItems = [
  {
    question: "What are your opening hours?",
    answer: "We are open from Monday to Friday, 7:00 AM to 7:00 PM, and on Saturdays from 7:00 AM to 4:00 PM. Closed on Sundays."
  },
  {
    question: "Do I need to make an appointment?",
    answer: "Walk-ins are welcome, but appointments are recommended to minimize waiting time and ensure personalized attention."
  },
  {
    question: "What insurance plans do you accept?",
    answer: "We accept most major dental insurance plans. Contact us to verify your specific plan coverage."
  },
  {
    question: "How often should I get a dental check-up?",
    answer: "We recommend bi-annual check-ups for optimal oral health maintenance."
  },
  {
    question: "What safety protocols do you follow?",
    answer: "We adhere to strict sterilization standards and use advanced equipment for patient safety."
  }
];