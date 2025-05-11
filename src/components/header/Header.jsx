import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

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

  // Nav items
  const navItems = [
    { name: "save the date", target: "save-the-date", type: "scroll" },
    { name: "the details", target: "details", type: "scroll" },
    { name: "our story", target: "story", type: "scroll" },
    { name: "rsvp", target: "/rsvp", type: "route" },
    { name: "faq", target: "faq", type: "scroll" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  // Custom function for mobile RSVP click to scroll to top
  const handleRSVPClick = () => {
    setIsMenuOpen(false);
    navigate("/rsvp");
    window.scrollTo(0, 0);
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
                {item.type === "scroll" ? (
                  <ScrollLink
                    activeClass="active"
                    to={item.target}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </ScrollLink>
                ) : (
                  <Link className="a" to={item.target} onClick={handleNavClick}>
                    {item.name}
                  </Link>
                )}
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
              >
                {item.type === "scroll" ? (
                  <ScrollLink
                    activeClass="active"
                    to={item.target}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </ScrollLink>
                ) : item.name === "rsvp" ? (
                  <span onClick={handleRSVPClick} className="a">
                    {item.name}
                  </span>
                ) : (
                  <Link to={item.target} onClick={handleNavClick}>
                    {item.name}
                  </Link>
                )}
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
        >
          <Link to="/rsvp" className="a" onClick={() => window.scrollTo(0, 0)}>
            rsvp now
          </Link>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Header;
