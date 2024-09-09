import React from "react";

function Gallery() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <img
          src="../assets/images/image1.jpeg"
          alt="Event 1"
          className="w-full h-auto"
        />
        <img
          src="../assets/images/image2.jpeg"
          alt="Event 2"
          className="w-full h-auto"
        />
        <img
          src="../assets/images/image3.jpeg"
          alt="Event 3"
          className="w-full h-auto"
        />
        <img
          src="../assets/images/image4.jpeg"
          alt="Event 4"
          className="w-full h-auto"
        />
        <img
          src="../assets/images/image5.jpeg"
          alt="Event 5"
          className="w-full h-auto"
        />
        <img
          src="../assets/images/image6.jpeg"
          alt="Event 6"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

export default Gallery;
