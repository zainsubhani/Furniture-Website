import React from "react";
import pimg from "../../assets/images/backgroundimage.jpg";

const Images1 = () => {
  return (
    <div className="h-[20vh] bg-[pink]">
      <div>
        <img src={pimg} alt="img" className="h-[20vh] w-full" />
      </div>
    </div>
  );
};

export default Images1;
