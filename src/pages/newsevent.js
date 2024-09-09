import React from "react";
import "./newsevent.css";

const NewsAndEvents = () => {
  const newsEvents = [
    { date: "Sept 1, 2024", event: "Back to School - Semester Begins" },
    { date: "Sept 5, 2024", event: "Teacher’s Day Celebration" },
    { date: "Oct 15, 2024", event: "Annual Sports Day" },
    { date: "Nov 3, 2024", event: "Science Exhibition" },
    { date: "Dec 20, 2024", event: "Christmas Party and Holiday Celebration" },
  ];

  return (
    <div className="news-events">
      <h3>News & Events</h3>
      <div className="scroll-tab">
        {newsEvents.map((item, index) => (
          <div key={index} className="event-item">
            <strong>{item.date}</strong>: {item.event}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsAndEvents;
