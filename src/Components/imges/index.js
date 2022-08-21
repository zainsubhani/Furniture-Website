import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import simg1 from "../../assets/images/simg1.jpg";
import simg2 from "../../assets/images/simg2.jpg";
import simg3 from "../../assets/images/simg3.jpg";
import simg4 from "../../assets/images/simg4.jpg";
const Images = () => {
  return (
    <div className="p-20 grid grid-cols-5 gap-2">
      <div className="pt-10">
        <p className="text-4xl font-bold">New In Store Now</p>
        <p className="pt-20 text-base">
          Get the latest items immediately with promo prices
        </p>
        <div className="flex items-center pt-20 font-semibold ">
          <div>
            <button className="underline">Check All</button>
          </div>
          <div className="pl-2">
            <AiOutlineArrowRight size={20} />
          </div>
        </div>
      </div>
      <div>
        <div class="relative">
          <img src={simg1} alt="" className="h-[450px] w-[90%]" />

          <h2 class="absolute text-3xl text-[white] font-semibold bottom-4 left-1/2 -translate-x-1/2">
            Chair
          </h2>
        </div>
      </div>
      <div>
        <div class="relative">
          <img src={simg2} alt="" className="h-[450px] w-[90%]" />

          <h2 class="absolute text-3xl text-[white] font-semibold bottom-4 left-1/2 -translate-x-1/2">
            Sofa
          </h2>
        </div>
      </div>
      <div>
        <div class="relative">
          <img src={simg3} alt="" className="h-[450px] w-[90%]" />

          <h2 class="absolute text-3xl text-[white] font-semibold bottom-4 left-1/2 -translate-x-1/2">
            Table
          </h2>
        </div>
      </div>
      <div>
        <div class="relative">
          <img src={simg4} alt="" className="h-[450px] w-[90%]" />

          <h2 class="absolute text-3xl text-[white] font-semibold bottom-4 left-1/2 -translate-x-1/2">
            Table
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Images;
