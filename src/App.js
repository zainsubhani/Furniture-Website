import React from "react";
import background from "../src/assets/images/backgroundimage.jpg";
import Navbar from "./Components/Navbar";
import Creative from "./Components/Creative";
import Year from "./Components/YearExperience";
import Home from "./Components/home";
import Images from "./Components/imges";
import Manufacture from "./Components/Manufacturer";
import AllProduct from "./Components/Allproducts";
import Products from "./Components/Products";
import img1 from "./assets/images/productimgs/product1.jpg";
import img2 from "./assets/images/productimgs/product2.jpg";
import img3 from "./assets/images/productimgs/product3.jpg";
import img4 from "./assets/images/productimgs/product4.jpg";
import img5 from "./assets/images/productimgs/product5.jpg";
import img6 from "./assets/images/productimgs/product6.jpg";
import ShowMore from "./Components/button";
import AboutUs from "./Components/About";
import Images1 from "./Components/Images";
import Discount from "./Components/Discount";
import Footer from "./Components/Footer";

const App = () => {
  const productdata = [
    { id: 1, img: img1, name: "Wood Chair", sprice: "$500", eprice: "800" },
    {
      id: 2,
      img: img2,
      name: "Wood Chair",
      sprice: "$500",
      eprice: "800",
    },
    {
      id: 3,
      img: img3,
      name: "Wood Chair",
      sprice: "$500",
      eprice: "800",
    },
    {
      id: 4,
      img: img4,
      name: "Wood Chair",
      sprice: "$500",
      eprice: "800",
    },
    {
      id: 5,
      img: img5,
      name: "Wood Chair",
      sprice: "$500",
      eprice: "800",
    },
    {
      id: 6,
      img: img6,
      name: "Wood Chair",
      sprice: "$500",
      eprice: "800",
    },
    {
      id: 7,
      img: img6,
      name: "Wood Chair",
      sprice: "$500",
      eprice: "800",
    },
    {
      id: 8,
      img: img6,
      name: "Wood Chair",
      sprice: "$500",
      eprice: "800",
    },
  ];

  return (
    <div>
      <div
        className="h-[85vh] w-full "
        style={{
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="p-3">
          <Navbar />
          <Creative />
          <div>
            <Year />
          </div>
        </div>
      </div>
      <Home />
      <div>
        <Images />
      </div>
      <div>
        <Manufacture />
      </div>
      <AllProduct />
      <div className="grid grid-cols-4 gap-10 p-20">
        {productdata.map((v, k) => (
          <Products
            key={v.id}
            img={v.img}
            name={v.name}
            sprice={v.sprice}
            eprice={v.eprice}
          />
        ))}
      </div>
      <ShowMore />
      <div className="grid grid-cols-12 gap-10 p-20">
        <div className=" grid col-span-7">
          <p className="text-4xl font-bold">What People Are Saying About Us</p>
          <AboutUs />{" "}
        </div>
        <div className="grid col-span-5">
          <Images1 />
        </div>
      </div>
      <Discount />
      <Footer />
    </div>
  );
};

export default App;
