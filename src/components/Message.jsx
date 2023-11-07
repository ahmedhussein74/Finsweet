import mic from "../images/mic.svg";

const Message = () => {
  return (
    <section className="md:w-[90%] min-h-[300px] mx-auto mb-[50px] md:mb-[100px] flex flex-col md:flex-row justify-around items-center bg-[#503AE7]">
      <img src={mic} className="" />
      <div>
        <h1 className="text-white font-bold text-[20px] lg:text-[30px] text-center">
          Receive new episodes in your inbox.
        </h1>
        <div className="flex flex-col md:flex-row gap-[20px] md:gap-0 items-center mt-[15px]">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="w-[90%] md:w-3/4 h-[50px] bg-[#F4F2FF] outline-none"
          />
          <button className="w-1/2 md:w-1/4 h-[50px] bg-[#1AD993]">
            Subscribe
          </button>
        </div>
      </div>
      <img src={mic} className="w-[75px]" />
    </section>
  );
};

export default Message;
