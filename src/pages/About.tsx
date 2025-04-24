
import { Smile, Shield, Clock, HeartPulse, Microscope, Rocket, Bone, BookUser } from 'lucide-react';
import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

const About = () => {
  const stats = [
    { icon: <Bone className="h-8 w-8" />, value: "3+", label: "Years Experience" },
    { icon: <Smile className="h-8 w-8" />, value: "1K+", label: "Happy Patients" },
    { icon: <Shield className="h-8 w-8" />, value: "500+", label: "Procedures Done" },
    { icon: <Clock className="h-8 w-8" />, value: "24/7", label: "Emergency Care" }
  ];

  // const team = [
  //   { name: "Dr. Sarah Johnson", role: "Lead Dentist", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2" },
  //   { name: "Dr. Michael Chen", role: "Orthodontist", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d" },
  //   { name: "Dr. Emma Wilson", role: "Pediatric Dentist", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f" }
  // ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-[#1EB053]/90 to-[#1EB053]/70 py-24 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <motion.h1 
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="text-5xl font-bold mb-4"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
            >
              Committed to Healthy Smiles
            </motion.h1>
            <p className="text-xl max-w-2xl mx-auto">
              At Wisdom Dental, we combine cutting-edge technology with compassionate care to deliver exceptional dental experiences.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={{ hidden: { y: 20 }, visible: { y: 0 } }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center text-[#1EB053] mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        className="space-y-6"
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-gray-800">
          From Local Care to Smile Revolution
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          What began in 2022 as a modest neighborhood practice with Dr. Joan's vision has blossomed into East Africa's first digital dental ecosystem. Through years of perfecting precision dentistry, we've restored over 5,000 smiles while maintaining our core belief: exceptional dental care should feel personal, not clinical.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our evolution mirrors Nairobi's dental health transformation - from emergency extractions to preventive smile architecture. Today, we combine this rich heritage with German-engineered sterilization protocols and Japanese diagnostic systems to create what the Kenya Dental Association recognizes as "the new standard in oral wellness."
        </p>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <HeartPulse className="h-6 w-6 text-[#1EB053] flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Biomimetic Philosophy</h3>
              <p className="text-gray-600">Tooth-preserving treatments mimicking natural enamel behavior</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Microscope className="h-6 w-6 text-[#1EB053] flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Precision Diagnostics</h3>
              <p className="text-gray-600">3D CBCT scans, intraoral cameras, and caries-detection lasers</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <BookUser className="h-6 w-6 text-[#1EB053] flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Continuing Education</h3>
              <p className="text-gray-600">Weekly training sessions with global dental innovators</p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div 
        className="relative rounded-2xl overflow-hidden"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="https://media.istockphoto.com/id/2153871515/photo/dentist-performing-a-checkup-on-patient.webp?a=1&b=1&s=612x612&w=0&k=20&c=XN6sDf_Vl3R5FR84pgZ8dwB94MZgjvt4PC1gcpk8QPw="
          alt="Digital smile design consultation"
          className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1EB053]/20 to-[#F9D77E]/20" />
        <div className="absolute bottom-6 left-6 bg-white/90 p-4 rounded-lg shadow-md">
          <h4 className="font-semibold text-gray-800">Smile Design in Action</h4>
          <p className="text-sm text-gray-600">Dr. Joan using 3D SmileSimulator™ to plan cosmetic transformations</p>
        </div>
      </motion.div>
    </div>
  </div>
</div>

      {/* Team Section */}
      {/* <div className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Meet Our Expert Dentists
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <h3 className="text-xl font-bold text-[#1EB053] mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="flex space-x-4">
                 
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Values Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The foundation of everything we do at Wisdom Dental</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-[#F9D77E]/10 p-8 rounded-2xl border border-[#F9D77E]/20"
            >
              <div className="w-12 h-12 bg-[#1EB053] rounded-lg flex items-center justify-center mb-6">
                <HeartPulse className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Compassionate Care</h3>
              <p className="text-gray-600">Gentle, anxiety-free treatments with empathy at every step</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-[#F9D77E]/10 p-8 rounded-2xl border border-[#F9D77E]/20"
            >
              <div className="w-12 h-12 bg-[#1EB053] rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Clinical Excellence</h3>
              <p className="text-gray-600">Highest standards of sterilization and treatment protocols</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-[#F9D77E]/10 p-8 rounded-2xl border border-[#F9D77E]/20"
            >
              <div className="w-12 h-12 bg-[#1EB053] rounded-lg flex items-center justify-center mb-6">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Continuous Innovation</h3>
              <p className="text-gray-600">Always adopting the latest dental technologies and techniques</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;