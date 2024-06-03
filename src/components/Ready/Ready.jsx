import React from 'react'
import Apple from "../../assets/Apple.png"
import iphone from "../../assets/iphone-13.png"
import star6 from "../../assets/star-6.png"
import star7 from "../../assets/start-7.png"
import group from "../../assets/group-35932.png"
import group1 from "../../assets/group-35905.png"

const Ready = () => {
  return (
    <>
    <div className="absolute top-[calc(50%_+_1833.2px)] left-[calc(50%_-_545px)] rounded-lg bg-black w-[1090px] h-[508px] overflow-hidden text-white">
          <img
            className="absolute top-[192px] left-[calc(50%_-_873px)] w-[719.5px] h-[719.5px]"
            alt=""
            src={group1}
          />
          <img
            className="absolute top-[-248px] left-[calc(50%_+_185px)] w-[719.5px] h-[719.5px]"
            alt=""
            src={group1}
          />
          <div className="absolute top-[156px] left-[calc(50%_-_468px)] w-[547px] h-[196px]">
            <div className="absolute top-[0px] left-[calc(50%_-_273.5px)] w-[547px] h-[196px]">
              <b className="absolute top-[0px] left-[calc(50%_-_273.5px)] text-29xl leading-[48px] capitalize">
                ready to get started?
              </b>
              <div className="absolute top-[64px] left-[calc(50%_-_273.5px)] leading-[28px] capitalize inline-block w-[536px]">
                Risus habitant leo egestas mauris diam eget morbi tempus
                vulputate.
              </div>
              <div className="absolute top-[136px] left-[calc(50%_-_273.5px)] w-52 h-[60px] text-black">
                <div className="absolute top-[0px] left-[calc(50%_-_104px)] rounded bg-white w-52 h-[60px]" />
                <div className="absolute top-[14px] left-[calc(50%_-_82px)] w-[164.8px] h-[31.6px]">
                  <img
                    className="absolute top-[0px] left-[calc(50%_+_56.6px)] w-[25.8px] h-[31.6px]"
                    alt=""
                    src={Apple}
                  />
                  <div className="absolute top-[2px] left-[calc(50%_-_82.4px)] w-[127px] h-7">
                    <div className="absolute top-[0px] left-[calc(50%_-_63.5px)] leading-[28px] capitalize font-medium">
                      download app
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute top-[99px] left-[calc(50%_+_187px)] w-[378.2px] h-[367.5px] object-contain"
            alt=""
            src={group}
          />
          <img
            className="absolute h-[90.53%] w-[54.22%] top-[4.72%] right-[-8.26%] bottom-[4.74%] left-[54.04%] max-w-full overflow-hidden max-h-full object-contain"
            alt=""
            src={iphone}
          />
          <img
            className="absolute top-[34px] left-[calc(50%_+_104px)] w-16 h-16"
            alt=""
            src={star7}
          />
          <img
            className="absolute top-[338px] left-[calc(50%_-_133px)] w-[67.9px] h-[67.9px] object-contain"
            alt=""
            src={star6}
          />
        </div>
    </>
  )
}

export default Ready