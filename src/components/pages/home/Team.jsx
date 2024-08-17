import Section from "../../Section";
import PhotoTeam from "./PhotoTeam";
import diana from "./../../../assets/teams/diana.png";
import larry from "./../../../assets/teams/larry.png";
import meghan from "./../../../assets/teams/meghan.png";
import yvonne from "./../../../assets/teams/yvonne.png";
import { teams } from "../../../data/teams";
import getImgUrl from "./../../../utils/utils";

const Team = () => {
  return (
    <Section
      subtitle="Team"
      title="Our Leaders"
      css={"px-4 bg-slate-50 text-center py-16 md:py-24"}
      cssTitle={"text-primary"}
    >
      <div className="grid gap-4 py-8 grid-cols-1 justify-items-center auto-rows-max md:grid-cols-2 md:py-12 lg:grid-cols-4">
        {teams.map((team) => (
          <PhotoTeam
            key={team.id}
            ava={getImgUrl(team.thumbnail)}
            name={team.name}
            profession={team.profession}
          />
        ))}
      </div>
    </Section>
  );
};

export default Team;
