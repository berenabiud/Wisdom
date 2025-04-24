// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Navigation } from './components/Navigation';
// import { ChatWidget } from './components/ChatWidget';
// import { Home } from './pages/Home';
// import { Services } from './pages/Services';
// import { Book } from './pages/Book';
// import { Contact } from './pages/Contact';
// import { Footer } from './components/Footer';
// import { Blog } from './pages/Blog';
// import GoogleReviews from './components/GoogleReviews';


// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-50">
//         <Navigation />
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/book" element={<Book />} />
//             <Route path="/testimonials" element={<GoogleReviews />} />
//             <Route path='/blogs' element={<Blog/>}/>
//             <Route path="/contact" element={<Contact />} />
            
//           </Routes>
//         </main>
//         <ChatWidget />
//         <Footer/>
//       </div>
//     </Router>
//   );
// }

// export default App;

// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { ChatWidget } from './components/ChatWidget';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Book } from './pages/Book';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';
import { Blog, BlogPost } from './pages/Blog';
import GoogleReviews from './components/GoogleReviews';
import { PopupProvider } from './popups/PopupContext';
import { Popup } from './popups/Popup';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
// import BlogPost from './pages/Blog'

function App() {
  return (
    <PopupProvider>
      
      <Router>
        <div className="min-h-screen bg-gray-50 relative">
          <Navigation />
          <main>
          <ScrollToTop/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/book" element={<Book />} />
              <Route path="/testimonials" element={<GoogleReviews />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path='/about-us' element={<About/>}/>
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog/:id" element={<BlogPost />} />
            </Routes>
          </main>
          <ChatWidget />
          <Footer />
          <Popup /> 
        </div>
      </Router>
    </PopupProvider>
  );
}

export default App;

