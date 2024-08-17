import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import OurServices from "./pages/OurServices";
import Portofolio from "./pages/Portofolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import "./App.css";
// import Footer from './components/Footer'
// import Navbar from './components/Navbar'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/ourservices" element={<OurServices />} />
      <Route path="/portofolio" element={<Portofolio />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
