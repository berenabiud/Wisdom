// import React from "react";
// import { motion } from "framer-motion";
// import logo from '../images/MUA.svg';

// const InsurancePartners: React.FC = () => {
//   const insurancePartners = [
//     {
//       id: 1,
//       name: "MUA Insurance",
//       logo: logo,
//       website: "https://www.mua.co.ke/"
//     },
//     // {
//     //   id: 2,
//     //   name: "HealthGuard",
//     //   logo: "https://via.placeholder.com/150x75.png?text=HealthGuard",
//     //   website: "#"
//     // },
//     // {
//     //   id: 3,
//     //   name: "SafeCare",
//     //   logo: "https://via.placeholder.com/150x75.png?text=SafeCare",
//     //   website: "#"
//     // },
//     // {
//     //   id: 4,
//     //   name: "MediShield",
//     //   logo: "https://via.placeholder.com/150x75.png?text=MediShield",
//     //   website: "#"
//     // },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { type: "spring", stiffness: 120 }
//     },
//     hover: { scale: 1.05 },
//     tap: { scale: 0.95 }
//   };

//   const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
//     const target = e.currentTarget;
//     console.error("Error loading image:", target.src);
//     target.src = "https://via.placeholder.com/150x75.png?text=Logo+Missing";
//   };

//   return (
//     <motion.section 
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="min-h-screen py-20 bg-gradient-to-b from-blue-50 to-gray-100"
//     >
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Trusted Insurance Partners
//           </h2>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             We collaborate with leading insurance providers to ensure comprehensive coverage for your needs.
//           </p>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
//         >
//           {insurancePartners.map((partner, index) => (
//             <motion.div
//               key={partner.id}
//               variants={cardVariants}
//               whileHover="hover"
//               whileTap="tap"
//               className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
//             >
//               <a
//                 href={partner.website}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block group"
//               >
//                 <div className="h-48 flex items-center justify-center p-6 bg-gray-50 relative">
//                   <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent opacity-0 group-hover:opacity-25 transition-opacity" />
//                   <img
//                     src={partner.logo}
//                     alt={`${partner.name} Logo`}
//                     className="max-h-20 w-auto object-contain transform group-hover:scale-105 transition-transform"
//                     onError={handleImageError}
//                   />
//                 </div>
//                 <div className="p-6 text-center">
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                     {partner.name}
//                   </h3>
//                   <span className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center gap-1">
//                     Visit Website
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                     </svg>
//                   </span>
//                 </div>
//               </a>
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           className="mt-16 text-center p-8 bg-white rounded-2xl shadow-lg max-w-2xl mx-auto"
//         >
//           <div className="text-gray-600 mb-3 text-lg">
//             Don't see your insurance provider?
//           </div>
//           <div className="text-gray-900 font-semibold text-xl">
//             Contact us at{" "}
//             <a
//               href="mailto:insurance@example.com"
//               className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-4"
//             >
//               insurance@example.com
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default InsurancePartners;


import React from "react";
import { motion } from "framer-motion";
import logo from '../images/MUA.svg';

const InsurancePartners: React.FC = () => {
  const insurancePartners = [
    {
      id: 1,
      name: "MUA Insurance",
      logo: logo,
      website: "https://www.mua.co.ke/"
    },
    // Add more partners as needed
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 }
    },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    console.error("Error loading image:", target.src);
    target.src = "https://via.placeholder.com/150x75.png?text=Logo+Missing";
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-20 bg-gradient-to-b from-blue-50 to-gray-100 flex items-center justify-center"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted Insurance Partners
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We collaborate with leading insurance providers to ensure comprehensive coverage for your needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center items-center"
        >
          {insurancePartners.map((partner) => (
            <motion.div
              key={partner.id}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden max-w-sm w-full mx-auto"
            >
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="h-48 flex items-center justify-center p-6 bg-gray-50 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent opacity-0 group-hover:opacity-25 transition-opacity" />
                  <img
                    src={partner.logo}
                    alt={`${partner.name} Logo`}
                    className="max-h-20 w-auto object-contain transform group-hover:scale-105 transition-transform"
                    onError={handleImageError}
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {partner.name}
                  </h3>
                  <span className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center gap-1">
                    Visit Website
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center p-8 bg-white rounded-2xl shadow-lg max-w-2xl mx-auto"
        >
          {/* <div className="text-gray-600 mb-3 text-lg">
            Don't see your insurance provider?
          </div> */}
          <div className="text-gray-900 font-semibold text-xl">
            Contact us at{" "}
            <a
              href="mailto:insurance@example.com"
              className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-4"
            >
              wisdomdentalclinic0@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default InsurancePartners;