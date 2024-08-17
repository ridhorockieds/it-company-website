import logo from "./../assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPython,
  FaReact,
  FaTwitter,
  FaWordpress,
} from "react-icons/fa6";
import Icons from "./Icons";
import Button from "./pages/home/Button";
import IconWithText from "./IconWithText";
const Footer = () => {
  return (
    <div className="bg-primary text-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16 md:py-20">
        <div className="text-xl font-extrabold-text-white">
          <div className="flex items-center gap-2 pb-5">
            <img src={logo} alt="Logo" width={36} />
            <h1 className="font-extrabold text-2xl">IT Company</h1>
          </div>
          <div className="w-14 py-[0.2rem] rounded-md"></div>
          <p className="text-base">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at
          </p>
          <div className="my-8 flex flex-wrap gap-2 justify-evenly md:justify-between">
            <Icons size="bg-white w-16 h-16">
              <FaLinkedinIn className="text-3xl text-secondary" />
            </Icons>
            <Icons size="bg-white w-16 h-16">
              <FaFacebookF className="text-3xl text-secondary" />
            </Icons>
            <Icons size="bg-white w-16 h-16">
              <FaInstagram className="text-3xl text-secondary" />
            </Icons>
            <Icons size="bg-white w-16 h-16">
              <FaTwitter className="text-3xl text-secondary" />
            </Icons>
          </div>
        </div>
        <div className="text-white">
          <h1 className="text-2xl font-bold pb-4">Services</h1>
          <div className="w-14 py-[0.2rem] bg-secondary rounded-md"></div>
          <div className="my-3">
            <h4 className="md:text-base py-3">Web Design/Development</h4>
            <h4 className="md:text-base py-3">App Development</h4>
            <h4 className="md:text-base py-3">UI/UX Design</h4>
            <h4 className="md:text-base py-3">HubSpot Integration</h4>
            <h4 className="md:text-base py-3">Email Marketing</h4>
            <h4 className="md:text-base py-3">Website Migration</h4>
          </div>
        </div>
        <div className="text-white">
          <h1 className="text-2xl font-bold pb-4">Career</h1>
          <div className="w-14 py-[0.2rem] bg-secondary rounded-md"></div>
          <div className="my-3 py-3 flex gap-4 flex-col">
            <IconWithText
              color="bg-white"
              value1="ReactJS Dev."
              value2="1-5 Years of Exp."
            >
              <FaReact className="text-5xl text-secondary" />
            </IconWithText>
            <IconWithText
              color="bg-white"
              value1="Wordpress Dev."
              value2="1-5 Years of Exp."
            >
              <FaWordpress className="text-5xl text-secondary" />
            </IconWithText>
            <IconWithText
              color="bg-white"
              value1="Python Developer"
              value2="1-5 Years of Exp."
            >
              <FaPython className="text-5xl text-secondary" />
            </IconWithText>
          </div>
        </div>
        <div className="text-white">
          <h1 className="text-2xl font-bold pb-4">Subscribe Us</h1>
          <div className="w-14 py-[0.2rem] bg-secondary rounded-md"></div>
          <div className="my-3">
            <p className="text-xl">
              It is a long established fact that a reader will be distracted by
              the readable
            </p>
            <input
              type="email"
              placeholder="Email"
              className="p-4 placeholder-black font-semibold outline-none w-full rounded-md text-black text-base my-4"
            />
            <Button css={"float-end"}>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
