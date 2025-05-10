import React from "react";
import { motion } from "framer-motion";
import "./story.css";

const Story = () => {
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

  const fadeUp = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const fadeLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const fadeRight = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  };

  return (
    <motion.div 
      className="story"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={container}
    >
      <motion.div className="gt" variants={fadeUp}>
        <img 
          src="https://i.imgur.com/vPfpYUb.png" 
          alt="Divider" 
          className="lof_img"
        />
      </motion.div>

      <motion.h2 className="story_title" variants={fadeUp}>
        Our Love Story
      </motion.h2>

      <motion.div className="story_grid" variants={container}>
        <motion.div className="story_sub" variants={scaleIn}>
          <img
            src="https://i.imgur.com/VDFCrAI.jpeg"
            alt="First meeting"
            className="story_one_img"
          />
        </motion.div>
        <motion.div className="story_sub" variants={fadeRight}>
          <p className="story_p">
            Some love stories start with a grand gesture—
            <b>ours began with a song.</b>
            <br />
            It was a lively December night in 2017, inside an exciting karaoke
            bar in Osu, Accra. Between the music, the laughter, and an
            undeniable spark, our connection was instant. That night, we built
            the foundation of something truly special—a friendship that would
            soon blossom into forever.
          </p>
        </motion.div>
      </motion.div>

      <motion.p className="story_p delta" variants={fadeUp}>
        Nearly a year later, on October 26th, 2018, we had our first official
        date - a moment that sparked something undeniable. By December 30th, we
        were inseparable. But love, as we soon discovered, isn't always a
        straight path. With Bema in the UK and Kwame in the USA, our journey
        became one of longing and devotion, woven through late-night calls,
        airport embraces, and a love that defied distance to grow even stronger.
      </motion.p>

      <motion.div className="a_grid" variants={container}>
        <motion.div className="a_sub mal" variants={fadeLeft}>
          <p className="story_p delta">
            Then came 2020, the year the world stood still, but for us, it was
            the year everything truly came together. With remote work making it
            possible to spend more time side by side, we deepened our bond,
            embracing our love for travel, adventure, and the faith that had
            always guided us.
          </p>
        </motion.div>
        <motion.div className="a_sub" variants={scaleIn}>
          <img
            src="https://i.imgur.com/RRRfuB2.jpeg"
            alt="Together"
            className="story_one_img ds"
          />
        </motion.div>
        <motion.div className="a_sub for" variants={scaleIn}>
          <img
            src="https://i.imgur.com/8LgU1cQ.jpeg"
            alt="Adventure"
            className="story_one_img ds"
          />
        </motion.div>
        <motion.div className="a_sub dl" variants={fadeRight}>
          <p className="story_p">
            Through distance and time zones, laughter and love, challenges and
            adventures, we've built something unshakable. And now, with hearts
            full of gratitude, we're ready to turn the page to the most
            beautiful chapter yet—
            <b>forever.</b>
            <br />
            <br />
            Join us as we celebrate the beginning of our forever.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Story;