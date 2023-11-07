import apple from "../images/apple.svg";
import google from "../images/google.svg";
import sound from "../images/sound.svg";
import spotify from "../images/spotify.svg";

const Clients = () => {
  return (
    <section className="marquee gap-[50px] flex overflow-hidden w-[90%] mx-auto">
      <div className="marquee__group min-w-full flex shrink-0 justify-around gap-[50px]">
        <img src={apple} />
        <img src={google} />
        <img src={sound} />
        <img src={spotify} />
      </div>
      <div
        aria-hidden="true"
        className="marquee__group min-w-full flex shrink-0 justify-around gap-[50px]"
      >
        <img src={apple} />
        <img src={google} />
        <img src={sound} />
        <img src={spotify} />
      </div>
    </section>
  );
};

export default Clients;
