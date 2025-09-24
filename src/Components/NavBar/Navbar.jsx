import React from "react";
import navImg from "../../assets/logo.png";
import dollerImg from "../../assets/DoubleDollar.png";

const Navbar = ({ availeableBalance }) => {
  return (
    <div className="navbar bg-base-100 max-w-[1200px] mx-auto">
      <div className="flex-1">
        <a className="text-xl">
          <img class="w-[60px] h-[60px]" src={navImg} alt="" />
        </a>
      </div>
      <div className="flex items-center gap-1">
        <span>{availeableBalance}</span>
        <span>Coin</span>
        <img src={dollerImg} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
