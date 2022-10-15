import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Navbar from "./components/Navbar/Navbar"
import Yogatypes from './components/Yogatypes/Yogatypes';
import Courses2 from './components/Courses2/Courses2';
import Blog from './components/Blog/Blog';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Teachers from './components/Teachers/Teachers';
import BlogDetails from './components/BlogDetails/BlogDetails';
import { Helmet } from 'react-helmet';
import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Helmet>
          <title>Yoga in Rishikesh | Yoga in India | Yoga Teacher Training Rishikesh | Yoga Teacher Training India | jeevmoksha yoga</title>
          <meta
            name="title"
            content="Yoga in Rishikesh , Yoga in India , Yoga Teacher Training Rishikesh , Yoga Teacher Training India , jeevmoksha yoga"
          />
          <meta
            name="description"
            content="Are you in search of the Best Yoga Teacher Training in Rishikesh, India? JeevMoksha! We are known for special Yoga Teacher Training Rishikesh. To Learn Yoga, Request a quote now"
          />
        </Helmet>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-jeevmoksha" element={<About />} />
          <Route path="/our-teachers" element={<Teachers />} />
          <Route path="/200-hour-yoga-teacher-training-in-rishikesh" element={<Courses />} />
          <Route path="/500-hour-yoga-teacher-training-in-rishikesh" element={<Courses2 />} />
          <Route path="/yogatypes-jeevmokshya" element={<Yogatypes />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogpage" element={<BlogDetails />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
