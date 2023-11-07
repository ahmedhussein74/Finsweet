import IntroPodcast from "../components/IntroPodcast";
import Episodes from "../components/Episodes";
import HeroPodcast from "../components/HeroPodcast";
import Sponsors from "../components/Sponsors";

const Podcast = () => {
  return (
    <>
      <p className="h-[60px]"></p>
      <IntroPodcast />
      <Episodes />
      <HeroPodcast />
      <Sponsors />
    </>
  );
};

export default Podcast;
