import React from "react";

function About() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="italic">
        Founded in 1985, Springdale Public School has been dedicated to
        providing quality education and holistic development to students.
      </p>
      <p>Vision:</p>
      <ul circle>
        <li>
          To create a learning environment that fosters academic excellence,
          critical thinking, and ethical values.
        </li>
      </ul>
      <p>
        Mission: To empower students with the knowledge, skills, and values
        needed to thrive in a dynamic world.
      </p>
      <p>
        Principal's Message: At Springdale, we believe in nurturing the
        potential of every student and guiding them towards a successful future.
      </p>
      <h2 className="text-2xl font-bold mt-4">Infrastructure and Facilities</h2>
      <ul>
        <li>State-of-the-art science and computer labs</li>
        <li>Spacious and well-equipped classrooms</li>
        <li>Library with a vast collection of books and digital resources</li>
        <li>
          Sports facilities including a playground, gymnasium, and swimming pool
        </li>
      </ul>
    </div>
  );
}

export default About;
