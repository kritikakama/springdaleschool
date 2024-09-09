import React from "react";
import Carousel from "../components/Carousel";
import NewsAndEvents from "./newsevent";
function Home() {
  return (
    <div>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">
          Welcome to Springdale Public School
        </h1>
        <p>Where we nurture young minds for a brighter future.</p>
      </div>
      <Carousel />
      <br />
      <p className="left-content">
        Springdale Public School, founded in 1995, is dedicated to providing
        quality education that fosters holistic development.
        <br /> Our vision is to nurture young minds through innovative teaching
        practices, shaping the leaders of tomorrow.
      </p>
      <div className="right-content">
        <NewsAndEvents />
      </div>
    </div>
  );
}

export default Home;
