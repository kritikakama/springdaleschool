import React from "react";

function Faculty() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Faculty</h1>
      <ul className="list-disc list-inside mb-4">
        <li>
          Dr. Jane Smith - Principal: Ph.D. in Education, 20 years of experience
          in educational leadership.
        </li>
        <li>
          Mr. John Doe - Mathematics: M.Sc. in Mathematics, 15 years of teaching
          experience.
        </li>
        <li>
          Mrs. Mary Johnson - Science: M.Sc. in Physics, 12 years of teaching
          experience.
        </li>
        <li>
          Mr. David Brown - English: M.A. in English Literature, 10 years of
          teaching experience.
        </li>
      </ul>
    </div>
  );
}

export default Faculty;
