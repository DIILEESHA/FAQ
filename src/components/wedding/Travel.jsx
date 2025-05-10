import React from "react";
import { motion } from "framer-motion";
import "./wedding.css";

const Travel = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const cardItem = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80
      }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  const button = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        delay: 0.3
      }
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <motion.div
      className="its ghl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100%" }}
      variants={container}
    >
      {/* First Section */}
      <motion.div className="gt" variants={item}>
        <img
          src="https://i.imgur.com/7J0wt8y.png"
          alt=""
          className="lofv_img"
        />
      </motion.div>

      <motion.h2 className="it_title" variants={item}>
        Travel Information
      </motion.h2>

      <motion.p className="travel_p" variants={item}>
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
      </motion.p>

      {/* Second Section */}
      <motion.div className="gt" variants={item}>
        <img
          src="https://i.imgur.com/7J0wt8y.png"
          alt=""
          className="lofv_img"
        />
      </motion.div>

      <motion.h2 className="it_title" variants={item}>
        Where To Stay
      </motion.h2>

      <motion.p className="gui_para" variants={item}>
        We've reserved rooms at some nearby hotels to make your stay as easy as
        possible.
      </motion.p>

      {/* First Hotel Grid */}
      <motion.div className="place_grid" variants={container}>
        <motion.div className="place_sub" variants={cardItem} whileHover="hover">
          <div className="card">
            <h2 className="place_title">CAPE TOWN</h2>
          </div>
        </motion.div>
        <motion.div className="place_sub" variants={cardItem} whileHover="hover">
          <div className="card">
            <h2 className="place_title">
              <a
                href="https://www.hotelsky.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                HOTEL SKY
              </a>
            </h2>
          </div>
        </motion.div>
        <motion.div className="place_sub" variants={cardItem} whileHover="hover">
          <div className="card">
            <h2 className="place_title">
              <a
                href="https://www.premierhotels.co.za/sea-point"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                PREMIER HOTEL
              </a>
            </h2>
          </div>
        </motion.div>
        <motion.div className="place_sub" variants={cardItem} whileHover="hover">
          <div className="card">
            <h2 className="place_title">
              <a
                href="https://crestagrandehotel.com-capetown.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                CRESTA GRANDE
              </a>
            </h2>
          </div>
        </motion.div>
      </motion.div>

      {/* Second Hotel Grid */}
      <motion.div className="place_grid" variants={container}>
        <motion.div className="place_sub" variants={cardItem} whileHover="hover">
          <div className="card">
            <h2 className="place_title">STEllenbosch</h2>
          </div>
        </motion.div>
        <motion.div className="place_sub" variants={cardItem} whileHover="hover">
          <div className="card">
            <h2 className="place_title">
              <a
                href="https://dezalzelodge.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                De Zalze Lodge Stellenbosch
              </a>
            </h2>
          </div>
        </motion.div>
        <motion.div className="place_sub" variants={cardItem} whileHover="hover">
          <div className="card">
            <h2 className="place_title">
              <a
                href="https://www.majekahouse.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                MAJEKA HOUSE
              </a>
            </h2>
          </div>
        </motion.div>
        <motion.div className="place_sub" variants={cardItem} whileHover="hover">
          <div className="card">
            <h2 className="place_title">
              <a
                href="https://www.asara.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                ASARA WINE ESTATE & HOTEL
              </a>
            </h2>
          </div>
        </motion.div>
      </motion.div>

      <motion.p className="travel_p2" variants={item}>
        <i>
          For booking assistance contact:{" "}
          <a
            style={{ color: "#fff" }}
            href="mailto:Bemaandkwame@travelhouse.africa"
          >
            Bemaandkwame@travelhouse.africa
          </a>
        </i>
        <br />
        Office: +27 21 300 3493 <br />
        Karen: +27 83 383 1859
      </motion.p>

      <motion.div className="kpo" variants={button} whileHover="hover" whileTap="tap">
        <button className="rsvp_btn">CLICK HERE FOR MORE INFO</button>
      </motion.div>
    </motion.div>
  );
};

export default Travel;