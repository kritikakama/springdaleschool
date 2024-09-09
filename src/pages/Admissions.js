import React from "react";

function Admissions() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Admissions</h1>
      <h2 className="text-2xl font-bold mb-2">
        Admission Process and Criteria
      </h2>
      <p className="mb-4">
        Admission forms are available for download. Submit the completed form
        along with required documents at the school office. Admission is based
        on merit and availability of seats. Entrance tests may be conducted for
        certain grades.
      </p>
      <h2 className="text-2xl font-bold mb-2">Important Dates</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Admission Form Availability: March 1st</li>
        <li>Last Date for Submission: March 31st</li>
        <li>Entrance Test: April 15th</li>
        <li>Announcement of Results: April 30th</li>
      </ul>
    </div>
  );
}

export default Admissions;
