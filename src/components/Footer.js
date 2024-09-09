import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Springdale Public School. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
