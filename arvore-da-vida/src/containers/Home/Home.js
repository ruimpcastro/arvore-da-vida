import React, { Component } from "react";
import Navbar from "../../components/Navigation/Navbar/Navbar";
import Slideshow from "../../components/Slideshow/Slideshow";

class Home extends Component {
  render() {
    return (
      <div style={{ overflow: "hidden", height: "100vh" }}>
        <Navbar />
        <Slideshow />
      </div>
    );
  }
}

export default Home;
