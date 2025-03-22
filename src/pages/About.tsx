import React from 'react';
import { Award, Users, Globe, Rocket } from 'lucide-react';

function About() {
  const stats = [
    { icon: <Users className="h-8 w-8" />, value: "500+", label: "Clients Worldwide" },
    { icon: <Award className="h-8 w-8" />, value: "15+", label: "Years Experience" },
    { icon: <Globe className="h-8 w-8" />, value: "30+", label: "Countries Served" },
    { icon: <Rocket className="h-8 w-8" />, value: "1000+", label: "Projects Delivered" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#024A59] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">About Statify</h1>
            <p className="text-xl">Empowering businesses through innovative technology solutions</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center text-[#FFA916] mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-[#024A59] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#024A59] mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2009, Statify has grown from a small IT consultancy to a global technology solutions provider. 
                Our journey has been driven by a singular vision: to help businesses harness the power of technology to achieve their full potential.
              </p>
              <p className="text-gray-600">
                Today, we serve clients across multiple industries, providing cutting-edge solutions that drive innovation and growth. 
                Our team of experts brings together decades of experience in business technology, consulting, and digital transformation.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#024A59] text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-[#024A59] mb-4">Innovation</h3>
              <p className="text-gray-600">We constantly push the boundaries of what's possible in technology</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-[#024A59] mb-4">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in everything we do</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-[#024A59] mb-4">Integrity</h3>
              <p className="text-gray-600">We maintain the highest standards of professional integrity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;