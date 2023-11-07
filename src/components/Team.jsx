import t1 from "../images/t1.png";
import t2 from "../images/t2.png";
import t3 from "../images/t3.png";
import t4 from "../images/t4.png";

const Team = () => {
  const team = [
    {
      img: t1,
      name: "Jerome Bell",
      title: "Founder & CEO",
    },
    {
      img: t2,
      name: "Robert Mill",
      title: "Cofounder",
    },
    {
      img: t3,
      name: "Rehab Walls",
      title: "Producer",
    },
    {
      img: t4,
      name: "Steve Winston",
      title: "Editor",
    },
  ];
  return (
    <section className="px-[5%] my-[50px] lg:my-[100px]">
      <h1 className="font-bold text-[25px] md:text-[30px]">Meet Our Team </h1>
      <div className="flex flex-wrap justify-center md:justify-between gap-[50px] lg:gap-0 lg:gap-y-[50px] mt-[20px]">
        {team.map((e, index) => (
          <div
            key={index}
            className="grow w-full md:max-w-[300px] flex flex-col"
          >
            <img src={e.img} className="" />
            <h2 className="font-bold text-[18px] mt-[10px]">{e.name}</h2>
            <span className="text-[#808080]">{e.title}</span>
            <div className="flex gap-[10px]">
              <i className="fa-brands fa-square-facebook text-[#503AE7] text-[20px]"></i>
              <i className="fa-brands fa-square-twitter text-[#503AE7] text-[20px]"></i>
              <i className="fa-brands fa-linkedin text-[#503AE7] text-[20px]"></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
