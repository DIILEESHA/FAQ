import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { motion } from "framer-motion";
import "./faq.css";
import { Link, Navigate } from "react-router-dom";

const Travel = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleRSVPClick = (e) => {
    e.preventDefault();
    Navigate("/rsvp");
    window.scrollTo(0, 0); // Scroll to top after navigation
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const answer = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const faqs = [
    {
      question: "When should I arrive?",
      answer:
        "We recommend arriving in Cape Town no later than midday on Sunday, January 4th, 2026. ",
    },
    {
      question: "Where is the wedding taking place?",
      answer:
        "Events will be hosted at beautiful venues around Cape Town and Stellenbosch. Full details will be shared closer to the date on our wedding website.",
    },
    {
      question: "Can I bring a plus one?",
      answer:
        "Due to limited capacity, we are only able to accommodate guests who have received a formal invitation. If you wish to request a plus one, kindly complete the RSVP form for consideration.",
    },
    {
      question: "Where do I stay?",
      answer:
        " We’ve reserved room blocks at select hotels in Cape Town and Stellenbosch. Booking links are available on the Accommodation page. Airbnb is also a great option for groups or a more personal stay.January is peak season, so we recommend booking early!\n\nRecommended Options:\n\nOption 1: Stay in Cape Town through Sunday January 4th, then transfer to Stellenbosch on Monday morning. We recommend you request early check-in if possible.\n\nOption 2: Stay in Cape Town and travel to Stellenbosch on the wedding day Monday January 5th.\n\n(See “Staying in Cape Town & Traveling to Stellenbosch” for transport details.)",
    },
    {
      question: "What are the transportation options?",
      answer:
        "Cape Town is easy to navigate, and we want your travel to be stress-free. Here are your options:\n- Airport Transfers: Cape Town International Airport (CPT) is about 20–30 minutes from the city center. Taxis, Uber, and Bolt are readily available.\n- Rideshare: Uber and Bolt are reliable and widely used in Cape Town.\n- Car Rentals: Available at the airport and in the city. Driving is on the left-hand side of the road.\n- Shuttles for Wedding Events: We will provide group transportation to and from the wedding ceremony and reception in Stellenbosch. See below for more details.",
    },
    {
      question:
        "Staying in Cape Town & Traveling to Stellenbosch (Wedding Day – Jan 5)",
      answer:
        "If you're staying in Cape Town city center, we’ve got you covered for the wedding day:\n- Shuttle Service Provided: We will provide round-trip transportation between Cape Town (V&A Waterfront) and the wedding venue in Stellenbosch on Monday, 5th January.\n- Pick-up & Drop-off Location: V&A Waterfront (exact location and times to be shared closer to the date)\n- Return shuttles will depart after the reception after the party ends.\n- Rideshare Option: If you prefer to travel independently, Uber and Bolt both operate between Cape Town and Stellenbosch. The journey takes approximately 45–60 minutes, depending on traffic.\n - Estimated cost: R400–R700 (approx. $20–$35 USD) one way.\n - We recommend scheduling your ride in advance, especially for the return trip at night.\n- Driving Yourself: If you plan to rent a car, Stellenbosch is about 50 km (31 miles) from Cape Town. The drive is scenic and straightforward via the N1 or N2 highways. ",
    },
    {
      question: "What’s the weather like in January?",
      answer:
        "Expect warm, sunny days with temperatures between 25°C and 30°C (77°F to 86°F). Evenings may be breezy, so bring a light layer.",
    },
    {
      question: "Do I need a visa to travel to South Africa?",
      answer:
        "Many passport holders (including Ghana, US, UK and EU) can enter South Africa visa-free for up to 90 days. Please check with your local South African consulate or official visa site to confirm. Additionally, you can contact our dedicated travel concierge service at bemaandkwame@travelhouse.africa for more information about travel requirements.",
    },
    {
      question: "📩 How do I RSVP?",
      answer:
        "Please RSVP by September 1st, 2025 so we can finalize arrangements. You can RSVP by visiting the RSVP page on our website or by clicking the link in your invitation.",
    },

    {
      question: "🗺️ Excursions, Activities & Concierge Services",
      answer:
        "Looking to explore Cape Town, Stellenbosch, or other gems in the Western Cape during your visit? Whether you’re interested in a safari, wine tasting, hiking Table Mountain, coastal drives, or cultural tours, we want your trip to be unforgettable.\n\n Our dedicated concierge service is available to help plan excursions, activities, and special experiences before or after the wedding weekend.",
    },
    {
      question: "Contact",
      answer:
        "  Our team can assist with curated recommendations, bookings, and general guidance to make your travel seamless and personalised.\n\n📩 Travel and accommodation:\nBemaandkwame@travelhouse.africa\n\n📧 General inquiries:\nInfo@bemaandkwame.com\n\n📞 Travel concierge desk:\n+27 (0) 21 300 3493 Office\n+27 (0) 83 383 1859 Karen",
    },
  ];

  return (
    <motion.div
      className="its ghl"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <motion.div className="gt" variants={item}>
        <img
          src="https://i.imgur.com/7J0wt8y.png"
          alt=""
          className="lofv_img"
        />
      </motion.div>

      <motion.h2 className="it_title" id="faq" variants={item}>
        FAQ
      </motion.h2>

      {faqs.map((faq, index) => (
        <motion.div className="faq_main" key={index} variants={item}>
          <motion.div
            className="faq_plus"
            onClick={() => toggleFAQ(index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="faq_sm">
              <h2 className="faq_title">{faq.question}</h2>
            </div>
            <div className="faq_sm">
              {activeIndex === index ? <FaMinus /> : <FaPlus />}
            </div>
          </motion.div>

          <motion.div
            className="faq_ans"
            initial="hidden"
            animate={activeIndex === index ? "visible" : "hidden"}
            exit="exit"
            variants={answer}
          >
            <p className="faq_ans_p">
              {faq.answer.split("\n").map((paragraph, i) => (
                <span key={i}>
                  {paragraph}
                  <br />
                  {paragraph.trim() && <br />}
                </span>
              ))}
            </p>
          </motion.div>
          <div className="line"></div>
        </motion.div>
      ))}

      <motion.div className="bottomly" variants={item}>
        <img
          src="https://i.imgur.com/AwLnIad.png"
          alt=""
          className="bottom_img"
        />
      </motion.div>

      <motion.div className="faq_img_gri" variants={container}>
        {[0, 1, 2].map((index) => (
          <motion.div
            className="faq_img_s"
            key={index}
            variants={item}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={`https://i.imgur.com/${
                ["Q4xc3bH", "5k4AyV9", "x7Oma0M"][index]
              }.jpeg`}
              alt=""
              className="hji"
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="klo"
        variants={item}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button
          className="rsvp_btn"
          style={{ color: "#000", background: "#fff" }}
          onClick={handleRSVPClick}
        >
          <Link
            style={{ color: "#000", background: "#fff" }}
            to="/rsvp"
            className="a"
          >
            rsvp now
          </Link>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Travel;
