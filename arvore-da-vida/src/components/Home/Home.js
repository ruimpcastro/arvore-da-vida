import React from "react";
import Navbar from "../Navigation/Navbar/Navbar";
import Slideshow from "./Slideshow/Slideshow";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <Slideshow />
    </div>
  );
};

export default Home;
