import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const people = [
  {
    name: "Leslie Alexander",
    email: "leslie@example.com",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    review:
      " They are have a perfect touch for make something so professional,interest and useful for lot of people",
  },
  {
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    review:
      " They are have a perfect touch for make something so professional,interest and useful for lot of people",
  },
  {
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    review:
      " They are have a perfect touch for make something so professional,interest and useful for lot of people",
  },
];
export default function AboutUs(person) {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 pt-5 sm:grid-cols-2">
        <Slider {...settings}>
          {people.map((person) => (
            <div>
              <div
                key={person.email}
                className="relative  shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={person.imageUrl}
                    alt=""
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <a href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900">
                      {person.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {person.role}
                    </p>
                  </a>
                </div>
              </div>
              <div className="pt-2 pl-10">{person.review}</div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
