// import { TestimonialCard } from '../components/TestimonialCard';
// import type { Testimonial } from '../types';

// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     name: 'Sarah Johnson',
//     image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
//     rating: 5,
//     comment: "The best dental experience I've ever had! The staff was incredibly friendly and professional.",
//     date: 'March 15, 2024'
//   },
//   {
//     id: 2,
//     name: 'Michael Chen',
//     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
//     rating: 5,
//     comment: "Dr. Smith and her team are amazing. They made my dental anxiety disappear completely.",
//     date: 'March 10, 2024'
//   },
//   {
//     id: 3,
//     name: 'Emily Davis',
//     image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
//     rating: 4,
//     comment: 'Very modern facility with state-of-the-art equipment. Highly recommend!',
//     date: 'March 5, 2024'
//   },
//   {
//     id: 4,
//     name: 'James Wilson',
//     image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
//     rating: 5,
//     comment: 'Outstanding service and care. The whole team is knowledgeable and friendly.',
//     date: 'March 1, 2024'
//   }
// ];

// export function Testimonials() {
//   return (
//     <div className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">
//             Patient Testimonials
//           </h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             See what our patients have to say about their experience with us.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {testimonials.map((testimonial) => (
//             <TestimonialCard key={testimonial.id} testimonial={testimonial} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



// import { useEffect, useState } from 'react';
// import { TestimonialCard } from '../components/TestimonialCard';
// import type { Testimonial } from '../types';

// export function Testimonials() {
//   const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await fetch(
//           `/api/reviews?placeId=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID}`
//         );
        
//         const reviews = await response.json();
        
//         const formattedTestimonials = reviews.map((review: any, index: number) => ({
//           id: index + 1,
//           name: review.author_name || 'Anonymous',
//           image: review.profile_photo_url || '/default-avatar.jpg',
//           rating: review.rating,
//           comment: review.text,
//           date: new Date(review.time * 1000).toLocaleDateString('en-US', {
//             month: 'long',
//             day: 'numeric',
//             year: 'numeric'
//           })
//         }));

//         setTestimonials(formattedTestimonials);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to load testimonials');
//         setLoading(false);
//       }
//     };

//     fetchReviews();
//   }, []);

//   if (loading) return <div>Loading testimonials...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">
//             Patient Testimonials
//           </h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             See what our patients have to say about their experience with us.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {testimonials.map((testimonial) => (
//             <TestimonialCard key={testimonial.id} testimonial={testimonial} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



// import { TestimonialCard } from '../components/TestimonialCard';
// import type { Testimonial } from '../types';

// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     name: 'Sarah Johnson',
//     image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
//     rating: 5,
//     comment: "The best dental experience I've ever had! The staff was incredibly friendly and professional.",
//     date: 'March 15, 2024'
//   },
//   {
//     id: 2,
//     name: 'Michael Chen',
//     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
//     rating: 5,
//     comment: "Dr. Smith and her team are amazing. They made my dental anxiety disappear completely.",
//     date: 'March 10, 2024'
//   },
//   {
//     id: 3,
//     name: 'Emily Davis',
//     image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
//     rating: 4,
//     comment: 'Very modern facility with state-of-the-art equipment. Highly recommend!',
//     date: 'March 5, 2024'
//   },
//   {
//     id: 4,
//     name: 'James Wilson',
//     image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
//     rating: 5,
//     comment: 'Outstanding service and care. The whole team is knowledgeable and friendly.',
//     date: 'March 1, 2024'
//   }
// ];

// export function Testimonials() {
//   return (
//     <div className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">
//             Patient Testimonials
//           </h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             See what our patients have to say about their experience with us.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {testimonials.map((testimonial) => (
//             <TestimonialCard key={testimonial.id} testimonial={testimonial} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from 'react';
import { TestimonialCard } from '../components/TestimonialCard';
import type { Testimonial } from '../types';

import video1 from '../images/video1.mp4';
import video2 from '../images/video2.mp4'
import video3 from '../images/video3.mp4';
import video4 from '../images/video4.mp4'
declare global {
  interface Window {
    Elfsight?: {
      Widgets?: {
        init: () => void;
        on: (event: string, callback: () => void) => void;
      };
    };
  }
}

interface ElfsightReview {
  user: {
    name: string;
    thumbnail: string;
  };
  text: string;
  rating: number;
  time: number;
}

export function Testimonials() {
  console.log('Testimonials component mounted')
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const videoTestimonials = [
    {
      id: 'video-1',
      video: video1,
      title: 'Davids\'s Journey',
      description: 'Hear how David found relief after years of having bad breath'
    },
    {
      id: 'video-2',
      video: video2,
      title: "Emily's Experience",
      description: 'Discover how Emily overcame dental anxiety with our gentle care',
    },
    {
      id: 'video-3',
      video: video3, // Make sure you've imported this video too
      title: "Michael's Braces Story",
      description: 'Michael shares his transformative journey with braces and a confident new smile',
    },
    {
      id:'video-4',
      video:video4,
      title:"Teeth cleaning process",
      description:'Experience the best ,most peacefull cleaning process'
    }
  ];

  useEffect(() => {
    const loadReviews = async () => {
      try {
        await loadScript('https://static.elfsight.com/platform/platform.js');
        
        const widget = document.querySelector('.elfsight-app-5af7f1ac-4e1f-49ac-9e29-ed00cbb22246');
        if (!widget) throw new Error('Widget element not found');

        const reviews = await waitForReviews(widget);
        const formatted = formatReviews(reviews);
        
        setTestimonials(formatted);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load reviews');
        setLoading(false);
      }
    };

    loadReviews();
  }, []);

  const loadScript = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) return resolve();

      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.defer = true;
      
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Script load failed: ${src}`));
      
      document.head.appendChild(script);
    });
  };

  const waitForReviews = (widget: Element): Promise<ElfsightReview[]> => {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        observer.disconnect();
        reject(new Error('Reviews loading timed out'));
      }, 10000);

      const observer = new MutationObserver(() => {
        const reviews = widget.getAttribute('data-elfsight-reviews');
        if (reviews) {
          clearTimeout(timeout);
          observer.disconnect();
          resolve(JSON.parse(reviews));
        }
      });

      observer.observe(widget, {
        attributes: true,
        attributeFilter: ['data-elfsight-reviews']
      });
    });
  };

  const formatReviews = (reviews: ElfsightReview[]): Testimonial[] => {
    return reviews.map((review, index) => ({
      id: `review-${index}-${review.user.name}`,
      name: review.user.name,
      image: review.user.thumbnail,
      rating: review.rating,
      comment: review.text,
      date: new Date(review.time * 1000).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }));
  };
  console.log('All videos:', videoTestimonials);

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

        {/* Video Testimonials Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold text-center mb-12 text-gray-800">
            Watch Their Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((video) => (
              <div key={video.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
                  <video 
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    controls
                    muted // Added for better mobile compatibility
                    playsInline // Added for iOS compatibility
                  >
                    <source src={video.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Written Testimonials Section */}
        <div>
          <h2 className="text-2xl font-semibold text-center mb-12 text-gray-800">
            What Our Patients Say
          </h2>

          {loading && (
            <div className="text-center text-gray-600">Loading reviews...</div>
          )}

          {error && (
            <div className="text-center text-red-500">{error}</div>
          )}

          {!loading && !error && (
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Hidden Elfsight Widget Container */}
      <div 
        className="elfsight-app-5af7f1ac-4e1f-49ac-9e29-ed00cbb22246" 
        data-elfsight-app-lazy
        style={{ display: 'none' }}
      />
    </div>
  );
}