import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container" id="about">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="about-heading">
          Food Is An Important Part Of Our Lives
        </h1>
        <p className="primary-text about-text">
          Welcome to KODECHOPZ, where passion for culinary excellence meets a warm and inviting atmosphere.
          Our restaurant is more than just a place to dine it's an experience crafted with love and dedication.
        </p>
        <p className="primary-text about-text">
          Achieving a balanced diet involves consuming a variety of foods in appropriate proportions,
          making sure to include a mix of fruits, vegetables, lean proteins, whole grains, and healthy fats.          
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
