import React, { Component } from "react";
import Navbar from "../../components/Navigation/Navbar/Navbar";
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
      <Spinner />
    ) : (
      <div style={{ overflow: "hidden", height: "100vh" }}>
        <Navbar />
        <Slideshow />
      </div>
    );
  }
}

export default Home;
