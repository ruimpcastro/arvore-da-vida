import React from "react";
import Navbar from "../Navigation/Navbar/Navbar";
import Slideshow from "./Slideshow/Slideshow";

const Home = () => {
  return (
    <div style={{ overflow: "hidden", height: "100vh" }}>
      <Navbar />
      <Slideshow />
    </div>
  );
};

export default Home;
