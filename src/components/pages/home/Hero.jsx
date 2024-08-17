import Section from "../../Section";
import Button from "./Button";
import imgHero from "./../../../assets/cheerful.png";

const Hero = () => {
  return (
    <div className="container mx-auto relative">
      <div className="grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-2 py-16 md:py-24 lg:py-32">
        <div className="content-center items-center w-3/4 lg:2/3 mx-auto relative">
          <Section
            subtitle="We Are Here"
            title="Better Insight For Business Growth"
            css={"content-between"}
            cssTitle={"text-primary"}
          >
            <div className="py-4">
              <div className="absolute -z-10 w-24 h-24 -top-8 -left-10 md:w-36 md:h-36 md:-top-10 md:-left-12 lg:w-40 lg:h-40 lg:-top-14 lg:-left-14 xl:w-44 xl:h-44 xl:top-24 xl:-left-16 bg-accent rounded-full opacity-75"></div>
              <Button>View More</Button>
            </div>
          </Section>
        </div>
        <div className="mx-auto">
          <div className="w-80 h-80 md:w-72 md:h-72 xl:w-[36rem] xl:h-[36rem] bg-red-100 rounded-full flex justify-center items-center relative overflow-hidden">
            <div className="w-3/4 h-3/4 bg-red-200 rounded-full flex justify-center items-center">
              <div className="w-2/3 h-2/3 bg-red-300 rounded-full flex justify-center items-center">
                <div className="w-80 h-80 md:w-72 md:h-72 xl:w-[36rem] xl:h-[36rem] flex justify-center items-center">
                  <img
                    src={imgHero}
                    alt=""
                    className="absolute w-64 md:w-56 xl:w-[28rem] "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute z-20 w-16 h-32 bottom-0 md:w-20 md:h-40 lg:w-28 lg:h-52 lg:top-3/4 right-0 bg-slate-300 rounded-l-full rounded-r-none opacity-50"></div>
        <div className="absolute z-10 w-32 h-32 left-10 md:left-1/3 md:w-36 md:h-36 md:-bottom-24 lg:w-60 lg:h-60 -bottom-16 lg:-bottom-32 bg-slate-200 rounded-full opacity-40"></div>
      </div>
    </div>
  );
};

export default Hero;
