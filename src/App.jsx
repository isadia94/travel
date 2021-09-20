import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MenuAlt2Icon } from "@heroicons/react/solid";
import Profile from "./images/lusigi.jpg";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import hot1 from "./images/hot1.jpg";
import hot2 from "./images/hot2.jpg";
import hot3 from "./images/hot3.jpg";
import hot4 from "./images/hot4.jpg";
function App() {
  return (
    <>
      <div className="app py-6 px-5 relative w-screen h-screen">
        <div className="nav flex items-center justify-between text-dark">
          <h1 className="logo font-bold text-3xl ">Safaris Galore</h1>
          <ul className="hidden">
            <li>HOME</li>
            <li>TOURS</li>
            <li>HOTELS</li>
            <li>CAR HIRE</li>
            <li>BOOK FLIGHTS</li>
            <li>ABOUT US</li>
          </ul>
          <MenuAlt2Icon className="h-7 w-7 font-semibold" />
        </div>

        <div className="hero__text">
          <h1 className="text-4xl font-extrabold  text-white ">
            It's a Big World Out There, Go Explore.
          </h1>
        </div>
      </div>
      <div className="mt-6 px-5 w-screen h-screen pt-4 ">
        <div className="flex items-center space-x-2 mb-10">
          <div>
            <img src={Profile} className="rounded-full h-11 w-11" />
          </div>
          <div>
            <p className="text-xs text-gray-500 font-normal">Good Morning,</p>
            <h4 className="text-lg font-extrabold">John Doe</h4>
          </div>
        </div>
        <h1 className=" destinations text-center text-2xl">
          Top 10 destinations today
        </h1>
        <div className="under text-center max-w-xs mx-auto mb-10"></div>
        <div className="flex space-x-2 overflow-x-hidden mb-10">
          <div className="card ">
            <img src={img1} className="object-cover rounded-lg" />
          </div>
          <div className="card shadow-2xl rounded-lg">
            <img src={img2} className="object-cover rounded-lg " />
          </div>
        </div>
        <div className=" ">
          <h5 className="hotels text-center w-screen text-2xl mb-10">
            Amazing Stays
          </h5>
          <div className="grid grid-cols-2 gap-1">
            <div className="card1">
              <img src={hot3} className="object-cover object-top rounded-lg" />
            </div>
            <div className="card1">
              <img src={hot2} className="object-cover rounded-lg" />
            </div>
            <div className="card1">
              <img src={hot4} className="object-cover rounded-lg" />
            </div>
            <div className="card1">
              <img src={hot2} className="object-cover rounded-lg" />
            </div>
            <div className="card1">
              <img src={hot2} className="object-cover rounded-lg" />
            </div>
            <div className="card1">
              <img src={hot1} className="object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
