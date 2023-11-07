import Episodes from "../components/Episodes";
import HeroAbout from "../components/HeroAbout";
import Sponsors from "../components/Sponsors";
import Team from "../components/Team";
import Tips from "../components/Tips";
import Words from "../components/Words";

const About = () => {
  return (
    <>
      <HeroAbout />
      <Tips />
      <Words />
      <Team />
      <Episodes/>
      <Sponsors/>
    </>
  );
};

export default About;
