import React from "react";
import img2 from "../../assets/images/img2.jpg";
const Manufacture = () => {
  return (
    <div className="grid grid-cols-2 p-20">
      <div className="p-20">
        <p className="text-5xl font-bold">The Best Furniture</p>
        <p className="text-5xl font-bold">Manufacturer of Your Choice</p>
        <p className="pt-5">
          Furniture power is software as services for multiperpose business
          management system.especially for them who are running two or more
          business explorer the future furniture power is a software as service.
        </p>
      </div>
      <div>
        <img src={img2} alt="" className="h-[300px] w-full" />
      </div>
    </div>
  );
};

export default Manufacture;
