import { FaBezierCurve } from "react-icons/fa6";
import Section from "../../Section";
import CardServices from "./CardServices";
import { plannings } from "./../../../data/planning";

const Planning = () => {
  return (
    <Section
      subtitle="Planning"
      title="Our Process"
      css={"px-4 bg-white text-center py-16 md:py-24 lg:py-32"}
      cssTitle={"text-primary"}
    >
      <div className="grid grid-cols-1 gap-4 py-4 md:py-6 md:grid-cols-2 lg:py-8 lg:grid-cols-4 text-left">
        {plannings.map((planning) => (
          <CardServices
            key={planning.id}
            id={planning.id}
            title={planning.title}
            text={planning.text}
          >
            <FaBezierCurve className="text-4xl text-secondary" />
          </CardServices>
        ))}
      </div>
    </Section>
  );
};

export default Planning;
