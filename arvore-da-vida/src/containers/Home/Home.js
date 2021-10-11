import React, { Component } from "react";
import Slideshow from "../../components/Slideshow/Slideshow";
import Spinner from "../../components/UI/Spinner/Spinner";

class Home extends Component {
  constructor() {
    super();
    this.state = { isLoading: true };
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }
  render() {
    return this.state.isLoading ? (
      <div
        style={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          backgroundColor: "#2d2b29",
        }}
      >
        <Spinner />
      </div>
    ) : (
      <div style={{ overflow: "hidden", height: "89.5vh" }}>
        <Slideshow />
      </div>
    );
  }
}

export default Home;
