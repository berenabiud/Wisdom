// // import React from 'react';
// import { Link } from 'react-router-dom';
// import { Calendar, Phone, Clock, MapPin } from 'lucide-react';

// export function Home() {
//   return (
//     <div>
//       {/* Hero Section */}
//       <div
//         className="relative bg-cover bg-center h-[600px]"
//         style={{
//           backgroundImage: 'url("https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80")'
//         }}
//       >
//         <div className="absolute inset-0 bg-black bg-opacity-50" />
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
//           <div className="text-white">
//             <h1 className="text-4xl md:text-6xl font-bold mb-4">
//               Your Smile, Our Passion
//             </h1>
//             <p className="text-xl mb-8 max-w-2xl">
//               Experience exceptional dental care with our team of experienced professionals.
//               We're committed to giving you the confident smile you deserve.
//             </p>
//             <Link
//               to="/book"
//               className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors"
//             >
//               Book Appointment
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
//                 <Calendar className="h-8 w-8 text-blue-600" />
//               </div>
//               <h3 className="text-lg font-medium mb-2">Easy Booking</h3>
//               <p className="text-gray-600">Book your appointment online anytime</p>
//             </div>
//             <div className="text-center">
//               <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
//                 <Clock className="h-8 w-8 text-blue-600" />
//               </div>
//               <h3 className="text-lg font-medium mb-2">Extended Hours</h3>
//               <p className="text-gray-600">Open early and late for your convenience</p>
//             </div>
//             <div className="text-center">
//               <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
//                 <Phone className="h-8 w-8 text-blue-600" />
//               </div>
//               <h3 className="text-lg font-medium mb-2">24/7 Support</h3>
//               <p className="text-gray-600">Always here when you need us</p>
//             </div>
//             <div className="text-center">
//               <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
//                 <MapPin className="h-8 w-8 text-blue-600" />
//               </div>
//               <h3 className="text-lg font-medium mb-2">Convenient Location</h3>
//               <p className="text-gray-600">Easy to find with parking available</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-blue-600 py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-white mb-4">
//             Ready to Transform Your Smile?
//           </h2>
//           <p className="text-xl text-blue-100 mb-8">
//             Schedule your consultation today and take the first step towards a brighter smile.
//           </p>
//           <Link
//             to="/book"
//             className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
//           >
//             Book Now
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }



import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Phone, 
  Clock, 
  MapPin, 
  Smile, 
 
  ShieldCheck, 
  Microscope,
  
  HeartPulse,
  TowerControlIcon
} from 'lucide-react';
import { motion } from 'framer-motion';

export function Home() {
  const features = [
    { icon: Calendar, title: "Easy Booking", text: "Book your appointment online anytime" },
    { icon: Clock, title: "Extended Hours", text: "Open early and late for your convenience" },
    { icon: Phone, title: "24/7 Support", text: "Always here when you need you" },
    { icon: MapPin, title: "Convenient Location", text: "Easy to find with parking available" }
  ];

  const services = [
    { icon: TowerControlIcon, title: "General Dentistry", text: "Routine checkups, cleanings, and fillings" },
    { icon: Smile, title: "Cosmetic Dentistry", text: "Whitening, veneers, and smile makeovers" },
    { icon: HeartPulse, title: "Orthodontics", text: "Braces and aligners for perfect alignment" },
    { icon: ShieldCheck, title: "Preventive Care", text: "Customized prevention plans for lasting health" }
  ];

  const technologies = [
    { title: "Digital X-Rays", text: "90% less radiation with instant results" },
    { title: "Laser Dentistry", text: "Pain-free treatments with faster healing" },
    { title: "3D Imaging", text: "Precise treatment planning and predictable outcomes" },
    { title: "Intraoral Cameras", text: "See what we see with real-time visuals" }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-cover bg-center h-[700px]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1EB053]/90 to-[#F9D77E]/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Exceptional Dental Care <br/>
              <span className="text-[#F9D77E]">For Your Whole Family</span>
            </h1>
            <p className="text-xl mb-8 md:text-2xl md:leading-relaxed">
              Experience pain-free dentistry with cutting-edge technology and 
              compassionate care from our award-winning dental team.
            </p>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/book"
                className="inline-block bg-[#F9D77E] text-[#1EB053] px-8 py-4 rounded-xl text-lg 
                font-semibold hover:bg-[#f4cf6a] transition-all shadow-lg"
              >
                Book Your Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive <span className="text-[#1EB053]">Dental Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete care for all ages using the latest dental innovations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#F9D77E]/10 p-8 rounded-2xl border-2 border-[#1EB053]/20"
              >
                <div className="bg-[#1EB053] w-max p-4 rounded-xl mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.text}</p>
              </motion.div>
            ))}
          </div>
         
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-[#f8fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-[#1EB053]/10 rounded-2xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5" 
                  alt="Dental Technology"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold text-gray-900">
                Advanced <span className="text-[#1EB053]">Dental Technology</span>
              </h2>
              <p className="text-xl text-gray-600">
                We invest in the latest equipment to ensure precise diagnoses 
                and comfortable treatments
              </p>
              
              <div className="space-y-6">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-[#1EB053] p-2 rounded-lg">
                      <Microscope className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{tech.title}</h3>
                      <p className="text-gray-600">{tech.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
  {features.map((service, index) => (
    <motion.div
      key={index}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
      className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all
                border border-[#1EB053]/20 hover:border-[#1EB053]/40 relative"
    >
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1EB053]/5 to-[#F9D77E]/5 opacity-0 
                     group-hover:opacity-100 rounded-2xl transition-opacity" />
      
      {/* Icon container */}
      <motion.div 
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        className="bg-gradient-to-br from-[#1EB053] to-[#169544] w-max p-4 rounded-xl mb-6
                  shadow-md"
      >
        <service.icon className="h-8 w-8 text-white" />
      </motion.div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#1EB053] transition-colors">
        {service.title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-[15px]">
        {service.text}
      </p>
    </motion.div>
  ))}
</div>
      {/* Dental Care Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#1EB053]">Care Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transparent steps to achieve your perfect smile
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="absolute top-24 left-0 right-0 h-1 bg-[#F9D77E] hidden md:block"></div>
            
            {[
              { title: "Consultation", text: "Comprehensive oral examination" },
              { title: "Treatment Plan", text: "Personalized care strategy" },
              { title: "Procedure", text: "Pain-free treatment experience" },
              { title: "Follow Up", text: "Ensuring long-term results" }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white z-10"
              >
                <div className="bg-[#1EB053] w-12 h-12 rounded-full flex items-center justify-center text-white mb-4">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#1EB053] to-[#169544]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Smile className="h-24 w-24 text-white/10 absolute top-8 left-1/4" />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Take the first step towards optimal oral health. Our dental experts 
              are ready to create your personalized treatment plan.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
              <Link
                to="/book"
                className="bg-[#F9D77E] text-[#1EB053] px-10 py-4 rounded-xl text-lg 
                font-bold hover:bg-[#f4cf6a] transition-all shadow-lg flex items-center 
                justify-center space-x-2"
              >
                <Calendar className="w-6 h-6" />
                <span>Schedule Free Consultation</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}