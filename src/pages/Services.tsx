// import React from 'react';
// import { Link } from 'react-router-dom';

// const services = [
//   {
//     id: 1,
//     name: 'Teeth Cleaning',
//     description: 'Professional cleaning to remove plaque and tartar buildup.',
//     price: '$120',
//     duration: '60 min',
//     image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80'
//   },
//   {
//     id: 2,
//     name: 'Teeth Whitening',
//     description: 'Advanced whitening treatment for a brighter smile.',
//     price: '$299',
//     duration: '90 min',
//     image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80'
//   },
//   {
//     id: 3,
//     name: 'Dental Filling',
//     description: 'High-quality composite fillings to repair cavities.',
//     price: '$150',
//     duration: '45 min',
//     image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80'
//   },
//   {
//     id: 4,
//     name: 'Crown',
//     description: 'Custom-made crowns to restore damaged teeth.',
//     price: '$800',
//     duration: '120 min',
//     image: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&q=80'
//   }
// ];

// export function Services() {
//   return (
//     <div className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             We offer a comprehensive range of dental services to keep your smile healthy and beautiful.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {services.map((service) => (
//             <div
//               key={service.id}
//               className="bg-white rounded-lg shadow-md overflow-hidden"
//             >
//               <img
//                 src={service.image}
//                 alt={service.name}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">
//                   {service.name}
//                 </h3>
//                 <p className="text-gray-600 mb-4">{service.description}</p>
//                 <div className="flex justify-between items-center mb-4">
//                   <span className="text-2xl font-bold text-blue-600">
//                     {service.price}
//                   </span>
//                   <span className="text-gray-500">{service.duration}</span>
//                 </div>
//                 <Link
//                   to="/book"
//                   className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
//                 >
//                   Book Now
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }




// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const services = [
//   {
//     id: 1,
//     name: 'Teeth Cleaning',
//     description: 'Professional cleaning to remove plaque and tartar buildup.',
//     price: '$120',
//     duration: '60 min',
//     image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80'
//   },
//   {
//     id: 2,
//     name: 'Teeth Whitening',
//     description: 'Advanced whitening treatment for a brighter smile.',
//     price: '$299',
//     duration: '90 min',
//     image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80'
//   },
//   {
//     id: 3,
//     name: 'Dental Filling',
//     description: 'High-quality composite fillings to repair cavities.',
//     price: '$150',
//     duration: '45 min',
//     image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80'
//   },
//   {
//     id: 4,
//     name: 'Crown',
//     description: 'Custom-made crowns to restore damaged teeth.',
//     price: '$800',
//     duration: '120 min',
//     image: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&q=80'
//   }
// ];

// export function Services() {
//   return (
//     <div className="py-20 bg-gradient-to-b from-[#F9D77E]/10 to-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Our <span className="text-[#1EB053]">Services</span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Premium dental care solutions tailored for your perfect smile
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={service.id}
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ y: -5 }}
//               className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all"
//             >
//               <div className="relative overflow-hidden h-60">
//                 <img
//                   src={service.image}
//                   alt={service.name}
//                   className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#1EB053]/80 to-transparent" />
//               </div>
              
//               <div className="p-6">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-3">
//                   {service.name}
//                 </h3>
//                 <p className="text-gray-600 mb-4 min-h-[60px]">
//                   {service.description}
//                 </p>
//                 <div className="flex justify-between items-center mb-6">
//                   <span className="text-2xl font-bold text-[#1EB053]">
//                     {service.price}
//                   </span>
//                   <span className="px-3 py-1 bg-[#F9D77E]/20 text-[#1EB053] rounded-full">
//                     {service.duration}
//                   </span>
//                 </div>
//                 <motion.div whileHover={{ scale: 1.05 }}>
//                   <Link
//                     to="/book"
//                     className="block w-full text-center bg-[#1EB053] text-white px-6 py-3 rounded-xl
//                     hover:bg-[#169544] transition-colors font-medium shadow-md"
//                   >
//                     Book Now
//                   </Link>
//                 </motion.div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="text-center mt-16"
//         >
//           <p className="text-gray-600 mb-4">Not sure which service you need?</p>
//           <Link
//             to="/contact"
//             className="inline-block text-[#1EB053] font-medium hover:text-[#169544]
//             border-b-2 border-[#F9D77E] pb-1 transition-colors"
//           >
//             Contact our specialists →
//           </Link>
//         </motion.div>
//       </div>
//     </div>
//   );
// }



import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Smile, 
  ShieldCheck, 
  Microscope,
  Baby,
  Braces,
  Bone,
  CalendarCheck,
  BadgeDollarSign,
  Star,
  CalendarRange
} from 'lucide-react';

const services = [
  {
    id: 1,
    name: 'Teeth Cleaning',
    description: 'Professional cleaning to remove plaque and tartar buildup.',
    price: '$120',
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Teeth Whitening',
    description: 'Advanced whitening treatment for a brighter smile.',
    price: '$299',
    duration: '90 min',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'Dental Filling',
    description: 'High-quality composite fillings to repair cavities.',
    price: '$150',
    duration: '45 min',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    name: 'Crown',
    description: 'Custom-made crowns to restore damaged teeth.',
    price: '$800',
    duration: '120 min',
    image: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&q=80'
  }
];

const specializedServices = [
  {
    id: 5,
    name: 'Pediatric Dentistry',
    description: 'Gentle care for children\'s dental health',
    icon: Baby,
    price: '$140'
  },
  {
    id: 6,
    name: 'Orthodontic Treatment',
    description: 'Custom braces and aligner solutions',
    icon: Braces,
    price: 'From $2000'
  },
  {
    id: 7,
    name: 'Dental Implants',
    description: 'Permanent tooth replacement solutions',
    icon: Bone,
    price: 'From $1500'
  },
  {
    id: 8,
    name: 'Emergency Care',
    description: '24/7 urgent dental services',
    icon: CalendarCheck,
    price: '$200'
  }
];

export function Services() {
  return (
    <div className="py-20 bg-gradient-to-b from-[#F9D77E]/10 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive <span className="text-[#1EB053]">Dental Care</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete dental solutions using advanced technology and compassionate care
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, type: 'spring' }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              <div className="relative overflow-hidden h-60 rounded-t-2xl">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1EB053]/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-4 py-1 bg-white text-[#1EB053] rounded-full text-sm font-semibold shadow-md">
                    {service.duration}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#1EB053] transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4 min-h-[60px] text-[15px] leading-relaxed">
                  {service.description}
                </p>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-2xl font-bold text-[#1EB053] bg-[#F9D77E]/20 px-3 py-1 rounded-lg">
                    {service.price}
                  </span>
                  <div className="flex items-center space-x-1 text-[#F9D77E]">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/book"
                    className="block w-full text-center bg-gradient-to-r from-[#1EB053] to-[#169544] text-white px-6 py-3 rounded-xl
                    hover:shadow-lg transition-all font-medium flex items-center justify-center gap-2"
                  >
                    <CalendarRange className="w-5 h-5" />
                    Book Appointment
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specialized Services Section */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Specialized <span className="text-[#1EB053]">Treatments</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Advanced solutions for complex dental needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="bg-[#1EB053] w-max p-3 rounded-lg mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-[#1EB053]">
                    {service.price}
                  </span>
                  <Link
                    to="/book"
                    className="text-[#1EB053] hover:text-[#169544] font-medium"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technology Section */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced <span className="text-[#1EB053]">Technology</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cutting-edge equipment for precise and comfortable treatments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital X-Rays",
                text: "90% less radiation with instant imaging",
                icon: Microscope
              },
              {
                title: "Laser Dentistry",
                text: "Pain-free procedures with faster healing",
                icon: ShieldCheck
              },
              {
                title: "3D Imaging",
                text: "Precise treatment planning and outcomes",
                icon: Smile
              }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="bg-[#F9D77E] w-max p-3 rounded-lg mb-4">
                  <tech.icon className="h-6 w-6 text-[#1EB053]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {tech.title}
                </h3>
                <p className="text-gray-600">{tech.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Insurance & Payment */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-[#1EB053]/10 p-8 rounded-2xl text-center mb-20"
        >
          <div className="max-w-2xl mx-auto">
            <BadgeDollarSign className="h-12 w-12 text-[#1EB053] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Insurance & Payment Options
            </h3>
            <p className="text-gray-600 mb-4">
              We accept most major insurance plans and offer flexible payment options
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/insurance"
                className="bg-[#1EB053] text-white px-6 py-2 rounded-lg hover:bg-[#169544]"
              >
                View Insurance Plans
              </Link>
              <Link
                to="/financing"
                className="bg-white text-[#1EB053] px-6 py-2 rounded-lg border border-[#1EB053] hover:bg-[#F9D77E]/20"
              >
                Financing Options
              </Link>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#1EB053] to-[#169544] p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready for Your Dental Transformation?
            </h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              Schedule your consultation today and take the first step towards optimal oral health
            </p>
            <Link
              to="/book"
              className="inline-block bg-white text-[#1EB053] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
            >
              Book Your Appointment
            </Link>
          </div>
        </motion.div>

        {/* Consultation CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-[#F9D77E]/20 p-6 rounded-2xl inline-block">
            <p className="text-gray-600 mb-2">Need personalized advice?</p>
            <Link
              to="/contact"
              className="inline-block text-[#1EB053] font-semibold hover:text-[#169544]
              border-b-2 border-[#1EB053] pb-1 transition-colors text-lg"
            >
              Schedule a Free Consultation →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}