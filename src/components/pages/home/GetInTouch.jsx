import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapLocationDot,
  FaPhoneVolume,
  FaTwitter,
} from "react-icons/fa6";
import Icons from "../../Icons";
import Section from "../../Section";
import Button from "./Button";
import IconWithText from "../../IconWithText";

const GetInTouch = () => {
  return (
    <div id="getintouch">
      <Section
        subtitle={"Get In Touch"}
        title={"Hey! Let's Talk"}
        css={"px-4 bg-primary text-center py-16 md:py-24"}
        cssTitle={"text-white"}
      >
        <div className="py-8 grid grid-cols-1 gap-4 md:grid-cols-12 md:py-12 lg:gap-8 text-left">
          <div className="p-4 md:p-5 rounded-md bg-white col-span-1 md:col-span-6 lg:col-span-8">
            <input
              type="text"
              className="w-full px-4 py-2 my-2 md:my-3 md:px-4 md:py-3 bg-slate-100 outline-none rounded-md placeholder-black md:text-lg"
              placeholder="Name"
            />
            <input
              type="email"
              className="w-full px-4 py-2 my-2 md:my-3 md:px-4 md:py-3 bg-slate-100 outline-none rounded-md placeholder-black md:text-lg"
              placeholder="Email"
            />
            <input
              type="text"
              className="w-full px-4 py-2 my-2 md:my-3 md:px-4 md:py-3 bg-slate-100 outline-none rounded-md placeholder-black md:text-lg"
              placeholder="Phone"
            />
            <textarea
              cols="10"
              rows="2"
              className="w-full px-4 py-2 my-2 md:my-3 md:px-4 md:py-3 bg-slate-100 outline-none rounded-md placeholder-black md:text-lg resize-none"
              placeholder="Your Message"
            ></textarea>
            <Button>Send Now</Button>
          </div>
          <div className="p-4 md:p-5 rounded-md bg-white col-span-1 md:col-span-6 lg:col-span-4">
            <IconWithText
              textcolor="text-primary"
              value1="Call Anytime"
              value2="+ 91 23678 27867"
              value3="+ 91 67678 92878"
            >
              <FaPhoneVolume className="text-2xl md:text-3xl xl:text-4xl text-secondary" />
            </IconWithText>
            <IconWithText
              textcolor="text-primary"
              value1="Send Email"
              value2="example@mail.com"
              value3="another@mail.com"
            >
              <FaEnvelope className="text-2xl md:text-3xl xl:text-4xl text-secondary" />
            </IconWithText>
            <IconWithText
              textcolor="text-primary"
              value1="Visit Us"
              value2="20 Island Park Road,"
              value3="New Jearsy, New York, USA"
            >
              <FaMapLocationDot className="text-2xl md:text-3xl xl:text-4xl text-secondary" />
            </IconWithText>
            <div className="text-center my-4">
              <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
                Follow Us
              </h2>
            </div>
            <div className="flex flex-wrap justify-evenly md:justify-between gap-2 md:gap-4">
              <Icons size="bg-secondary w-14 h-14 md:w-16 md:h-16">
                <FaLinkedinIn className="text-4xl text-white" />
              </Icons>
              <Icons size="bg-secondary w-14 h-14 md:w-16 md:h-16">
                <FaInstagram className="text-4xl text-white" />
              </Icons>
              <Icons size="bg-secondary w-14 h-14 md:w-16 md:h-16">
                <FaFacebookF className="text-4xl text-white" />
              </Icons>
              <Icons size="bg-secondary w-14 h-14 md:w-16 md:h-16">
                <FaTwitter className="text-4xl text-white" />
              </Icons>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default GetInTouch;
