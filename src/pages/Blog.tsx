// import React from 'react';
// import { Link } from 'react-router-dom';
// import { CalendarDays, Clock, User, ArrowRight, Tag } from 'lucide-react';

// // Mock data - replace with actual data from your CMS/API
// const posts = [
//   {
//     id: 1,
//     title: 'The Future of Dental Care: Emerging Technologies',
//     excerpt: 'Explore the latest advancements in dental technology and how they\'re transforming patient care...',
//     author: 'Dr. Sarah Johnson',
//     date: '2024-03-15',
//     readTime: '5 min',
//     tags: ['Technology', 'Innovation'],
//     category: 'Dental Tech',
//     image: 'https://picsum.photos/600/400?random=1'
//   },
//   {
//     id: 2,
//     title: 'Maintaining Oral Health: A Complete Guide',
//     excerpt: 'Daily habits that can significantly improve your oral health and prevent common dental issues...',
//     author: 'Dr. Michael Chen',
//     date: '2024-03-12',
//     readTime: '8 min',
//     tags: ['Wellness', 'Prevention'],
//     category: 'Oral Health',
//     image: 'https://picsum.photos/600/400?random=2'
//   },
//   {
//     id: 2,
//     title: 'Maintaining Oral Health: A Complete Guide',
//     excerpt: 'Daily habits that can significantly improve your oral health and prevent common dental issues...',
//     author: 'Dr. Michael Chen',
//     date: '2024-03-12',
//     readTime: '8 min',
//     tags: ['Wellness', 'Prevention'],
//     category: 'Oral Health',
//     image: 'https://picsum.photos/600/400?random=2'
//   },

// ];

// const categories = [
//   'All Posts',
//   'Oral Health',
//   'Dental Tech',
//   'Preventive Care',
//   'Cosmetic Dentistry',
//   'Pediatric Dentistry'
// ];

// export function Blog() {
//   const [selectedCategory, setSelectedCategory] = React.useState('All Posts');

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Blog Header */}
//       <header className="bg-gradient-to-r from-[#1EB053] to-[#169544] text-white py-20 px-4">
//         <div className="max-w-6xl mx-auto text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">Dental Insights Blog</h1>
//           <p className="text-xl md:text-2xl text-white/90">
//             Expert advice, latest trends, and oral health tips from our professionals
//           </p>
//         </div>
//       </header>

//       {/* Featured Posts */}
//       <section className="max-w-6xl mx-auto px-4 py-16">
//         <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {posts.slice(0, 3).map(post => (
//             <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
//               <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
//               <div className="p-6">
//                 <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
//                   <Tag className="w-4 h-4" />
//                   {post.tags.join(', ')}
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
//                 <p className="text-gray-600 mb-4">{post.excerpt}</p>
//                 <div className="flex items-center justify-between text-sm text-gray-500">
//                   <div className="flex items-center gap-2">
//                     <User className="w-4 h-4" />
//                     {post.author}
//                   </div>
//                   <Link to={`/blogs`} className="flex items-center gap-1 text-[#1EB053] hover:text-[#169544]">
//                     Read More <ArrowRight className="w-4 h-4" />
//                   </Link>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </section>

//       {/* All Posts */}
//       <section className="max-w-6xl mx-auto px-4 pb-16">
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Categories Sidebar */}
//           <div className="md:w-64 space-y-2">
//             <h3 className="text-lg font-semibold mb-4">Categories</h3>
//             {categories.map(category => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
//                   selectedCategory === category
//                     ? 'bg-[#1EB053] text-white'
//                     : 'hover:bg-gray-100'
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>

//           {/* Posts List */}
//           <div className="flex-1">
//             <h3 className="text-lg font-semibold mb-4">Latest Articles</h3>
//             <div className="space-y-8">
//               {posts.map(post => (
//                 <article key={post.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
//                   <div className="flex flex-col md:flex-row gap-6">
//                     <img
//                       src={post.image}
//                       alt={post.title}
//                       className="md:w-48 md:h-48 object-cover rounded-xl"
//                     />
//                     <div className="flex-1">
//                       <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
//                         <CalendarDays className="w-4 h-4" />
//                         {new Date(post.date).toLocaleDateString()}
//                         <Clock className="w-4 h-4 ml-3" />
//                         {post.readTime}
//                       </div>
//                       <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
//                       <p className="text-gray-600 mb-4">{post.excerpt}</p>
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center gap-2">
//                           <User className="w-4 h-4" />
//                           {post.author}
//                         </div>
//                         <Link
//                           to={`/blogs`}
//                           className="flex items-center gap-1 text-[#1EB053] hover:text-[#169544]"
//                         >
//                           Read More <ArrowRight className="w-4 h-4" />
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { CalendarDays, Clock, User, ArrowRight, Tag } from 'lucide-react';
import future from '../images/fut.jpg'
import maintainance from '../images/main 2.jpg'
import Pediatric from '../images/Pediatric Dental.avif'

const posts = [
  {
    id: 1,
    title: 'The Future of Dental Care: Emerging Technologies',
    content: `
      <p>Dental technology has made remarkable strides in recent years, revolutionizing how we approach oral health care. From AI-powered diagnostics to 3D-printed dental prosthetics, the future of dentistry is here.</p>
      <h3>Key Technologies Transforming Dentistry</h3>
      <ul>
        <li>Intraoral scanners for precise digital impressions</li>
        <li>Laser dentistry for minimally invasive procedures</li>
        <li>Teledentistry platforms for remote consultations</li>
        <li>CAD/CAM systems for same-day restorations</li>
      </ul>
      <p>These innovations not only improve patient outcomes but also enhance the overall treatment experience.</p>
    `,
    excerpt: 'Explore the latest advancements in dental technology and how they\'re transforming patient care...',
    author: 'Dr. Sarah Johnson',
    date: '2024-03-15',
    readTime: '5 min',
    tags: ['Technology', 'Innovation'],
    category: 'Dental Tech',
    image: future
  },
  {
    id: 2,
    title: 'Maintaining Oral Health: A Complete Guide',
    content: `
      <p>Good oral health is fundamental to overall wellness. This comprehensive guide covers essential practices for maintaining optimal dental hygiene.</p>
      <h3>Daily Oral Care Routine</h3>
      <ol>
        <li>Brush twice daily with fluoride toothpaste</li>
        <li>Floss at least once a day</li>
        <li>Use antimicrobial mouthwash</li>
        <li>Clean your tongue regularly</li>
      </ol>
      <p>Regular dental check-ups and professional cleanings are equally important for preventing common dental issues.</p>
    `,
    excerpt: 'Daily habits that can significantly improve your oral health and prevent common dental issues...',
    author: 'Dr. Michael Chen',
    date: '2024-03-12',
    readTime: '8 min',
    tags: ['Wellness', 'Prevention'],
    category: 'Oral Health',
    image: maintainance
  },
  {
    id: 3,
    title: 'Pediatric Dental Care: Building Healthy Habits Early',
    content: `
      <p>Early dental care sets the foundation for lifelong oral health. Learn how to make dental visits positive experiences for children.</p>
      <h3>Tips for Parents</h3>
      <ul>
        <li>Start dental visits by first birthday</li>
        <li>Use child-friendly oral care products</li>
        <li>Make brushing a fun family activity</li>
        <li>Watch for developmental milestones</li>
      </ul>
      <p>Preventive care in childhood can avoid complex dental issues in adulthood.</p>
    `,
    excerpt: 'Essential strategies for ensuring your child\'s dental health from an early age...',
    author: 'Dr. Emily Wilson',
    date: '2024-03-10',
    readTime: '6 min',
    tags: ['Children', 'Prevention'],
    category: 'Pediatric Dentistry',
    image: Pediatric
  }
];

const categories = [
  'All Posts',
  'Oral Health',
  'Dental Tech',
  'Preventive Care',
  'Cosmetic Dentistry',
  'Pediatric Dentistry'
];

export function Blog() {
  const [selectedCategory, setSelectedCategory] = React.useState('All Posts');

  const filteredPosts = selectedCategory === 'All Posts' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Blog Header */}
      <header className="bg-gradient-to-r from-[#1EB053] to-[#169544] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Dental Insights Blog</h1>
          <p className="text-xl md:text-2xl text-white/90">
            Expert advice, latest trends, and oral health tips from our professionals
          </p>
        </div>
      </header>

      {/* Featured Posts */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {filteredPosts.slice(0, 3).map(post => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Tag className="w-4 h-4" />
                  {post.tags.join(', ')}
                </div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  {/* <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div> */}
                  <Link to={`/blog/${post.id}`} className="flex items-center gap-1 text-[#1EB053] hover:text-[#169544]">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* All Posts */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Categories Sidebar */}
          <div className="md:w-64 space-y-2">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#1EB053] text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts List */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Latest Articles</h3>
            <div className="space-y-8">
              {filteredPosts.map(post => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex flex-col md:flex-row gap-6">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="md:w-48 md:h-48 object-cover rounded-xl"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                        <CalendarDays className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                        <Clock className="w-4 h-4 ml-3" />
                        {post.readTime}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        {/* <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div> */}
                        <Link
                          to={`/blog/${post.id}`}
                          className="flex items-center gap-1 text-[#1EB053] hover:text-[#169544]"
                        >
                          Read More <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function BlogPost() {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blogs" className="text-[#1EB053] hover:text-[#169544]">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="max-w-4xl mx-auto px-4 py-16">
        <article className="bg-white rounded-2xl shadow-lg p-8">
          <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-xl mb-6" />
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
            <span className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Tag className="w-4 h-4" />
              {post.tags.join(', ')}
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
          <div className="mt-8">
            <Link to="/blogs" className="flex items-center gap-1 text-[#1EB053] hover:text-[#169544]">
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Blog
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}