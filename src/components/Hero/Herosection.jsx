import React from "react";
import { Play } from "lucide-react";
import Phone1 from "../../assets/phone1.png";
import Phone2 from "../../assets/Phone2.png";
import Phone3 from "../../assets/phone3.png";

const Herosection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full px-7 lg:px-24 py-12">
      <div className="text-center lg:text-left max-w-lg">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          Make The Best Financial Decisions
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          Cum Et Convallis Risus Placerat Aliquam, Nunc, Scelerisque Aliquet
          Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
        </p>
        <div className="flex justify-center lg:justify-start space-x-4">
          <button className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-black focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Get started
            <svg
              class="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <button className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black  focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            <span class=" border-2 border-black text-white p-2 rounded-full mr-2">
              <Play size={15} color="black" />
            </span>
            Watch video
          </button>
        </div>
      </div>
      <div class="relative mt-12 lg:mt-0">
      <img
        src="https://placehold.co/300x600"
        alt="financial app screenshot"
        class="absolute top-0 left-0 transform -rotate-6"
      />
      <img
        src="https://placehold.co/300x600"
        alt="financial app screenshot"
        class="absolute top-0 left-0 transform rotate-6"
      />
      <img
        src="https://placehold.co/300x600"
        alt="financial app screenshot"
        class="relative z-10"
      />
      </div>
    </div>
  );
};

export default Herosection;
