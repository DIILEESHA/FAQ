import React from "react";
import { motion } from "framer-motion";
import "./wedding.css";

const Wedding = () => {
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10
      }
    },
    hover: {
      scale: 1.02,
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
      rotate: 5,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      className="its"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50%" }}
      variants={container}
    >
      <motion.div className="gt" variants={item}>
        <img 
          src="https://i.imgur.com/vPfpYUb.png" 
          alt="" 
          className="lof_img"
        />
      </motion.div>

      <motion.h2 className="it_title" variants={item}>
        Wedding Day Itinerary
      </motion.h2>

      {/* Timeline Items */}
      <motion.div className="t_grids balpi" variants={timelineItem}>
        <motion.div className="t_sub malli" whileHover="hover">
          <motion.img
            src="https://i.imgur.com/GBN5LhQ.png"
            alt="Ceremony icon"
            className="it_img hehe"
            variants={iconVariants}
            whileHover="hover"
          />
          <motion.p className="it_date" variants={item}>16:00 PM</motion.p>
        </motion.div>
        <motion.div className="t_sub salli" variants={item}>
          <h2 className="it_place">CEREMONY</h2>
        </motion.div>
      </motion.div>

      <motion.div className="t_grids balpi" variants={timelineItem}>
        <motion.div className="t_sub malli" whileHover="hover">
          <motion.img
            src="https://i.imgur.com/nCPN3qQ.png"
            alt="Photos icon"
            className="it_img hehe"
            variants={iconVariants}
            whileHover="hover"
          />
          <motion.p className="it_date" variants={item}>17:30 PM</motion.p>
        </motion.div>
        <motion.div className="t_sub salli" variants={item}>
          <h2 className="it_place">PHOTOS</h2>
        </motion.div>
      </motion.div>

      <motion.div className="t_grids balpi" variants={timelineItem}>
        <motion.div className="t_sub malli" whileHover="hover">
          <motion.img
            src="https://i.imgur.com/Svdt4um.png"
            alt="Cocktail icon"
            className="it_img hehe"
            variants={iconVariants}
            whileHover="hover"
          />
          <motion.p className="it_date" variants={item}>18:00 PM</motion.p>
        </motion.div>
        <motion.div className="t_sub salli" variants={item}>
          <h2 className="it_place">COCKTAIL HOUR</h2>
        </motion.div>
      </motion.div>

      <motion.div className="t_grids balpi" variants={timelineItem}>
        <motion.div className="t_sub malli" whileHover="hover">
          <motion.img
            src="https://i.imgur.com/hz67k2C.png"
            alt="Reception icon"
            className="it_img hehe"
            variants={iconVariants}
            whileHover="hover"
          />
          <motion.p className="it_date" variants={item}>20:00 PM</motion.p>
        </motion.div>
        <motion.div className="t_sub salli" variants={item}>
          <h2 className="it_place">RECEPTION</h2>
        </motion.div>
      </motion.div>

      <motion.div className="t_grids balpi" variants={timelineItem}>
        <motion.div className="t_sub malli" whileHover="hover">
          <motion.img
            src="https://i.imgur.com/q0R79To.png"
            alt="Afterparty icon"
            className="it_img hehe"
            variants={iconVariants}
            whileHover="hover"
          />
          <motion.p className="it_date" variants={item}>22:00 PM</motion.p>
        </motion.div>
        <motion.div className="t_sub salli" variants={item}>
          <h2 className="it_place">AFTERPARTY</h2>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Wedding;