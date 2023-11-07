import s1 from "../images/s1.svg";
import s2 from "../images/s2.svg";
import s3 from "../images/s3.svg";
import s4 from "../images/s4.svg";
import s5 from "../images/s5.svg";

const Sponsors = () => {
  return (
    <section className="md:w-[90%] mx-auto py-[50px] bg-[#503AE7]">
      <h1 className="font-bold text-center text-[30px] text-white">
        Our Sponsors
      </h1>
      <div className="marquee gap-[50px] flex overflow-hidden w-[90%] mx-auto mt-[50px]">
        <div className="marquee__group min-w-full flex shrink-0 justify-around gap-[50px]">
          <img src={s1} />
          <img src={s2} />
          <img src={s3} />
          <img src={s4} />
          <img src={s5} />
        </div>
        <div
          aria-hidden="true"
          className="marquee__group min-w-full flex shrink-0 justify-around gap-[50px]"
        >
          <img src={s1} />
          <img src={s2} />
          <img src={s3} />
          <img src={s4} />
          <img src={s5} />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
