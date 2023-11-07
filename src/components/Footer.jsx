import logo from "../images/logo2.svg";
import apple from "../images/applel.svg";
import a1 from "../images/applet.svg";
import google from "../images/googlel.svg";
import g1 from "../images/googlet1.svg";
import g2 from "../images/googlet2.svg";
import sound from "../images/soundl.svg";
import s1 from "../images/soundt.svg";
import spotify from "../images/spotifyl.svg";

const Footer = () => {
  return (
    <footer className="bg-[#14142B] flex flex-col md:flex-row justify-around items-center md:items-start gap-[30px] py-[50px] lg:py-[75px] mt-[50px] lg:mt-[100px]">
      <img src={logo} className="" />
      <ul className="text-center md:text-start">
        <li className="font-bold text-[30px] pb-[10px]">Pages</li>
        <li>Home</li>
        <li>Podcast</li>
        <li>Host</li>
        <li>Blog</li>
      </ul>
      <ul className="text-center md:text-start">
        <li className="font-bold text-[30px] pb-[10px]">Reach Us</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <ul className="text-center md:text-start">
        <li className="font-bold text-[30px] pb-[10px]">Pages</li>
        <li className="flex mb-[20px] justify-center md:justify-start">
          <img src={apple} className="mr-[10px]" />
          <img src={a1} className="" />
        </li>
        <li className="flex mb-[20px] justify-center md:justify-start">
          <img src={google} className="mr-[10px]" />
          <img src={g1} className="" />
          <img src={g2} className="" />
        </li>
        <li className="flex mb-[20px] justify-center md:justify-start">
          <img src={sound} className="mr-[10px]" />
          <img src={s1} className="" />
        </li>
        <li>
          <img src={spotify} className="mx-auto md:mx-0" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
