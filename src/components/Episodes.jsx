import e1 from "../images/e1.png";
import e2 from "../images/e2.png";
import e3 from "../images/e3.png";
import play from "../images/play.svg";

const Episodes = () => {
  const episodes = [
    {
      img: e1,
      title: "Ep 1: How to build a world-class business brand",
    },
    {
      img: e2,
      title: "Ep 2: Getting the first 100 customers for your business",
    },
    {
      img: e3,
      title: "Ep 3: Should I raise money for my startup, or not?",
    },
  ];
  return (
    <section className="px-[5%] pb-[50px] lg:pb-[100px]">
      <div>
        <h1 className="font-bold text-[30px]">Recent Episodes</h1>
        <p className="w-full md:w-[370px] mt-[16px]">
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black.
        </p>
      </div>
      <div className="flex flex-wrap justify-center md:justify-between gap-[50px] lg:gap-0 mt-[30px] lg:mt-[50px]">
        {episodes.map((e, index) => (
          <div key={index} className="grow w-full md:max-w-[300px] xl:max-w-[375px]">
            <img src={e.img} className="" />
            <h2 className="font-bold text-[20px]">{e.title}</h2>
            <p className="my-[15px]">
              Lorem ipsum at vero eos et accusam et justo duo dolores et ea
              rebum.
            </p>
            <div className="font-bold text-[#503AE7] flex items-center gap-[10px]">
              <img src={play} className="" /> Listen Now
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Episodes;
