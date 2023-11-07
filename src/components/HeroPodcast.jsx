import bg from "../images/hero.png";

const HeroPodcast = () => {
  return (
    <section
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="px-[5%] py-[50px] lg:py-[100px] mb-[50px] lg:mb-[100px] flex flex-col justify-center gap-[30px]"
    >
      <h1 className="w-full lg:w-[500px] text-white font-bold text-[25px] md:text-[30px]">
        Become The Hero Of Your Own Story
      </h1>
      <p className="text-white lg:w-[500px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras lacus
        tellus morbi viverra suspendisse ornare. Sit volutpat, volutpat ut netus
        malesuada enim penatibus non aliquet.
      </p>
      <button className="w-[150px] h-[50px] border-[3px] border-white text-white bg-transparent text-[18px]">
        Contact us
      </button>
    </section>
  );
};

export default HeroPodcast;
