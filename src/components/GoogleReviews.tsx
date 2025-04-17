import React, { useEffect } from 'react';

const GoogleReviews = () => {
  useEffect(() => {
    // Load Elfsight platform script dynamically
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="reviews-container bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          
          <p className="mt-4 text-lg text-gray-500">
            Discover why businesses trust our services
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
          <div 
            className="elfsight-app-5af7f1ac-4e1f-49ac-9e29-ed00cbb22246"
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </div>
  );
};

export default GoogleReviews;


// import { useEffect } from 'react';
// import { motion } from 'framer-motion';

// const GoogleReviews = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://static.elfsight.com/platform/platform.js';
//     script.async = true;
//     script.defer = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//       className="reviews-container bg-gradient-to-br from-indigo-50 to-purple-100 py-16 px-4 sm:px-6 lg:px-8"
//     >
//       <div className="max-w-7xl mx-auto">
//         <motion.div 
//           initial={{ y: 20, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//             Customer Experiences
//           </h2>
//           <motion.p
//             initial={{ scale: 0.9, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
//           >
//             Discover why thousands of clients trust our exceptional service
//           </motion.p>
//         </motion.div>

//         <motion.div
//           initial={{ scale: 0.95, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           viewport={{ once: true }}
//           className="bg-white rounded-3xl shadow-2xl p-6 lg:p-8 hover:shadow-3xl transition-shadow duration-300"
//         >
//           <div className="max-w-4xl mx-auto">
//             <div 
//               className="elfsight-app-5af7f1ac-4e1f-49ac-9e29-ed00cbb22246"
//               data-elfsight-app-lazy
//             />
//           </div>
//         </motion.div>

//         {/* Animated Decorations */}
//         <motion.div
//           initial={{ x: -100, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 0.1 }}
//           transition={{ duration: 1.5 }}
//           className="absolute left-0 top-1/3 h-32 w-32 bg-purple-300 blur-3xl rounded-full -z-10"
//         />
//         <motion.div
//           initial={{ x: 100, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 0.1 }}
//           transition={{ duration: 1.5 }}
//           className="absolute right-0 top-2/3 h-32 w-32 bg-indigo-300 blur-3xl rounded-full -z-10"
//         />
//       </div>
//     </motion.div>
//   );
// };

// export default GoogleReviews;