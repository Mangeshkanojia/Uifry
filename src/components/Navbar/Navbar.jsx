import React from "react";
import logo from "../../assets/logo.png";
import Vector1 from '../../assets/vector1.png'


export default function Navbar() {
  // const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return (
     <div className="absolute top-[calc(50%_-_2903.5px)] left-[calc(50%_-_534px)] w-[1079px] h-[60px] text-xl">
        <div className="absolute top-[calc(50%_-_17px)] left-[calc(50%_-_539.5px)] w-[531.5px] h-[34.4px]">
          <div className="absolute top-[calc(50%_-_13.2px)] left-[calc(50%_-_112.25px)] flex flex-row items-center justify-center gap-[24px]">
            <b className="relative leading-[26px] capitalize text-tomato cursor-pointer">
              home
            </b>
            <div className="relative leading-[26px] capitalize font-medium cursor-pointer hover:text-tomato">
              about us
            </div>
            <div className="relative leading-[26px] capitalize font-medium cursor-pointer hover:text-tomato">
              pricing
            </div>
            <div className="relative leading-[26px] capitalize font-medium cursor-pointer hover:text-tomato">
              features
            </div>
          </div>
          <div className="absolute top-[calc(50%_-_17.2px)] left-[calc(50%_-_265.75px)] w-[115.8px] h-[34.4px] text-8xs-2 font-plus-jakarta-sans">
            <div className="absolute top-[calc(50%_-_7.2px)] left-[calc(50%_+_49px)] font-extrabold inline-block w-[8.9px] h-[5px]">
              TM
            </div>
            <div className="absolute top-[calc(50%_-_17.2px)] left-[calc(50%_-_57.9px)] w-[105.1px] h-[34.4px]">
              <img
                className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_12.55px)] w-[65.1px] h-[29.3px]"
                alt=""
                src={Vector1}
              />
              <img
                className="absolute top-[calc(50%_-_17.2px)] left-[calc(50%_-_52.55px)] w-[33.7px] h-[34px] overflow-hidden"
                alt=""
                src={logo}
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[calc(50%_-_30px)] left-[calc(50%_+_361.3px)] w-[178.2px] h-[60px] text-lg text-white">
          <div className="absolute top-[calc(50%_-_30px)] left-[calc(50%_-_89.1px)] rounded bg-black w-[178.2px] h-[60px]" />
          <div className="absolute top-[calc(50%_-_14px)] left-[calc(50%_-_43.5px)] w-[87.1px] h-7">
            <div className="absolute top-[calc(50%_-_14px)] left-[calc(50%_-_43.55px)] leading-[28px] capitalize font-medium inline-block w-[87.1px]">
              download
            </div>
          </div>
        </div>
      </div> 
  );
}
