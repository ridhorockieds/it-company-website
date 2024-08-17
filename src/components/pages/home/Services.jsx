import {
  FaBezierCurve,
  FaDesktop,
  FaEnvelopeOpen,
  FaHubspot,
  FaMobile,
  FaServer,
} from "react-icons/fa6";
import Section from "../../Section";
import CardServices from "./CardServices";
import { services } from "./../../../data/services";
import Icons from "../../Icons";

const Services = () => {
  return (
    <Section
      subtitle="Services"
      title="Our Expertice"
      css={"px-4 bg-white text-center py-16 md:py-24"}
      cssTitle={"text-primary"}
    >
      <div className="grid grid-cols-1 gap-4 py-4 md:py-6 md:grid-cols-2 lg:py-8 lg:grid-cols-3 text-left">
        {services.map((service) => (
          <CardServices
            key={service.id}
            title={service.title}
            text={service.text}
          >
            <FaDesktop className="text-4xl text-secondary" />
          </CardServices>
        ))}
      </div>
    </Section>
  );
};

export default Services;
