import React from "react";

import { AiFillPlusCircle } from "react-icons/ai";

const Products = (props) => {
  return (
    <div>
      <div class="relative">
        <img
          src={props.img}
          alt="product image"
          className="rounded-lg w-[400px] h-[200px]"
        />

        <h3 class="absolute  text-[white] bg-[black] rounded-full bottom-5 right-5">
          <AiFillPlusCircle size={40} />
        </h3>
      </div>
      <div>
        <p className="font-bold text-xl">{props.name}</p>
        <p className="pt-1 text-lg">
          {" "}
          {props.sprice} <span className="pl-4"> {props.eprice} </span>
        </p>
      </div>
    </div>
  );
};

export default Products;
