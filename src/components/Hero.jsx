import v1 from "../images/v1.png";
import v2 from "../images/v2.png";
import v3 from "../images/v3.png";
import v4 from "../images/v4.png";
import v5 from "../images/v5.png";
import v6 from "../images/v6.png";

const Hero = () => {
  const vectors = [v1, v2, v3, v4, v5, v6];
  return (
    <section className="w-[90%] mx-auto min-h-screen flex flex-wrap flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-[30px] pt-[60px]">
      <div className="w-full lg:w-[440px] flex flex-col gap-[30px]">
        <h1 className="font-bold text-[30px] lg:text-[50px]">
          Become The Hero Of Your Own Story
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
        </p>
        <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-0 items-center">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="w-full lg:w-3/4 h-[50px] bg-[#F4F2FF] outline-none"
          />
          <button className="w-1/2 lg:w-1/4 h-[50px] bg-[#503AE7] text-white">
            Subscribe
          </button>
        </div>
      </div>
      <div className="w-full md:w-fit gap-0 md:gap-[48px] flex justify-between md:justify-between items-center">
        {vectors.map((e, i) => (
          <img key={i} src={e} className="" />
        ))}
      </div>
    </section>
  );
};

export default Hero;
