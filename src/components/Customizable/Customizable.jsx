import React from "react";
import group from "../../assets/group-358992.png"
import group1 from "../../assets/group-35937.png"
import credit from "../../assets/credit.png"
import group2 from "../../assets/groupx2.png"

const Customizable = () => {
  return (
    <div className="absolute top-[calc(50%_-_733.8px)] left-[calc(50%_-_692px)] w-[1244px] h-[719.5px]">
      <div className="absolute top-[calc(50%_-_359.75px)] left-[calc(50%_-_622px)] w-[1244px] h-[719.5px]">
        <div className="absolute top-[calc(50%_-_105.75px)] left-[calc(50%_+_60px)] w-[562px] h-[211px]">
          <div className="absolute top-[calc(50%_-_105.5px)] left-[calc(50%_-_281px)] w-[562px] h-[211px]">
            <div className="absolute top-[calc(50%_-_34.5px)] left-[calc(50%_-_281px)] leading-[28px] capitalize font-medium inline-block w-[562px] opacity-[0.5]">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </div>
            <div className="absolute top-[calc(50%_-_105.5px)] left-[calc(50%_-_281px)] w-[325px] h-12 text-9xl">
              <div className="absolute top-[calc(50%_-_14px)] left-[calc(50%_-_99.5px)] leading-[28px] capitalize font-semibold">
                fully customizable
              </div>
              <img
                className="absolute top-[calc(50%_-_24px)] left-[calc(50%_-_162.5px)] w-12 h-12"
                alt=""
                src={group}
              />
            </div>
          </div>
        </div>
        <img
          className="absolute top-[calc(50%_-_359.75px)] left-[calc(50%_-_622px)] w-[719.5px] h-[719.5px] object-cover"
          alt=""
          src={group1}
        />
      </div>
      <div className="absolute top-[calc(50%_-_135.05px)] left-[calc(50%_-_363px)] w-[260.3px] h-[159.3px] text-[12.7px] text-white font-dm-sans">
        <div className="absolute top-[calc(50%_-_79.65px)] left-[calc(50%_-_130.15px)] [backdrop-filter:blur(27.89px)] rounded-[8.64px] w-[260.3px] h-[159.3px]">
          <div className="absolute h-full w-[99.92%] top-[0%] right-[0.08%] bottom-[0%] left-[0%] rounded-2xl bg-black" />
        </div>
        <div className="absolute top-[calc(50%_+_22.45px)] left-[calc(50%_-_112.35px)] tracking-[0.08em] font-medium">
          0000 8888 2222 3333
        </div>
        <div className="absolute top-[calc(50%_+_52.15px)] left-[calc(50%_-_111.85px)] w-[67.1px] h-[13px] text-[10.4px]">
          <div className="absolute top-[calc(50%_-_6.5px)] left-[calc(50%_+_1.65px)] tracking-[0.08em]">
            07/24
          </div>
          <div className="absolute top-[calc(50%_-_2.2px)] left-[calc(50%_-_33.45px)] text-[4.8px] tracking-[0.08em] leading-[100%]">
            VALID THRU
          </div>
        </div>
        <img
          className="absolute top-[calc(50%_-_63.45px)] left-[calc(50%_+_67.55px)] w-[44.3px] h-[14.6px]"
          alt=""
          src={credit}
        />
        <div className="absolute top-[calc(50%_-_64.55px)] left-[calc(50%_-_112.35px)] w-[56.1px] h-[16.7px] text-[2px] font-plus-jakarta-sans">
          <div className="absolute top-[calc(50%_-_3.45px)] left-[calc(50%_+_23.85px)] font-extrabold inline-block w-[4.3px] h-[2.7px]">
            TM
          </div>
          <img
            className="absolute top-[calc(50%_-_8.35px)] left-[calc(50%_-_28.05px)] w-[50.7px] h-[16.7px] object-cover"
            alt=""
            src={group2}
          />
        </div>
      </div>
    </div>
  );
};

export default Customizable;
