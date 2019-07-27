import React from "react";
import { Link } from "react-router-dom";

const styles = {
  image: {
    backgroundImage:
      "url(" +
      "https://www.learncube.com/images/blog_images/online-teaching-challenges.jpg" +
      ")",
    backgroundRepeat: "no-repeat",
    objectFit:"contain",
    height:"860px"
  },
  margin: {
    marginLeft: "-2%",
    marginTop: "-4%",
    marginRight: "-3%"
  }
};

export default () => (
  <div style={styles.margin}>
    <div
      className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light"
      style={styles.image}
    >
      <div className="col-md-5 p-lg-5 mx-auto my-5">
        <h1 className="display-5 font-weight-normal">
          Share your knowledge with your students
        </h1>
        <p className="lead font-weight-normal">
          Create an online course with videos and earn money by teaching it to
          students worldwide
        </p>
      </div>
      <div className="product-device shadow-sm d-none d-md-block" />
      <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
    </div>
  </div>
);
