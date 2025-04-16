
// // import { useForm } from 'react-hook-form';
// // import { Calendar, Clock, User } from 'lucide-react';

// // interface BookingFormData {
// //   name: string;
// //   email: string;
// //   phone: string;
// //   service: string;
// //   date: string;
// //   time: string;
// // }

// // export function BookingForm() {
// //   const { register, handleSubmit, formState: { errors } } = useForm<BookingFormData>();

// //   const onSubmit = (data: BookingFormData) => {
// //     console.log(data);
// //     // Handle form submission
// //   };

// //   return (
// //     <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto space-y-6">
// //       <div>
// //         <label className="block text-sm font-medium text-gray-700">Name</label>
// //         <div className="mt-1 relative">
// //           <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
// //           <input
// //             {...register('name', { required: 'Name is required' })}
// //             className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
// //             placeholder="John Doe"
// //           />
// //           {errors.name && (
// //             <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
// //           )}
// //         </div>
// //       </div>

// //       <div>
// //         <label className="block text-sm font-medium text-gray-700">Email</label>
// //         <input
// //           type="email"
// //           {...register('email', {
// //             required: 'Email is required',
// //             pattern: {
// //               value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
// //               message: 'Invalid email address'
// //             }
// //           })}
// //           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
// //         />
// //         {errors.email && (
// //           <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
// //         )}
// //       </div>

// //       <div>
// //         <label className="block text-sm font-medium text-gray-700">Phone</label>
// //         <input
// //           type="tel"
// //           {...register('phone', { required: 'Phone number is required' })}
// //           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
// //         />
// //         {errors.phone && (
// //           <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
// //         )}
// //       </div>

// //       <div>
// //         <label className="block text-sm font-medium text-gray-700">Service</label>
// //         <select
// //           {...register('service', { required: 'Please select a service' })}
// //           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
// //         >
// //           <option value="">Select a service</option>
// //           <option value="cleaning">Teeth Cleaning</option>
// //           <option value="whitening">Teeth Whitening</option>
// //           <option value="filling">Dental Filling</option>
// //           <option value="crown">Crown</option>
// //         </select>
// //         {errors.service && (
// //           <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
// //         )}
// //       </div>

// //       <div className="grid grid-cols-2 gap-4">
// //         <div>
// //           <label className="block text-sm font-medium text-gray-700">Date</label>
// //           <div className="mt-1 relative">
// //             <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
// //             <input
// //               type="date"
// //               {...register('date', { required: 'Date is required' })}
// //               className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
// //             />
// //           </div>
// //           {errors.date && (
// //             <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
// //           )}
// //         </div>

// //         <div>
// //           <label className="block text-sm font-medium text-gray-700">Time</label>
// //           <div className="mt-1 relative">
// //             <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
// //             <input
// //               type="time"
// //               {...register('time', { required: 'Time is required' })}
// //               className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
// //             />
// //           </div>
// //           {errors.time && (
// //             <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
// //           )}
// //         </div>
// //       </div>

// //       <button
// //         type="submit"
// //         className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
// //       >
// //         Book Appointment
// //       </button>
// //     </form>
// //   );
// // }


// import { useForm } from 'react-hook-form';
// import { Calendar, Clock, User, Mail, Phone } from 'lucide-react';
// import { motion } from 'framer-motion';

// interface BookingFormData {
//   name: string;
//   email: string;
//   phone: string;
//   service: string;
//   date: string;
//   time: string;
// }

// export function BookingForm() {
//   const { register, handleSubmit, formState: { errors } } = useForm<BookingFormData>();

//   const onSubmit = (data: BookingFormData) => {
//     console.log(data);
//     // Handle form submission
//   };

//   return (
//     <motion.form 
//       onSubmit={handleSubmit(onSubmit)} 
//       className="max-w-2xl mx-auto space-y-6 bg-white p-8 rounded-3xl shadow-xl"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//     >
//       <h2 className="text-3xl font-bold text-[#1EB053] mb-8 text-center">
//         Book Your Appointment
//       </h2>

//       {/* Name Field */}
//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
//         <div className="relative">
//           <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1EB053] h-5 w-5" />
//           <input
//             {...register('name', { required: 'Name is required' })}
//             className="pl-12 pr-4 py-3 w-full rounded-xl border border-[#F9D77E] focus:border-[#1EB053] focus:ring-2 focus:ring-[#1EB053]/20 transition-all"
//             placeholder="John Doe"
//           />
//         </div>
//         {errors.name && (
//           <p className="mt-2 text-sm text-red-500 bg-red-50 px-3 py-1 rounded-lg">
//             {errors.name.message}
//           </p>
//         )}
//       </div>

//       {/* Email Field */}
//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//         <div className="relative">
//           <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1EB053] h-5 w-5" />
//           <input
//             type="email"
//             {...register('email', {
//               required: 'Email is required',
//               pattern: {
//                 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                 message: 'Invalid email address'
//               }
//             })}
//             className="pl-12 pr-4 py-3 w-full rounded-xl border border-[#F9D77E] focus:border-[#1EB053] focus:ring-2 focus:ring-[#1EB053]/20 transition-all"
//           />
//         </div>
//         {errors.email && (
//           <p className="mt-2 text-sm text-red-500 bg-red-50 px-3 py-1 rounded-lg">
//             {errors.email.message}
//           </p>
//         )}
//       </div>

//       {/* Phone Field */}
//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
//         <div className="relative">
//           <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1EB053] h-5 w-5" />
//           <input
//             type="tel"
//             {...register('phone', { required: 'Phone number is required' })}
//             className="pl-12 pr-4 py-3 w-full rounded-xl border border-[#F9D77E] focus:border-[#1EB053] focus:ring-2 focus:ring-[#1EB053]/20 transition-all"
//           />
//         </div>
//         {errors.phone && (
//           <p className="mt-2 text-sm text-red-500 bg-red-50 px-3 py-1 rounded-lg">
//             {errors.phone.message}
//           </p>
//         )}
//       </div>

//       {/* Service Selection */}
//       <div>
//         <label className="block text-sm font-medium text-gray-700 mb-2">Select Service</label>
//         <select
//           {...register('service', { required: 'Please select a service' })}
//           className="w-full py-3 px-4 rounded-xl border border-[#F9D77E] focus:border-[#1EB053] focus:ring-2 focus:ring-[#1EB053]/20 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMUVCMDUzIj48cGF0aCBkPSJNNyAxMGw1IDUgNS01eiIvPjwvc3ZnPg==')] bg-no-repeat bg-[right_1rem_center]"
//         >
//           <option value="">Choose a service...</option>
//           <option value="cleaning">Teeth Cleaning</option>
//           <option value="whitening">Teeth Whitening</option>
//           <option value="filling">Dental Filling</option>
//           <option value="crown">Crown</option>
//         </select>
//         {errors.service && (
//           <p className="mt-2 text-sm text-red-500 bg-red-50 px-3 py-1 rounded-lg">
//             {errors.service.message}
//           </p>
//         )}
//       </div>

//       {/* Date & Time Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Appointment Date</label>
//           <div className="relative">
//             <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1EB053] h-5 w-5" />
//             <input
//               type="date"
//               {...register('date', { required: 'Date is required' })}
//               className="pl-12 pr-4 py-3 w-full rounded-xl border border-[#F9D77E] focus:border-[#1EB053] focus:ring-2 focus:ring-[#1EB053]/20"
//             />
//           </div>
//           {errors.date && (
//             <p className="mt-2 text-sm text-red-500 bg-red-50 px-3 py-1 rounded-lg">
//               {errors.date.message}
//             </p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
//           <div className="relative">
//             <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1EB053] h-5 w-5" />
//             <input
//               type="time"
//               {...register('time', { required: 'Time is required' })}
//               className="pl-12 pr-4 py-3 w-full rounded-xl border border-[#F9D77E] focus:border-[#1EB053] focus:ring-2 focus:ring-[#1EB053]/20"
//             />
//           </div>
//           {errors.time && (
//             <p className="mt-2 text-sm text-red-500 bg-red-50 px-3 py-1 rounded-lg">
//               {errors.time.message}
//             </p>
//           )}
//         </div>
//       </div>

//       <motion.button
//         whileHover={{ scale: 1.02 }}
//         whileTap={{ scale: 0.98 }}
//         type="submit"
//         className="w-full py-4 px-6 bg-gradient-to-r from-[#1EB053] to-[#169544] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
//       >
//         Confirm Appointment
//       </motion.button>
//     </motion.form>
//   );
// }

import { useForm } from 'react-hook-form';
import { Calendar, Clock, User, Mail, Phone, MessageCircle, ShieldAlert, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import { useState } from 'react';

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
}

export function BookingForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<BookingFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendAdminNotification = async (data: BookingFormData) => {
    const adminPhone = '254728732301'; 
    const message = encodeURIComponent(
      `New Booking Received!\n\n` +
      `Name: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `Phone: ${data.phone}\n` +
      `Service: ${data.service}\n` +
      `Date: ${data.date}\n` +
      `Time: ${data.time}\n` +
      `Notes: ${data.notes || 'None'}`
    );

    try {
      // Try WhatsApp first
      const whatsappUrl = `https://wa.me/${adminPhone}?text=${message}`;
      const newWindow = window.open(whatsappUrl, '_blank');
      
      // Fallback to SMS if WhatsApp fails
      setTimeout(() => {
        if (!newWindow || newWindow.closed) {
          const smsUrl = `sms:${adminPhone}?body=${message}`;
          window.open(smsUrl, '_blank');
        }
      }, 1000);
    } catch (error) {
      console.error('Notification failed:', error);
    }
  };

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success alert
      await Swal.fire({
        title: 'Booking Successful!',
        html: `
          <div class="text-left">
            <p class="text-gray-600 mb-2"><strong>${data.name}</strong>, your appointment is confirmed!</p>
            <p class="text-gray-600">📅 ${data.date} at ${data.time}</p>
            <p class="text-gray-600">🦷 Service: ${data.service}</p>
          </div>
        `,
        icon: 'success',
        confirmButtonColor: '#1EB053',
        confirmButtonText: 'Got it!',
        customClass: {
          popup: 'rounded-2xl shadow-xl'
        }
      });

      // Send admin notification
      await sendAdminNotification(data);
      
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Failed to send notification to admin',
        icon: 'error',
        confirmButtonColor: '#1EB053'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9D77E]/10 to-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.form 
        onSubmit={handleSubmit(onSubmit)} 
        className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-2xl relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Decorative Elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#1EB053]/10 rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#F9D77E]/10 rounded-full" />
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-block mb-6"
          >
            <div className="bg-[#1EB053] p-4 rounded-2xl w-max mx-auto">
              <Calendar className="h-8 w-8 text-white" />
            </div>
          </motion.div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Schedule Your Visit
          </h2>
          <p className="text-gray-600">Get started with your dental care journey</p>
        </div>

        {/* Form Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1EB053]" />
                <input
                  {...register('name', { required: 'Name is required' })}
                  className="pl-12 pr-4 py-3 w-full rounded-xl border border-gray-200 focus:border-[#1EB053] focus:ring-2 focus:ring-[#1EB053]/20"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-500 bg-red-50 px-3 py-1 rounded-lg">
                    {errors.name.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1EB053]" />
                <input
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="pl-12 pr-4 py-3 w-full rounded-xl border border-gray-200 focus:border-[#1EB053] focus:ring-2 focus:ring-[#1EB053]/20"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-500 bg-red-50 px-3 py-1 rounded-lg">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1EB053]" />
                <input
                  type="tel"
                  {...register('phone', { required: 'Phone number is required' })}
                  className="pl-12 pr-4 py-3 w-full rounded-xl border border-gray-200 focus:border-[#1EB053] focus:ring-2 focus:ring-[#1EB053]/20"
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-500 bg-red-50 px-3 py-1 rounded-lg">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Service</label>
              <select
                {...register('service', { required: 'Please select a service' })}
                className="w-full py-3 px-4 rounded-xl border border-gray-200 focus:border-[#1EB053] focus:ring-2 focus:ring-[#1EB053]/20 appearance-none bg-select-arrow bg-no-repeat bg-[right_1rem_center]"
              >
               <option value="">Select a service...</option>
                <option value="general-dentistry">General Dentistry</option>
                <option value="cosmetic-dentistry">Cosmetic Dentistry</option>
                <option value="teeth-whitening">Teeth Whitening</option>
                <option value="dental-implants">Dental Implants</option>
                <option value="orthodontics">Orthodontics (Braces & Aligners)</option>
                <option value="pediatric-dentistry">Pediatric Dentistry</option>
                <option value="gum-treatment">Gum Disease Treatment</option>
                <option value="root-canal">Root Canal Therapy</option>
                <option value="tooth-extraction">Tooth Extraction</option>
                <option value="emergency-care">Emergency Dental Care</option>
                <option value="dental-crowns">Dental Crowns</option>
                <option value="dental-bridges">Dental Bridges</option>
                {/* <option value="dentures">Dentures</option> */}
                {/* <option value="oral-surgery">Oral Surgery</option> */}
                {/* <option value="tmj-treatment">TMJ Treatment</option> */}
                {/* <option value="night-guards">Night Guards</option> */}
                {/* <option value="sports-guards">Sports Guards</option> */}
                {/* <option value="oral-cancer-screening">Oral Cancer Screening</option> */}
                {/* <option value="sedation-dentistry">Sedation Dentistry</option> */}
              </select>
              {errors.service && (
                <p className="mt-2 text-sm text-red-500 bg-red-50 px-3 py-1 rounded-lg">
                  {errors.service.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1EB053]" />
                  <input
                    type="date"
                    {...register('date', { required: 'Date is required' })}
                    className="pl-12 pr-4 py-3 w-full rounded-xl border border-gray-200 focus:border-[#1EB053] focus:ring-2 focus:ring-[#1EB053]/20"
                  />
                  {errors.date && (
                    <p className="mt-2 text-sm text-red-500 bg-red-50 px-3 py-1 rounded-lg">
                      {errors.date.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1EB053]" />
                  <input
                    type="time"
                    {...register('time', { required: 'Time is required' })}
                    className="pl-12 pr-4 py-3 w-full rounded-xl border border-gray-200 focus:border-[#1EB053] focus:ring-2 focus:ring-[#1EB053]/20"
                  />
                  {errors.time && (
                    <p className="mt-2 text-sm text-red-500 bg-red-50 px-3 py-1 rounded-lg">
                      {errors.time.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes
              </label>
              <div className="relative">
                <MessageCircle className="absolute left-4 top-4 text-[#1EB053]" />
                <textarea
                  {...register('notes')}
                  className="pl-12 pr-4 py-3 w-full rounded-xl border border-gray-200 focus:border-[#1EB053] focus:ring-2 focus:ring-[#1EB053]/20 h-32"
                  placeholder="Any special requests or notes..."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 px-6 bg-gradient-to-r from-[#1EB053] to-[#169544] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all mt-8 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              Processing...
            </>
          ) : (
            'Confirm Appointment'
          )}
        </motion.button>

        {/* Trust Badges */}
        <div className="mt-6 flex items-center justify-center gap-4 text-gray-500">
          <div className="flex items-center gap-1">
            <ShieldAlert className="h-4 w-4 text-[#1EB053]" />
            <span className="text-sm">Secure Booking</span>
          </div>
          <div className="h-4 w-px bg-gray-200"></div>
          <div className="flex items-center gap-1">
            <Lock className="h-4 w-4 text-[#1EB053]" />
            <span className="text-sm">Privacy Protected</span>
          </div>
        </div>
      </motion.form>
    </div>
  );
}