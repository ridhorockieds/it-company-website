/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "./pages/home/Button";
import { useEffect } from "react";
const Navbar = ({ title }) => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto py-4 flex justify-between px-4">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" width={36} />
        <h1 className="font-extrabold text-xl md:text-2xl">{title}</h1>
      </div>
      <div className="hidden md:flex items-center gap-4 lg:gap-8 font-semibold">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/ourservices">Our Services</NavLink>
        <NavLink to="/portofolio">Portofolio</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to={"#getintouch"} onClick={() => handleScroll("getintouch")}>
          <Button>Get In Touch</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
