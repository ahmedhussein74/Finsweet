import bg from "../images/podcast.png";
import play from "../images/play2.svg";

const IntroPodcast = () => {
  return (
    <section
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[500px] px-[5%] flex items-center mb-[50px] lg:mb-[100px]"
    >
      <div className="w-full md:w-[500px] h-[450px] bg-opacity-75 bg-[#503AE7] p-[20px] md:p-[30px] flex flex-col justify-center border-l-[10px] border-l-[#1AD993]">
        <span className="text-[#F4F2FF]">Featured</span>
        <h1 className="font-bold text-[28px] md:text-[30px] text-white">
          A UX Case Study on Creating a Studious Environment{" "}
        </h1>
        <p className="text-white mt-[15px]">
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle. By the same
          illusion which lifts the horizon
        </p>
        <div className="font-bold text-white flex items-center gap-[10px] mt-[15px]">
          <img src={play} className="" /> Listen Now
        </div>
      </div>
    </section>
  );
};

export default IntroPodcast;
