import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { ChatWidget } from './components/ChatWidget';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Book } from './pages/Book';
import { Testimonials } from './pages/Testimonials';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';
import { Blog } from './pages/Blog';
import GoogleReviews from './components/GoogleReviews';
// import AppointmentBooking from './components/AppointmentBooking';
// import AppointmentForm from './components/AppointmentForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/book" element={<Book />} />
            <Route path="/testimonials" element={<GoogleReviews />} />
            <Route path='/blogs' element={<Blog/>}/>
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/qwerty" element={<AppointmentBooking/>}/> */}
            {/* <Route path='/kim' element={<AppointmentForm/>}/> */}
          </Routes>
        </main>
        <ChatWidget />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;