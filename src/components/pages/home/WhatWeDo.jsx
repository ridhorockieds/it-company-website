import { FaCrown, FaLightbulb } from "react-icons/fa6";
import Section from "../../Section";
import wwd from "./../../../assets/young-creative.png";
import Button from "./Button";
import Icons from "../../Icons";
const WhatWeDo = () => {
  return (
    <div className="bg-slate-50">
      <div className="container mx-auto grid px-4 gap-4 grid-cols-1 lg:grid-cols-2 py-16 md:py-24 lg:py-32">
        <img
          src={wwd}
          alt="Images"
          className="overflow-hidden rounded-lg w-full"
        />
        <Section
          subtitle="What We Do"
          title="We Develope Product That People Love to Use."
          css={"content-between"}
          cssTitle={"text-primary"}
        >
          <p className="py-3">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed, Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
            <div className="flex content-center bg-white rounded-md p-2 gap-2 text">
              <div className="bg-red-100 rounded-md">
                <Icons size="w-12 h-12 lg:w-14 lg:h-14">
                  <FaLightbulb className="text-3xl lg:text-4xl text-secondary" />
                </Icons>
              </div>
              <div>
                <h1 className="md:text-lg font-bold text-secondary">
                  Our Vision
                </h1>
                <p className="font-semibold text-primary leading-none">
                  It is a long established fact that
                </p>
              </div>
            </div>
            <div className="flex content-center bg-white rounded-md p-2 gap-2">
              <div className="bg-red-100 rounded-md">
                <Icons size="w-12 h-12 lg:w-14 lg:h-14">
                  <FaCrown className="text-3xl lg:text-4xl text-secondary" />
                </Icons>
              </div>
              <div>
                <h1 className="md:text-lg font-bold text-secondary">
                  Our Goal
                </h1>
                <p className="font-semibold text-primary leading-none">
                  It is a long established fact that
                </p>
              </div>
            </div>
          </div>
          <div className="py-2">
            <Button>View More</Button>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default WhatWeDo;
