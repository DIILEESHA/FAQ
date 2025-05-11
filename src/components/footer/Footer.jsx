import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footly">
      <div className="footer">
        <div className="footer_sub">
          <img
            src="https://i.imgur.com/DOI8vJA.png"
            className="footer_img"
            alt=""
          />

          <p className="footer_p">
            <b>Contact Info:</b>
            <br />
            Travel and accommodation: <br />
            Bemaandkwame@travelhouse.africa
            <br />
            <br />
            General inquiries: <br />
            Info@bemaandkwame.com
            <br />
            <br />
            Travel concierge desk: <br />
            +27 (0) 21 300 3493 Office <br />
            +27 (0) 83 383 1859 Karen
          </p>
        </div>

        <div className="footer_sub">
          <p className="other">
            Thank you for being a part of our love story. We can’t wait to
            celebrate with you!
          </p>
        </div>
      </div>

      <a
        className="dodo"
        style={{ color: "#000" }}
        href="https://www.o-kconsulting.com/"
      >
        © 2025 O-K Consulting
      </a>
    </div>
  );
};

export default Footer;
