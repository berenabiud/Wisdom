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
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
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