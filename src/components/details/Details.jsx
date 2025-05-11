import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Import Link from react-scroll
import "./details.css";
import detailer from "../../assets/invite.jpg";

const Details = () => {
  // Animation variants (keep your existing animations)
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const slideUp = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const slideLeft = {
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const scaleIn = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.4,
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <motion.div
      className="detail_container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-15%" }}
      variants={container}
    >
      <motion.div
        id="details"
        className="details_sub oneo"
        variants={container}
      >
        <motion.div className="lok" variants={slideUp}>
          <img
            src="https://i.imgur.com/7J0wt8y.png"
            alt="Divider"
            className="lof_img"
          />
        </motion.div>

        <motion.p className="detail_title" variants={slideLeft}>
          You're Invited to the Best Day Ever!
        </motion.p>

        <motion.p className="detail_para" variants={slideLeft}>
          We're so excited to have you with us on our special day. Save the
          date, bring your dancing shoes, and get ready to celebrate our happily
          ever after
        </motion.p>

        <Link
          to="itn" // Target the FAQ section
          spy={true}
          smooth={true}
          style={{ color: "#000" }}
          offset={-70} // Adjust based on your header height
          duration={500}
        >
          <motion.button
            className="rsvp_btn"
            variants={buttonVariants}
            whileHover="hover"
            style={{ background: "#fff", color: "#000" }}
            whileTap="tap"
          >
            view details
          </motion.button>
        </Link>
      </motion.div>

      <motion.div className="details_sub" variants={scaleIn}>
        <img src={detailer} alt="Wedding invitation" className="detail_img" />
      </motion.div>
    </motion.div>
  );
};

export default Details;
