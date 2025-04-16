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
    name: 'General Dentistry',
    description: 'Regular checkups, cleanings, fillings, and preventive care to maintain optimal oral health.',
    // price: '$120',
    // duration: '60 min',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    name: 'Cosmetic Dentistry',
    description: 'Enhancing your smile with procedures such as veneers, bonding, and smile makeovers.',
    // price: '$299',
    // duration: '90 min',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    name: 'Teeth Whitening',
    description: 'Safe and effective treatments to brighten your teeth and remove stains.',
    // price: '$150',
    // duration: '45 min',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80'
  },

  {
    id: 4,
    name: 'Gum Treatment',
    description: 'Preventing and managing periodontal disease to protect your gums and overall health.',
    // price: '$800',
    // duration: '120 min',
    image: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    name: 'Root Canal',
    description: 'Saving infected or damaged teeth with effective endodontic treatment',
    // price: '$800',
    // duration: '120 min',
    image: 'https://plus.unsplash.com/premium_photo-1661436292231-f1e0e7b99b7b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 6,
    name: 'Tooth Extraction',
    description: 'Safe and comfortable removal of teeth when necessary.',
    // price: '$800',
    // duration: '120 min',
    image: 'https://plus.unsplash.com/premium_photo-1673728795373-e5ac0caf5d09?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }

];

const specializedServices = [
  {
    id: 1,
    name: 'Pediatric Dentistry',
    description: 'Gentle care for children\'s dental health',
    icon: Baby,
    // price: '$140'
  },
  {
    id: 2,
    name: 'Orthodontic Treatment',
    description: 'Custom braces and aligner solutions',
    icon: Braces,
    // price: 'From $2000'
  },
  {
    id: 3,
    name: 'Dental Implants',
    description: 'Permanent tooth replacement solutions',
    icon: Bone,
    // price: 'From $1500'
  },
  {
    id: 4,
    name: 'Emergency Care',
    description: '24/7 urgent dental services',
    icon: CalendarCheck,
    // price: '$200'
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
          className="text-center mb-16 space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Comprehensive <span className="text-[#1EB053]">Dental Care</span>
          </h1>
          <p className="text-lg text-black-600 max-w-2xl mx-auto leading-relaxed">
          
We offer a wide range of dental treatments designed to keep your smile healthy and beautiful. Whether you need routine care or specialized treatment, our team is here to provide expert dental solutions.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, type: 'spring' }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden h-52 rounded-t-xl">
                <img
                  src={service.image}
                  alt={`${service.name} service`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white text-gray-700 text-sm font-medium rounded-full shadow-sm">
                    {/* {service.duration} */}
                  </span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-[#1EB053]">
                    {/* {service.price} */}
                  </span>
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <motion.div whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/book"
                    className="w-full flex items-center justify-center gap-2 bg-[#1EB053] hover:bg-[#169544] text-white px-4 py-3 rounded-lg
                    transition-colors text-sm font-medium"
                  >
                    <CalendarRange className="w-4 h-4" />
                    Book Now
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Specialized Services Section */}
        <div className="mb-20">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">
              Specialized <span className="text-[#1EB053]">Treatments</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Advanced solutions for complex dental needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedServices.map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-[#1EB053]/10 w-max p-3 rounded-lg mb-4">
                  <service.icon className="h-6 w-6 text-[#1EB053]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-base font-medium text-[#1EB053]">
                    {/* {service.price} */}
                  </span>
                  <Link
                    to="/book"
                    className="text-[#1EB053] hover:text-[#169544] text-sm font-medium flex items-center gap-1"
                  >
                    Details <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Section */}
        <div className="mb-20">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">
              Advanced <span className="text-[#1EB053]">Technology</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Cutting-edge equipment for precise and comfortable treatments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
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
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="bg-[#F9D77E]/20 w-max p-3 rounded-lg mb-4">
                  <tech.icon className="h-6 w-6 text-[#1EB053]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tech.title}
                </h3>
                <p className="text-gray-600 text-sm">{tech.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Insurance Section */}
        <div className="bg-[#1EB053]/10 p-8 rounded-xl text-center mb-20 space-y-6">
          <BadgeDollarSign className="h-12 w-12 text-[#1EB053] mx-auto" />
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">
              Insurance & Payment Options
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We accept most major insurance plans and offer flexible payment options
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/insurance"
                className="bg-[#1EB053] hover:bg-[#169544] text-white px-5 py-2.5 rounded-lg text-sm font-medium"
              >
                View Insurance Plans
              </Link>
              <Link
                to="/financing"
                className="bg-white text-[#1EB053] hover:bg-gray-50 px-5 py-2.5 rounded-lg border border-[#1EB053] text-sm font-medium"
              >
                Financing Options
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-8">
          <div className="bg-gradient-to-r from-[#1EB053] to-[#169544] p-8 rounded-xl space-y-6">
            <h2 className="text-2xl font-bold text-white">
              Ready for Your Dental Transformation?
            </h2>
            <p className="text-white/90 max-w-md mx-auto text-sm">
              Schedule your consultation today and take the first step towards optimal oral health
            </p>
            <Link
              to="/book"
              className="inline-block bg-white text-[#1EB053] hover:bg-gray-50 px-6 py-2.5 rounded-lg text-sm font-semibold"
            >
              Book Your Appointment
            </Link>
          </div>

          <div className="mt-12">
            <div className="bg-white p-6 rounded-xl inline-block shadow-sm">
              <p className="text-gray-600 mb-3 text-sm">Need personalized advice?</p>
              <Link
                to="/contact"
                className="text-[#1EB053] hover:text-[#169544] font-medium text-sm flex items-center justify-center gap-1"
              >
                Schedule Free Consultation <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { 
//   Smile, 
//   ShieldCheck, 
//   Microscope,
//   Baby,
//   Braces,
//   Bone,
//   CalendarCheck,
//   BadgeDollarSign,
//   Star,
//   CalendarRange
// } from 'lucide-react';

// const services = [
//   {
//     id: 1,
//     name: 'General Dentistry',
//     description: 'Regular checkups, cleanings, fillings, and preventive care to maintain optimal oral health.',
//     price: '$120',
//     duration: '60 min',
//     image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80'
//   },
//   {
//     id: 2,
//     name: 'Cosmetic Dentistry',
//     description: 'Enhancing your smile with procedures such as veneers, bonding, and smile makeovers.',
//     price: '$299',
//     duration: '90 min',
//     image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80'
//   },
//   {
//     id: 3,
//     name: 'Teeth Whitening',
//     description: 'Safe and effective treatments to brighten your teeth and remove stains.',
//     price: '$150',
//     duration: '45 min',
//     image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80'
//   },
//   {
//     id: 4,
//     name: 'Dental Implants',
//     description: 'Permanent solutions for missing teeth, restoring function and aesthetics.',
//     price: '$800',
//     duration: '120 min',
//     image: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&q=80'
//   },
//   {
//     id: 5,
//     name: 'Orthodontics (Braces & Aligners)',
//     description: 'Straightening teeth with traditional braces or clear aligners for a confident smile.',
//     price: '$800',
//     duration: '120 min',
//     image: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&q=80'
//   },
//   {
//     id: 6,
//     name: 'Pediatric Dentistry',
//     description: 'Specialized care for childrens oral health, ensuring a lifetime of healthy smiles.',
//     price: '$800',
//     duration: '120 min',
//     image: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&q=80'
//   },
//   {
//     id: 7,
//     name: 'Gum Disease Treatment ',
//     description: 'Preventing and managing periodontal disease to protect your gums and overall health.',
//     price: '$800',
//     duration: '120 min',
//     image: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&q=80'
//   },
//   {
//     id: 8,
//     name: 'Root Canal Therapy',
//     description: 'Saving infected or damaged teeth with effective endodontic treatment',
//     price: '$800',
//     duration: '120 min',
//     image: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&q=80'
//   },
//   {
//     id: 9,
//     name: 'Tooth Extraction',
//     description: 'Safe and comfortable removal of teeth when necessary.',
//     price: '$800',
//     duration: '120 min',
//     image: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&q=80'
//   }, {
//     id: 4,
//     name: 'Emergency Dental Care',
//     description: 'Immediate attention for dental emergencies such as pain, broken teeth, or infections..',
//     price: '$800',
//     duration: '120 min',
//     image: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&q=80'
//   }
// ];

// const specializedServices = [
//   {
//     id: 5,
//     name: 'Pediatric Dentistry',
//     description: 'Gentle care for children\'s dental health',
//     icon: Baby,
//     price: '$140'
//   },
//   {
//     id: 6,
//     name: 'Orthodontic Treatment',
//     description: 'Custom braces and aligner solutions',
//     icon: Braces,
//     price: 'From $2000'
//   },
//   {
//     id: 7,
//     name: 'Dental Implants',
//     description: 'Permanent tooth replacement solutions',
//     icon: Bone,
//     price: 'From $1500'
//   },
//   {
//     id: 8,
//     name: 'Emergency Care',
//     description: '24/7 urgent dental services',
//     icon: CalendarCheck,
//     price: '$200'
//   }
// ];

// export function Services() {
//   return (
//     <div className="py-20 bg-gradient-to-b from-[#F9D77E]/10 to-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Comprehensive <span className="text-[#1EB053]">Dental Care</span>
//           </h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Complete dental solutions using advanced technology and compassionate care
//           </p>
//         </motion.div>

//         {/* Main Services Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
//           {services.map((service, index) => (
//             <motion.div
//               key={service.id}
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: index * 0.1, type: 'spring' }}
//               whileHover={{ y: -10 }}
//               className="group bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
//             >
//               <div className="relative overflow-hidden h-60 rounded-t-2xl">
//                 <img
//                   src={service.image}
//                   alt={service.name}
//                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#1EB053]/90 via-transparent to-transparent" />
//                 <div className="absolute bottom-4 left-4">
//                   <span className="px-4 py-1 bg-white text-[#1EB053] rounded-full text-sm font-semibold shadow-md">
//                     {service.duration}
//                   </span>
//                 </div>
//               </div>
              
//               <div className="p-6">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#1EB053] transition-colors">
//                   {service.name}
//                 </h3>
//                 <p className="text-gray-600 mb-4 min-h-[60px] text-[15px] leading-relaxed">
//                   {service.description}
//                 </p>
//                 <div className="flex justify-between items-center mb-6">
//                   <span className="text-2xl font-bold text-[#1EB053] bg-[#F9D77E]/20 px-3 py-1 rounded-lg">
//                     {service.price}
//                   </span>
//                   <div className="flex items-center space-x-1 text-[#F9D77E]">
//                     {[...Array(4)].map((_, i) => (
//                       <Star key={i} className="w-5 h-5 fill-current" />
//                     ))}
//                   </div>
//                 </div>
//                 <motion.div 
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Link
//                     to="/book"
//                     className="block w-full text-center bg-gradient-to-r from-[#1EB053] to-[#169544] text-white px-6 py-3 rounded-xl
//                     hover:shadow-lg transition-all font-medium flex items-center justify-center gap-2"
//                   >
//                     <CalendarRange className="w-5 h-5" />
//                     Book Appointment
//                   </Link>
//                 </motion.div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Specialized Services Section */}
//         <div className="mb-20">
//           <motion.div 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               Specialized <span className="text-[#1EB053]">Treatments</span>
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Advanced solutions for complex dental needs
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {specializedServices.map((service, index) => (
//               <motion.div
//                 key={service.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
//               >
//                 <div className="bg-[#1EB053] w-max p-3 rounded-lg mb-4">
//                   <service.icon className="h-6 w-6 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">
//                   {service.name}
//                 </h3>
//                 <p className="text-gray-600 mb-4">{service.description}</p>
//                 <div className="flex justify-between items-center">
//                   <span className="text-lg font-semibold text-[#1EB053]">
//                     {service.price}
//                   </span>
//                   <Link
//                     to="/book"
//                     className="text-[#1EB053] hover:text-[#169544] font-medium"
//                   >
//                     Learn More →
//                   </Link>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Technology Section */}
//         <div className="mb-20">
//           <motion.div 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               Advanced <span className="text-[#1EB053]">Technology</span>
//             </h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Cutting-edge equipment for precise and comfortable treatments
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Digital X-Rays",
//                 text: "90% less radiation with instant imaging",
//                 icon: Microscope
//               },
//               {
//                 title: "Laser Dentistry",
//                 text: "Pain-free procedures with faster healing",
//                 icon: ShieldCheck
//               },
//               {
//                 title: "3D Imaging",
//                 text: "Precise treatment planning and outcomes",
//                 icon: Smile
//               }
//             ].map((tech, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: index * 0.2 }}
//                 className="bg-white p-6 rounded-2xl shadow-lg"
//               >
//                 <div className="bg-[#F9D77E] w-max p-3 rounded-lg mb-4">
//                   <tech.icon className="h-6 w-6 text-[#1EB053]" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">
//                   {tech.title}
//                 </h3>
//                 <p className="text-gray-600">{tech.text}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Insurance & Payment */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="bg-[#1EB053]/10 p-8 rounded-2xl text-center mb-20"
//         >
//           <div className="max-w-2xl mx-auto">
//             <BadgeDollarSign className="h-12 w-12 text-[#1EB053] mx-auto mb-4" />
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">
//               Insurance & Payment Options
//             </h3>
//             <p className="text-gray-600 mb-4">
//               We accept most major insurance plans and offer flexible payment options
//             </p>
//             <div className="flex justify-center gap-4">
//               <Link
//                 to="/insurance"
//                 className="bg-[#1EB053] text-white px-6 py-2 rounded-lg hover:bg-[#169544]"
//               >
//                 View Insurance Plans
//               </Link>
//               <Link
//                 to="/financing"
//                 className="bg-white text-[#1EB053] px-6 py-2 rounded-lg border border-[#1EB053] hover:bg-[#F9D77E]/20"
//               >
//                 Financing Options
//               </Link>
//             </div>
//           </div>
//         </motion.div>

//         {/* CTA Section */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="text-center"
//         >
//           <div className="bg-gradient-to-r from-[#1EB053] to-[#169544] p-8 rounded-2xl">
//             <h2 className="text-2xl font-bold text-white mb-4">
//               Ready for Your Dental Transformation?
//             </h2>
//             <p className="text-white/90 mb-6 max-w-xl mx-auto">
//               Schedule your consultation today and take the first step towards optimal oral health
//             </p>
//             <Link
//               to="/book"
//               className="inline-block bg-white text-[#1EB053] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
//             >
//               Book Your Appointment
//             </Link>
//           </div>
//         </motion.div>

//         {/* Consultation CTA */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="text-center mt-16"
//         >
//           <div className="bg-[#F9D77E]/20 p-6 rounded-2xl inline-block">
//             <p className="text-gray-600 mb-2">Need personalized advice?</p>
//             <Link
//               to="/contact"
//               className="inline-block text-[#1EB053] font-semibold hover:text-[#169544]
//               border-b-2 border-[#1EB053] pb-1 transition-colors text-lg"
//             >
//               Schedule a Free Consultation →
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }