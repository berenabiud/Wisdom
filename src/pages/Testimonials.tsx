import React from 'react';
import { TestimonialCard } from '../components/TestimonialCard';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    rating: 5,
    comment: "The best dental experience I've ever had! The staff was incredibly friendly and professional.",
    date: 'March 15, 2024'
  },
  {
    id: 2,
    name: 'Michael Chen',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    rating: 5,
    comment: "Dr. Smith and her team are amazing. They made my dental anxiety disappear completely.",
    date: 'March 10, 2024'
  },
  {
    id: 3,
    name: 'Emily Davis',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    rating: 4,
    comment: 'Very modern facility with state-of-the-art equipment. Highly recommend!',
    date: 'March 5, 2024'
  },
  {
    id: 4,
    name: 'James Wilson',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
    rating: 5,
    comment: 'Outstanding service and care. The whole team is knowledgeable and friendly.',
    date: 'March 1, 2024'
  }
];

export function Testimonials() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Patient Testimonials
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our patients have to say about their experience with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}