import r1 from "../images/review1.svg";
import r2 from "../images/review2.svg";
import r3 from "../images/review3.svg";
import stars from "../images/stars.svg";

const Reviews = () => {
  const reviews = [
    {
      img: r1,
      name: "Eve Madien",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget condimentum enim libero ultricies amet odio fringilla. Ut nibh morbi augue porta aliquet commodo. Fermentum auctor lacus eget in ut integer viverra sed. Penatibus tortor consequat.",
    },
    {
      img: r2,
      name: "Ash Benfred",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget condimentum enim libero ultricies amet odio fringilla.",
    },
    {
      img: r3,
      name: "Ryan Smith",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget condimentum enim libero ultricies amet odio fringilla. Ut nibh morbi augue porta aliquet commodo. Fermentum auctor lacus eget in ut integer viverra sed. Penatibus tortor consequat.",
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
        {reviews.map((e, index) => (
          <div
            key={index}
            className="grow w-full md:max-w-[300px] xl:max-w-[375px] border-b-[5px] border-b-[#503AE7] min-h-[250px]"
          >
            <div className="flex gap-[15px]">
              <img src={e.img} className="" />
              <div>
                <h2 className="font-bold">{e.name}</h2>
                <img src={stars} className="mt-[10px]" />
              </div>
            </div>
            <p className="mt-[20px] pb-[10px]">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
