import React from "react";
import { motion } from "framer-motion";
import "./it.css";

const Itinerary = () => {
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
        damping: 10,
        duration: 0.6
      }
    }
  };

  const timelineItem = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10,
        staggerChildren: 0.1
      }
    },
    hover: {
      y: -5,
      transition: { duration: 0.3 }
    }
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10
      }
    },
    hover: {
      rotate: [0, 5, -5, 0],
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div
      className="its"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-45%" }}
      variants={container}
    >
      <motion.div className="gt" variants={item}>
        <img 
          src="https://i.imgur.com/vPfpYUb.png" 
          alt="Divider" 
          className="lof_img"
        />
      </motion.div>

      <motion.h2 className="it_title" id="itn" variants={item}>
        Itinerary
      </motion.h2>

      {/* Saturday Event */}
      <motion.div 
        className="t_grid"
        variants={timelineItem}
        whileHover="hover"
      >
        <motion.div className="t_sub malli">
          <motion.img
            src="https://i.imgur.com/B7YNw1q.png"
            alt="Boat party icon"
            className="it_img"
            variants={iconVariants}
            whileHover="hover"
          />
          <motion.p className="it_date" variants={item}>
            Saturday 3rd January 2026
          </motion.p>
        </motion.div>
        <motion.div className="t_sub salli" variants={container}>
          <motion.h2 className="it_place" variants={item}>
            sail before the veil
          </motion.h2>
          <motion.h3 className="time" variants={item}>
            Pre-Wedding Boat Party [Limited Capacity]
          </motion.h3>
          <motion.h3 className="time" variants={item}>
            Time: 18:00
          </motion.h3>
          <motion.h3 className="time" variants={item}>
            V&A Waterfront, Capetown
          </motion.h3>
        </motion.div>
      </motion.div>

      {/* Sunday Event */}
      <motion.div 
        className="t_grid"
        variants={timelineItem}
        whileHover="hover"
      >
        <motion.div className="t_sub malli">
          <motion.img
            src="https://i.imgur.com/oOqPf6T.png"
            alt="Welcome party icon"
            className="it_img2"
            variants={iconVariants}
            whileHover="hover"
          />
          <motion.p className="it_date" variants={item}>
            Sunday 4th January 2026
          </motion.p>
        </motion.div>
        <motion.div className="t_sub salli" variants={container}>
          <motion.h2 className="it_place" variants={item}>
            love above the city
          </motion.h2>
          <motion.h3 className="time" variants={item}>
            Official Welcome Party
          </motion.h3>
          <motion.h3 className="time" variants={item}>
            Time: 17:00
          </motion.h3>
          <motion.h3 className="time" variants={item}>
            Capetown, South Africa
          </motion.h3>
        </motion.div>
      </motion.div>

      {/* Monday Event */}
      <motion.div 
        className="t_grid"
        variants={timelineItem}
        whileHover="hover"
      >
        <motion.div className="t_sub malli">
          <motion.img
            src="https://i.imgur.com/ZZ8y4NV.png"
            alt="Wedding icon"
            className="it_img2"
            variants={iconVariants}
            whileHover="hover"
          />
          <motion.p className="it_date" variants={item}>
            Monday 5th January 2026
          </motion.p>
        </motion.div>
        <motion.div className="t_sub salli" variants={container}>
          <motion.h2 className="it_place" variants={item}>
            Forever starts here
          </motion.h2>
          <motion.h3 className="time" variants={item}>
            Wedding Ceremony & Reception
          </motion.h3>
          <motion.h3 className="time" variants={item}>
            Time: 16:00
          </motion.h3>
          <motion.h3 className="time" variants={item}>
            Stellenbosch, South Africa
          </motion.h3>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Itinerary;