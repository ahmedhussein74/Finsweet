import logo from "../images/logo.svg";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const routes = [
    {
      url: "/",
      display: "home",
    },
    {
      url: "/podcasts",
      display: "podcasts",
    },
    {
      url: "/about",
      display: "about",
    },
  ];
  const [view, setView] = useState(false);
  const [icon, setIcon] = useState("fa-solid fa-bars");

  const changeHeight = () => {
    if (window.screen.width < 1024) {
      if (view) {
        setView(false);
        setIcon("fa-solid fa-bars");
        document.querySelector("nav").style.height = "60px";
      } else {
        setView(true);
        setIcon("fa-solid fa-xmark");
        document.querySelector("nav").style.height = "300px";
      }
    }
  };
  return (
    <nav className="w-full px-[5%] h-[60px] flex overflow-hidden flex-wrap lg:items-center lg:justify-between duration-1000 bg-white absolute">
      <header className="w-full lg:w-fit h-[60px] text-[#292F36] flex justify-between items-center">
        <img src={logo} className="" />
        <i
          onClick={changeHeight}
          className={`${icon} block lg:hidden text-[25px]`}
        ></i>
      </header>
      <aside className="w-full lg:w-fit text-[#292F36] flex flex-wrap gap-0 lg:gap-[40px]">
        {routes.map((link, index) => (
          <NavLink
            key={index}
            to={link.url}
            onClick={changeHeight}
            className="h-[60px] lg:h-fit w-full lg:w-fit capitalize text-xl flex items-center justify-center rounded-lg"
          >
            {link.display}
          </NavLink>
        ))}
      </aside>
      <div className="h-[60px] lg:h-fit w-full lg:w-fit text-[30px] flex items-center justify-center gap-[20px]">
        <i className="fa-brands fa-square-facebook"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-square-instagram"></i>
      </div>
    </nav>
  );
};

export default Nav;
