import { Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  Calendar, 
  Phone, 
  Clock, 
  MapPin, 

  Microscope,

  ScanEye,
  Zap,
  Camera
} from 'lucide-react';
import { motion } from 'framer-motion';
import image1 from '../images/image1.jpg'
import Cosmetic from '../images/veneers.webp'
import image3 from '../images/Orthodonticsbraces.webp'
import GoogleReviews from '../components/GoogleReviews';


const styles = `
@keyframes slideLeft {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

.animated-button {
  position: relative;
  overflow: hidden;
}

.animated-button span {
  display: inline-block;
  animation: slideLeft 10s linear infinite;
}
  @keyframes slideLeft {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

.animated-button {
  position: relative;
  overflow: hidden;
}

.animated-button span {
  display: inline-block;
  animation: slideLeft 10s linear infinite;
}

.before-after-container {
  position: relative;
  overflow: hidden;
  min-height: 500px;
}

.before-after-image {
  position: absolute;
  width: 50%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
`;

export function Home() {
  const [activeTreatment, setActiveTreatment] = useState(0);
  const features = [
    { icon: Calendar, title: "Easy Booking", text: "Book your appointment online anytime" },
    { icon: Clock, title: "Extended Hours", text: "Open early and late for your convenience" },
    { icon: Phone, title: "24/7 Support", text: "Always here when you need you" },
    { icon: MapPin, title: "Convenient Location", text: "Easy to find with parking available" }
  ];

  const services = [
    { 
      image: image1,
      title: "General Dentistry", 
      text: "Routine checkups, cleanings, and fillings" 
    },
    { 
      image: Cosmetic,
      title: "Cosmetic Dentistry", 
      text: "Whitening, veneers, and smile makeovers" 
    },
    { 
      image: image3, 
      title: "Orthodontics", 
      text: "Braces and aligners for perfect alignment" 
    },
    { 
      image: image1,
      title: "Preventive Care", 
      text: "Customized prevention plans for lasting health" 
    }
  ];
  // const treatments = [
  //   { 
  //     title: "Dental Implants",
  //     before: "https://images.unsplash.com/photo-1588773848779-3b4bddb71cc4",
  //     after: "https://images.unsplash.com/photo-1621342153950-6b99b3564e9c"
  //   },
  //   {
  //     title: "Teeth Whitening",
  //     before: "https://images.unsplash.com/photo-1588773848779-3b4bddb71cc4",
  //     after: "https://images.unsplash.com/photo-1621342153950-6b99b3564e9c"
  //   },
  //   {
  //     title: "Dental Crowns",
  //     before: "https://images.unsplash.com/photo-1588773848779-3b4bddb71cc4",
  //     after: "https://images.unsplash.com/photo-1621342153950-6b99b3564e9c"
  //   },
  //   {
  //     title: "Dental Bonding",
  //     before: "https://images.unsplash.com/photo-1588773848779-3b4bddb71cc4",
  //     after: "https://images.unsplash.com/photo-1621342153950-6b99b3564e9c"
  //   },
  //   {
  //     title: "Diastema Treatment",
  //     before: "https://images.unsplash.com/photo-1588773848779-3b4bddb71cc4",
  //     after: "https://images.unsplash.com/photo-1621342153950-6b99b3564e9c"
  //   }
  // ];


  const technologies = [
    { icon: ScanEye, title: "Digital X-Rays", text: "90% less radiation with instant results" },
    { icon: Zap, title: "Laser Dentistry", text: "Pain-free treatments with faster healing" },
    { icon: Microscope, title: "3D Imaging", text: "Precise treatment planning and predictable outcomes" },
    { icon: Camera, title: "Intraoral Cameras", text: "See what we see with real-time visuals" }
  ];

  return (
    <div className="overflow-hidden">
      <style>{styles}</style>

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
              A Smile is the Prettiest Thing You Can Wear <br/>
              <span className="text-[#F9D77E] bg-gradient-to-r from-[#1EB053]/30 to-transparent px-4 py-2 rounded-xl">
                Experience Compassionate, Modern Dental Care
              </span>
            </h1>
            <p className="text-xl mb-8 md:text-2xl md:leading-relaxed max-w-xl">
              At Wisdom Dental Clinic, we combine cutting-edge technology with personalized care to create your perfect smile.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/book"
                className="animated-button inline-block bg-[#F9D77E] text-[#1EB053] px-8 py-4 rounded-xl text-lg 
                           font-bold hover:bg-[#f4cf6a] transition-all shadow-lg overflow-hidden"
              >
                <span>Book Your Visit Today →</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 bg-[#f8fafb]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Working Hours */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#1EB053]/10"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Clock className="h-12 w-12 text-[#1EB053]" />
                <h2 className="text-3xl font-bold text-gray-900">Working Hours</h2>
              </div>
              <div className="space-y-4 text-lg text-gray-600">
                <p className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span className="font-semibold text-[#1EB053]">7:00AM - 7:00PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold text-[#1EB053]">7:00AM - 4:00PM</span>
                </p>
                <p className="flex justify-between text-gray-400">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </p>
              </div>
            </motion.div>

            {/* Locations */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <MapPin className="h-12 w-12 text-[#1EB053]" />
                <h2 className="text-3xl font-bold text-gray-900">Our Locations</h2>
              </div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#F9D77E]"
                whileHover={{ x: 10 }}
              >
                <h3 className="text-xl font-bold text-[#1EB053] mb-2">Nairobi CBD</h3>
                <p className="text-gray-600">
                Opposite cooperative bank, agha khan walk<br/>
                NHC House 1st floor
                </p>
              </motion.div>

              {/* <motion.div 
                className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#F9D77E]"
                whileHover={{ x: 10 }}
              >
                <h3 className="text-xl font-bold text-[#1EB053] mb-2">Thika Gateway</h3>
                <p className="text-gray-600">
                  2nd Floor, Pisza Plaza,<br/>
                  Gakere Road, Thika
                </p>
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all
                          border-2 border-[#1EB053]/10 hover:border-[#1EB053]/30 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#1EB053]/5 opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <feature.icon className="h-12 w-12 text-[#1EB053] mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Images */}
      <section className="py-20 bg-[#f8fafb]">
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
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all
                          border-2 border-transparent hover:border-[#1EB053]/20"
              >
                <div className="h-48 w-full mb-6 overflow-hidden rounded-xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform"
                  />
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
                      <tech.icon className="h-6 w-6 text-white" />
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
      <GoogleReviews/>
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