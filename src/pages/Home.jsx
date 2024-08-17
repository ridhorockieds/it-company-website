import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutUs from "../components/pages/home/AboutUs";
import GetInTouch from "../components/pages/home/GetInTouch";
import Hero from "../components/pages/home/Hero";
import OurBlog from "../components/pages/home/OurBlog";
import Planning from "../components/pages/home/Planning";
import Quote from "../components/pages/home/Quote";
import Services from "../components/pages/home/Services";
import Team from "../components/pages/home/Team";
import Testimonial from "../components/pages/home/Testimonial";
import WhatWeDo from "../components/pages/home/WhatWeDo";

const Home = () => {
  return (
    <>
      <Navbar title="IT Company" />
      <Hero />
      <AboutUs />
      <Planning />
      <WhatWeDo />
      <Services />
      <Team />
      <Testimonial />
      <GetInTouch />
      <OurBlog />
      <Quote />
      <Footer />
    </>
  );
};

export default Home;
