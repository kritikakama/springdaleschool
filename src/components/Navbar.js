import React from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../assets/images/logo.png";
function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          <img
            src={logo}
            alt="Logo"
            className="absolute top-4 left-4 w-8 h-auto"
          />
          Springdale Public School
        </Link>
        <div className="flex items-center">
          <div className="hidden md:block">
            <Link
              to="/"
              className="text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              About Us
            </Link>
            <Link
              to="/academics"
              className="text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Academics
            </Link>
            <Link
              to="/admissions"
              className="text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Admissions
            </Link>
            <Link
              to="/faculty"
              className="text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Faculty
            </Link>
            <Link
              to="/students"
              className="text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Students
            </Link>
            <Link
              to="/gallery"
              className="text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact Us
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link
            to="/"
            className="block text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            About Us
          </Link>
          <Link
            to="/academics"
            className="block text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Academics
          </Link>
          <Link
            to="/admissions"
            className="block text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Admissions
          </Link>
          <Link
            to="/faculty"
            className="block text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Faculty
          </Link>
          <Link
            to="/students"
            className="block text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Students
          </Link>
          <Link
            to="/gallery"
            className="block text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="block text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
