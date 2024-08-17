import { RiCustomerService2Fill } from "react-icons/ri";
import Section from "../../Section";
import diverse from "./../../../assets/diverse-friend.png";

import Icons from "../../Icons";
const AboutUs = () => {
  return (
    <div className="bg-slate-50">
      <div className="container mx-auto grid gap-4 grid-cols-1 lg:grid-cols-2 px-4 py-16 md:py-24 lg:py-32">
        <img
          src={diverse}
          alt="Images"
          className="overflow-hidden rounded-lg w-full"
        />
        <Section
          subtitle="About Us"
          title="One of the Fastest Way to Business Growth"
          css={"content-between"}
          cssTitle={"text-primary"}
        >
          <p className="py-3 text-base lg:py-2 md:text-lg">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed
          </p>
          <div className="flex content-center bg-white rounded-md">
            <div className="p-2">
              <Icons size="w-16 h-16 md:w-16 md:h-16 bg-gray-100">
                <RiCustomerService2Fill className="text-4xl text-secondary" />
              </Icons>
            </div>
            <div className="p-2">
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-primary">
                Get Instant Professional Advice
              </h1>

              <p className="md:text-lg font-semibold">
                Ready to Help :{" "}
                <span className="text-secondary font-bold">
                  +1 356 678 7897
                </span>
              </p>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default AboutUs;
