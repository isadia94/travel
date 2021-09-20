import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MenuAlt2Icon } from "@heroicons/react/solid";

function App() {
  return (
    <div className="app py-6 px-5 relative w-screen h-screen">
      <div className="nav flex items-center justify-between text-dark">
        <h1 className="logo font-bold text-2xl ">Safaris Galore</h1>
        <ul className="hidden">
          <li>HOME</li>
          <li>TOURS</li>
          <li>HOTELS</li>
          <li>CAR HIRE</li>
          <li>BOOK FLIGHTS</li>
          <li>ABOUT US</li>
        </ul>
        <MenuAlt2Icon className="h-6 w-6 font-semibold" />
      </div>

      <div className="hero__text">
        <h1 className="text-4xl font-extrabold  text-white ">
          It's a Big World Out There, Go Explore.
        </h1>
      </div>
    </div>
  );
}

export default App;
