import React from "react";
import "./wedding.css";

const eventData = [
  {
    title: "Pre-Wedding Boat Party",
    subtitle: "Dress code: All white Affair",
    image: "https://i.imgur.com/PrYCmKN.png",
  },
  {
    title: "Welcome Party",
    subtitle: "Dress code: Dream in Pastels",
    subcolor: "pastel Colours",
    image: "https://i.imgur.com/n7r4DD1.png",
  },
  {
    title: "Wedding Ceremony & Reception",
    subtitle: "Dress code: Gilded glamour",
    image: "https://i.imgur.com/TtUqvUq.png",
  },
];

const Pre = () => {
  return (
    <div className="events-container">
      <div className="gt">
        <img src="https://i.imgur.com/vPfpYUb.png" alt="" className="lof_img" />
      </div>
      {eventData.map((event, index) => (
        <div className="event-section" key={index}>
          <div className="event-image"></div>
          <h2 className="it_titles">{event.title}</h2>
          <p className="it_subtitles">{event.subtitle}</p>
          <img src={event.image} alt={event.title} className="lofz_img" />
          {event.subcolor && <p className="it_subcolor"> {event.subcolor}</p>}
        </div>
      ))}

      <p className="it_subtitleo">
        {" "}
        *We kindly request guests refrain from wearing white.
      </p>
    </div>
  );
};

export default Pre;
