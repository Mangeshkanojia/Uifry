import React from 'react'
import group from "../../assets/group-1000002332.png"
import group1 from "../../assets/group-28.png"
import group2 from "../../assets/group-27.png"
import group3 from "../../assets/group-29.png"
import group4 from "../../assets/group-30.png"
import group5 from "../../assets/group-31.png"

const Testimonial = () => {
  return (
    <>
     <div className="absolute top-[calc(50%_+_38.2px)] left-[calc(50%_-_640px)] w-[1185px] h-[821px] text-center text-29xl">
        <div className="absolute top-[calc(50%_-_410.5px)] left-[calc(50%_-_179.5px)] w-[455px] h-32">
          <b className="absolute top-[calc(50%_-_32px)] left-[calc(50%_-_227.5px)] leading-[48px] capitalize inline-block w-[455px]">
            what our users say about us?
          </b>
          <div className="absolute top-[calc(50%_-_64px)] left-[calc(50%_-_74.5px)] text-lg tracking-[0.16em] leading-[28px] uppercase font-medium">
            testimonial
          </div>
        </div>
        <div className="absolute top-[calc(50%_-_302.5px)] left-[calc(50%_-_592.5px)] w-[1185px] h-[713px] text-left text-lg">
          <div className="absolute top-[calc(50%_-_211.5px)] left-[calc(50%_+_150.5px)] w-[442px] h-[392px]">
            <div className="absolute top-[calc(50%_-_116px)] left-[calc(50%_-_221px)] leading-[28px] capitalize font-medium inline-block w-[442px] opacity-[0.5]">
              “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.”
            </div>
            <div className="absolute top-[calc(50%_-_196px)] left-[calc(50%_-_221px)] text-9xl leading-[28px] capitalize font-semibold inline-block w-[442px]">
              the best financial accounting app ever!
            </div>
            <div className="absolute top-[calc(50%_+_104px)] left-[calc(50%_-_221px)] w-48 h-10">
              <img
                className="absolute top-[calc(50%_-_20px)] left-[calc(50%_-_96px)] w-10 h-10 object-cover"
                alt=""
                src={group1}
              />
              <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_48px)] w-36 h-[30px] opacity-[0.5]">
                <img
                  className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_72px)] w-[30px] h-[30px] object-cover"
                  alt=""
                  src={group2}
                />
                <img
                  className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_34px)] w-[30px] h-[30px] object-cover"
                  alt=""
                  src={group3}
                />
                <img
                  className="absolute top-[calc(50%_-_15px)] left-[calc(50%_+_4px)] w-[30px] h-[30px] object-cover"
                  alt=""
                  src={group4}
                />
                <img
                  className="absolute top-[calc(50%_-_15px)] left-[calc(50%_+_42px)] w-[30px] h-[30px] object-cover"
                  alt=""
                  src={group5}
                />
              </div>
            </div>
            <div className="absolute top-[calc(50%_+_168px)] left-[calc(50%_-_221px)] leading-[28px] capitalize font-semibold">
              nick jonas
            </div>
          </div>
          <img
            className="absolute top-[calc(50%_-_356.5px)] left-[calc(50%_-_592.5px)] w-[713px] h-[713px]"
            alt=""
            src={group}
          />
        </div>
      </div> 
    </>
  )
}

export default Testimonial