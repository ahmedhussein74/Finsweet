import view1 from "../images/view1.png";
import view2 from "../images/view2.png";

const View = () => {
  return (
    <section className="py-[50px] lg:py-[100px]">
      <div className="flex flex-wrap justify-between items-center">
        <div className="w-full md:w-[400px] pl-[5%] pr-[5%] md:pr-0">
          <h2 className="font-bold text-[30px]">
            A podcast for makers and entrepreneurs
          </h2>
          <p className="mt-[25px]">
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle.{" "}
          </p>
        </div>
        <div className="w-full lg:w-1/2 py-[50px] md:py-[75px] flex justify-center items-center bg-[#503AE7]">
          <img src={view1} className="w-[75%] md:w-[300px] rounded-full" />
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center mt-[50px] lg:mt-[100px]">
        <img src={view2} className="w-full lg:w-1/2" />
        <div className="w-full lg:w-[400px] pr-[5%] pl-[5%] lg:pl-0">
          <h2 className="font-bold text-[30px]">
            My origins on <span className="text-[#503AE7]">YouTube</span> in
            2008
          </h2>
          <p className="mt-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras
            lacus tellus morbi viverra suspendisse ornare. Sit volutpat,
            volutpat ut netus malesuada enim penatibus non aliquet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default View;
