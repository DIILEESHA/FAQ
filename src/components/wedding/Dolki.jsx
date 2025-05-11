import React, { useState } from "react";
import { Modal, Button } from "antd";
import "./wedding.css";
import pdfFile from "../../assets/yu.pdf";

const Dolki = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  return (
    <div className="its ghl" id="travel">
      {/* First Section */}
      <div className="gt">
        <img
          src="https://i.imgur.com/7J0wt8y.png"
          alt=""
          className="lofv_img"
        />
      </div>

      <div id="travel">
        <h2 className="it_title">Travel Information</h2>
      </div>

      <p className="travel_p">
        Our dedicated travel concierge desk is here to make your trip to Cape
        Town easy and stress-free.
        <br />
        <br />
        Need a great place to stay? Help with airport transfers? Ideas for
        things to do around Stellenbosch and Cape Town?
        <br />
        <br />
        Please don't hesitate to contact the desk!
        <br />
        <br />
        <a
          style={{ color: "#fff" }}
          href="mailto:Bemaandkwame@travelhouse.africa"
        >
          Bemaandkwame@travelhouse.africa
        </a>
        <br />
        <br />
        <strong>General inquiries:</strong>
        <br />
        <a style={{ color: "#fff" }} href="mailto:Info@bemaandkwame.com">
          Info@bemaandkwame.com
        </a>
        <br />
        <br />
      </p>
    </div>
  );
};

export default Dolki;
