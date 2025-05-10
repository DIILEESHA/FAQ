import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Animation variants
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

  const fadeUp = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const nameItem = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const buttonItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 0.6,
        ease: "backOut",
      },
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.98,
    },
  };

  const mobileMenu = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  // Nav items data
  const navItems = [
    { name: "save the date", target: "save-the-date" },
    { name: "the details", target: "details" },
    { name: "our story", target: "story" },
    { name: "rsvp", target: "rsvp" },
    { name: "faq", target: "faq" },
  ];

  // RSVP button click handler
  const handleRSVPClick = () => {
    window.open("https://bemaandkwameswedding.rsvpify.com/?securityToken=c2qGaQBHWdqdYSlnIbGdXCvgWAx1i7JE", "_blank");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.div
      className="header_container"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="ballo">
        <div className="size">
          <img
            src="https://i.imgur.com/vPfpYUb.png"
            alt=""
            className="size_img"
          />
        </div>

        <div className="size desktop_nav">
          <ul className="nav_ul">
            {navItems.map((item, index) => (
              <motion.li 
                key={index}
                className="nav_li"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  activeClass="active"
                  to={item.target}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={handleNavClick}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Mobile menu button */}
        <div className="mobile_menu_btn" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          className="mobile_menu"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={mobileMenu}
        >
          <ul className="mobile_nav_ul">
            {navItems.map((item, index) => (
              <motion.li 
                key={index}
                className="mobile_nav_li"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNavClick}
              >
                <Link
                  activeClass="active"
                  to={item.target}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}

      <div className="home_details">
        <motion.div className="top_section" variants={fadeUp}>
          <p className="top_p">
            Our Forever
            <br />
            Begins Here
          </p>
        </motion.div>

        <div className="couple_name_section">
          <motion.h2 className="couple_name" variants={nameItem} custom={0}>
            Bema
          </motion.h2>
          <motion.h2 className="and" variants={nameItem} custom={1}>
            &
          </motion.h2>
          <motion.h2 className="couple_name" variants={nameItem} custom={2}>
            Kwame
          </motion.h2>
        </div>

        <motion.button
          className="rsvp_btn"
          variants={buttonItem}
          whileHover="hover"
          whileTap="tap"
          onClick={handleRSVPClick}
        >
          rsvp now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Header;