import React from "react";
import homeImg from "../../../assets/img/home-img.jpg";

const HomeBody = () => {
  return (
    <div>
      <section class="home-body" style={{ width: "100%" }}>
        <img style={{ width: "100%" }} src={homeImg} alt="Banner" />
      </section>
    </div>
  );
};

export default HomeBody;
