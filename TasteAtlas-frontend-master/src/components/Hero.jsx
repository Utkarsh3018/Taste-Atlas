import React from "react";
import food from "../assets/food.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row mt-10">
      <img src={food} alt="food" className="w-full md:w-1/2" />
      <div className="flex flex-col justify-center md:pl-8">
        <h1 className="text-3xl md:text-5xl font-bold">
          Experience the taste from around the world
        </h1>
        <p className="text-base md:text-lg leading-6 text-justify mt-2">
          The world is full of tasty dishes in different types of cuisine to
          capture the different cooking styles, traditions, and cultures.
          Explore and try out recipes from all around the world.
        </p>
        <Link to="/about">
          <button className="bg-[#507b14] text-white text-center rounded-xl mt-4 md:mt-6 w-36 px-4 py-2">
            About Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
