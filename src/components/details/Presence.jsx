import React from "react";
import { motion } from "framer-motion";
import "./details.css";
import detailer from "../../assets/invite.jpg";

const Presence = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        delay: 0.5,
      },
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <motion.div
      className="detail_container hh"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20%" }}
      variants={containerVariants}
    >
      <div className="details_sub oneo lcc">
        <div className="gg">
          <motion.p className="lk" variants={textVariants}>
            BEMA& KWAME
          </motion.p>

          <motion.p className="detail_title" variants={textVariants}>
            Your Presence is the Best Present
          </motion.p>

          <motion.p className="detail_para" variants={textVariants}>
            We're so grateful for your love and support. If you'd like to
            contribute to our future together, here's a peek at our wish list.
          </motion.p>

          <motion.button
            className="rsvp_btn nnn"
            variants={buttonVariants}
            style={{ background: "#fff", color: "#000" }}
            whileHover="hover"
            whileTap="tap"
          >
            <a
              href="https://www.zola.com/registry/kwameandbema"
              style={{ background: "#fff", color: "#000" }}
              target="_blank"
            >
              shop our registry
            </a>
          </motion.button>
        </div>
      </div>

      <motion.div className="details_sub" variants={imageVariants}>
        <img
          src="https://i.imgur.com/hTSimxo.jpeg"
          alt="Wedding invitation"
          className="detail_img"
        />
      </motion.div>
    </motion.div>
  );
};

export default Presence;
