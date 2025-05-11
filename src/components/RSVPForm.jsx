import React, { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";
import { Button, message, Spin, Result } from "antd";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import "./rsvp.css";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiT4jKLC41a9oCYS9WHbBnapFkWW7bDgM",
  authDomain: "gothya-9f271.firebaseapp.com",
  projectId: "gothya-9f271",
  storageBucket: "gothya-9f271.appspot.com",
  messagingSenderId: "1009194076515",
  appId: "1:1009194076515:web:54d98dd6e8d270ef026b56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const RSVPForm = () => {
  const [isAttending, setIsAttending] = useState(null);
  const [hasPlusOne, setHasPlusOne] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    arrivalDate: "",
    plusOneName: "",
    plusOneContact: "",
    dietaryRequirements: "",
    isAttending: null,
    hasPlusOne: null
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Add form data with attendance and plus one status
      const rsvpData = {
        ...formData,
        isAttending,
        hasPlusOne,
        submittedAt: new Date().toISOString()
      };

      // Add document to Firestore
      const docRef = await addDoc(collection(db, "rsvps"), rsvpData);
      
      console.log("Document written with ID: ", docRef.id);
      
      // Reset form and show success state
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        arrivalDate: "",
        plusOneName: "",
        plusOneContact: "",
        dietaryRequirements: "",
        isAttending: null,
        hasPlusOne: null
      });
      setIsAttending(null);
      setHasPlusOne(null);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error adding document: ", error);
      message.error("Failed to submit RSVP. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rsvp-container">
        <div className="homely">
          <div className="home_siz">
            <Link to="/">
              <IoMdHome />
            </Link>
          </div>
          <div className="home_siz">/</div>
          <div className="home_siz">Rsvp</div>
        </div>
        
        <div className="ppp">
          <div className="dolk">
            <Result
              status="success"
              title="Thank You for Your RSVP!"
              subTitle="We've received your response and look forward to celebrating with you."
              extra={[
                <Button style={{background:"#333"}} type="primary" key="home">
                  <Link to="/">Return Home</Link>
                </Button>
              ]}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rsvp-container">
      <div className="homely">
        <div className="home_siz">
          <Link to="/">
            <IoMdHome />
          </Link>
        </div>
        <div className="home_siz">/</div>
        <div className="home_siz">Rsvp</div>
      </div>
      <h2 className="rsvp_title">Wedding RSVP</h2>
      <p className="rsvp_p">
        We are so excited to celebrate with you in Cape Town, South Africa on
        the 4th & 5th of January 2026.
      </p>

      <div className="ppp">
        <div className="dolk">
          <div className="top_rsvp">
            <p className="mals">Will you attend our wedding?</p>
            <div className="so">
              <label>
                <input
                  type="radio"
                  name="attending"
                  value="yes"
                  onChange={() => setIsAttending(true)}
                  checked={isAttending === true}
                />
                Yes, I will be there!
              </label>
              <label>
                <input
                  type="radio"
                  name="attending"
                  value="no"
                  onChange={() => setIsAttending(false)}
                  checked={isAttending === false}
                />
                No, sadly I can't make it.
              </label>
            </div>
          </div>

          {isAttending === false && (
            <p className="bvc">
              Thank you for letting us know. We'll miss you!
            </p>
          )}

          <div className="mafa">
            {isAttending && (
              <form onSubmit={handleSubmit}>
                <div className="balpi">
                  <label>Full Name:</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="balpi">
                  <label>Email Address:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="balpi">
                  <label>Phone Number:</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="balpi">
                  <label>What date do you plan to arrive in Cape Town?</label>
                  <select
                    name="arrivalDate"
                    value={formData.arrivalDate}
                    onChange={handleChange}
                    required
                  >
                    <option value="">--Select--</option>
                    <option value="1st January 2026">1st January 2026</option>
                    <option value="2nd January 2026">2nd January 2026</option>
                    <option value="3rd January 2026">3rd January 2026</option>
                    <option value="4th January 2026">4th January 2026</option>
                  </select>
                </div>

                <div className="balpi">
                  <p className="naki">Will you be bringing a plus one?</p>
                  <label>
                    <input
                      type="radio"
                      name="plusOne"
                      value="yes"
                      onChange={() => setHasPlusOne(true)}
                      checked={hasPlusOne === true}
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="plusOne"
                      value="no"
                      onChange={() => setHasPlusOne(false)}
                      checked={hasPlusOne === false}
                    />
                    No
                  </label>
                </div>

                {hasPlusOne && (
                  <>
                    <div className="balpi">
                      <label>What is your plus one's full name?</label>
                      <input
                        type="text"
                        name="plusOneName"
                        value={formData.plusOneName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="balpi">
                      <label>WhatsApp or Email of your plus one:</label>
                      <input
                        type="text"
                        name="plusOneContact"
                        value={formData.plusOneContact}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </>
                )}

                <div className="balpi">
                  <label>
                    Please list any dietary requirements (for yourself and your
                    plus one, if applicable):
                  </label>
                  <textarea
                    name="dietaryRequirements"
                    value={formData.dietaryRequirements}
                    onChange={handleChange}
                  />
                </div>
                <div className="doti">
                  <Button 
                    type="primary" 
                    htmlType="submit"
                    size="large"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <Spin size="small" />
                    ) : (
                      "Submit RSVP"
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSVPForm;