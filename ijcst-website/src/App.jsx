import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Archives from './pages/Archives';
import Article from './pages/Article';
import Submit from './pages/Submit';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/archives" element={<Archives />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;