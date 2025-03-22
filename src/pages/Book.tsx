import React from 'react';
import { BookingForm } from '../components/BookingForm';

export function Book() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Book Your Appointment
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Schedule your visit with our experienced dental team. We'll make sure
            your smile gets the care it deserves.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <BookingForm />
        </div>
      </div>
    </div>
  );
}