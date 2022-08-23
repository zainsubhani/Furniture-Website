import React from "react";
import fbimg from "../../assets/images/footerimg.jpg";

const Discount = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-indigo-500 h-[30vh] grid grid-cols-2 gap-20 p-1">
        <div>
          <img src={fbimg} alt="" className="h-[25vh] w-[100%]" />
        </div>
        <div>
          <p className="text-center text-2xl font-bold">Get more discount</p>
          <p className="text-center text-2xl font-bold">off your order</p>
          <div className="text-center pt-10">
            <input
              type="text"
              name=""
              id=""
              className="w-[50vh] h-[6vh] bg-indigo-500 rounded"
            />
            <button className="ml-2 pl-10 px-4 py-2 text-center bg-[black] border rounded-md text-white font-bold">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
