/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="max-w-7xl h-[20vh]   sm:px-6   ">
            <div className="flex justify-between items-center    ">
              <div className="flex justify-between w-full">
                <div className=" flex items-center font-bold text-2xl text-[white]">
                  <p>FurniShop</p>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <a
                    href="#"
                    className=" text-[white] inline-flex items-center  text-sm font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className=" text-[white] inline-flex items-center  text-sm font-medium"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className=" text-[white] inline-flex items-center  text-sm font-medium"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className=" text-[white] inline-flex items-center  text-sm font-medium"
                  >
                    Contact
                  </a>
                </div>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="#"
                className=" text-[white] block pl-3 pr-4 py-5  text-base font-medium"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className=" text-[white] block pl-3 pr-4 pb-5  text-base font-medium"
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className=" text-[white] block pl-3 pr-4 pb-5  text-base font-medium"
              >
                Features
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className=" text-[white] block pl-3 pr-4 pb-5   text-base font-medium"
              >
                Contact
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
