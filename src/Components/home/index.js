import React from "react";
import img from "../../assets/images/img1.jpg";
import { GrStatusGood } from "react-icons/gr";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-10 h-[100vh] pt-44 px-20">
        <div className="col-span-5  flex items-center ">
          <img src={img} alt="" className="h-[70vh] w-[70vh]" />
        </div>
        <div className="col-span-7 pt-20 mr-[500px] ">
          <div>
            <div>
              <p className="text-4xl font-bold text-[black] ">
                {" "}
                We Create Your Home More Aestetic{" "}
              </p>
              <p className="pt-3">
                Furniture power is a software services for multiperpose business
                management system.
              </p>
            </div>
            <div className="flex items-center pt-5">
              <div>
                <p className="pr-5">
                  <GrStatusGood color="White" size={25} />
                </p>
              </div>
              <div>
                <span className="text-xl font-bold">Valuation Services</span>
              </div>
            </div>

            <p className="pl-10 pt-3">
              Sometimes features require a short drescription. This can be
              detailed description
            </p>
            <div className="flex items-center pt-5">
              <div>
                <p className="pr-5">
                  <GrStatusGood color="White" size={25} />
                </p>
              </div>
              <div>
                <span className="text-xl font-bold">
                  Development of Furniture Modelss
                </span>
              </div>
            </div>
            <p className="pl-10 pt-3">
              Sometimes features require a short drescription. This can be
              detailed description
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
