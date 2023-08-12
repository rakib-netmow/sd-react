import React from "react";
import Header from "./HomeHeader/Header";
import HomeBody from "./HomeBody/HomeBody";
import Footer from "./HomeFooter/Footer";

const Home = () => {
  return (
    <div className="body">
      <Header />
      <HomeBody />
      <Footer />
    </div>
  );
};

export default Home;
