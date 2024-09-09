import React from "react";

function Contact() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        Address: Springdale Public School, 123 Education Lane, Cityville, State,
        ZIP Code
      </p>
      <p className="mb-4">Phone: +1 (123) 456-7890</p>
      <p className="mb-4">Email: info@springdale.edu</p>
      <form className="mb-4">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea className="w-full border border-gray-300 p-2 rounded"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Submit
        </button>
      </form>
      <div className="mb-4">
        <iframe
          title="Springdale Public School Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434508275!2d144.957413315319!3d-37.8136279797516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577c4df1a2c291!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1600196354157!5m2!1sen!2sus"
          width="100%"
          height="450"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
