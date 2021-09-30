import React, { Component } from "react";
import Navbar from "../../components/Navigation/Navbar/Navbar";
import Slideshow from "../../components/Slideshow/Slideshow";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Home extends Component {
  render() {
    return (
      <div style={{ overflow: "hidden", height: "100vh" }}>
        <SideDrawer />
        <Navbar />
        <Slideshow />
      </div>
    );
  }
}

export default Home;
