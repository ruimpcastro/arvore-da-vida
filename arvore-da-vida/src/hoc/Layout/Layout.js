import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navigation/Navbar/Navbar";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
};

export default Layout;