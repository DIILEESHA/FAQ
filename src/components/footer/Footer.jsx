import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_sub">
        <img src="https://i.imgur.com/DOI8vJA.png" className="footer_img" alt="" />

        <p className="footer_p">
          <b>connect with us:</b>
          <br />
          Travel Desk: bemaandkwame@travelhouse.africa
          <br />
          Contact Number: +27(0)833831859
        </p>
      </div>
      <div className="footer_sub">
        <p className="other">
          Thank you for being a part of our love story. We can’t wait to
          celebrate with you!
        </p>
      </div>
    </div>
  );
};

export default Footer;
