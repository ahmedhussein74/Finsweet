import t1 from "../images/tip1.svg";
import t2 from "../images/tip2.svg";
import t3 from "../images/tip3.svg";

const Tips = () => {
  const tips = [
    { img: t1, title: "500+ Podcast" },
    { img: t2, title: "24M Views" },
    { img: t3, title: "600k Subs" },
  ];
  return (
    <section className="px-[5%] flex flex-wrap justify-center md:justify-between gap-[50px] lg:gap-0">
      {tips.map((e, index) => (
        <div
          key={index}
          className="grow w-full md:max-w-[300px] xl:max-w-[375px] flex flex-col items-center gap-[10px]"
        >
          <img src={e.img} className="" />
          <h2 className="font-bold">{e.title}</h2>
          <p className="text-center">
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle.{" "}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Tips;
