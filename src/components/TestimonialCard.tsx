// import React from 'react';
// import { Star } from 'lucide-react';
// import type { Testimonial } from '../types';

// interface TestimonialCardProps {
//   testimonial: Testimonial;
// }

// export function TestimonialCard({ testimonial }: TestimonialCardProps) {
//   return (
//     <div className="bg-white rounded-lg shadow-md p-6">
//       <div className="flex items-center mb-4">
//         <img
//           src={testimonial.image}
//           alt={testimonial.name}
//           className="h-12 w-12 rounded-full object-cover"
//         />
//         <div className="ml-4">
//           <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
//           <div className="flex items-center">
//             {[...Array(5)].map((_, i) => (
//               <Star
//                 key={i}
//                 className={`h-5 w-5 ${
//                   i < testimonial.rating
//                     ? 'text-yellow-400 fill-current'
//                     : 'text-gray-300'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//       <p className="text-gray-600">{testimonial.comment}</p>
//       <p className="mt-4 text-sm text-gray-500">{testimonial.date}</p>
//     </div>
//   );
// }



import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-gradient-to-br from-[#F9D77E]/10 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
    >
      <div className="flex items-start mb-4">
        <div className="relative">
          <div className="absolute inset-0 bg-[#1EB053] rounded-full blur-[20px] opacity-20" />
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="h-14 w-14 rounded-full object-cover border-2 border-[#1EB053] p-1"
          />
        </div>
        <div className="ml-4 flex-1">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
            <span className="text-sm text-[#1EB053] font-medium">{testimonial.date}</span>
          </div>
          <div className="flex items-center mt-1">
            <div className="flex items-center bg-[#F9D77E]/20 px-2 py-1 rounded-full">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 mx-0.5 ${
                    i < testimonial.rating
                      ? 'text-[#1EB053] fill-current'
                      : 'text-gray-200 fill-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed text-[15px]">
        "{testimonial.comment}"
      </p>
    </motion.div>
  );
}