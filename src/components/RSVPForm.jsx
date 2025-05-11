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
  appId: "1:1009194076515:web:54d98dd6e8d270ef026b56",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const RSVPForm = () => {
  const [isAttending, setIsAttending] = useState(null);
  const [hasPlusOne, setHasPlusOne] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [interestedInGroupFlight, setInterestedInGroupFlight] = useState(null);
  const [attendingBoatParty, setAttendingBoatParty] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    arrivalDate: "",
    plusOneName: "",
    plusOneEmail: "",
    plusOnePhone: "",
    dietaryRequirements: "",
    isAttending: null,
    hasPlusOne: null,
    groupFlightEmail: "",
    groupFlightPhone: "",
    interestedInGroupFlight: null,
    attendingBoatParty: null,
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
      // Add form data with all statuses
      const rsvpData = {
        ...formData,
        isAttending,
        hasPlusOne,
        interestedInGroupFlight,
        attendingBoatParty,
        submittedAt: new Date().toISOString(),
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
        plusOneEmail: "",
        plusOnePhone: "",
        dietaryRequirements: "",
        groupFlightEmail: "",
        groupFlightPhone: "",
        isAttending: null,
        hasPlusOne: null,
        interestedInGroupFlight: null,
        attendingBoatParty: null,
      });
      setIsAttending(null);
      setHasPlusOne(null);
      setInterestedInGroupFlight(null);
      setAttendingBoatParty(null);
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
                <Button
                  style={{ background: "#333" }}
                  type="primary"
                  key="home"
                >
                  <Link to="/">Return Home</Link>
                </Button>,
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

                {["1st January 2026", "2nd January 2026", "3rd January 2026"].includes(formData.arrivalDate) && (
                  <div className="balpi">
                    <p className="mals">
                      Will you attend the pre-wedding boat party on 3rd January? [Separate RSVP required]
                    </p>
                    <p className="note-text">
                      *Limited Capacity: A boarding pass is required for entry. Our dedicated travel desk will issue your boarding pass once travel to Cape Town has been confirmed.
                    </p>
                    <div className="so">
                      <label>
                        <input
                          type="radio"
                          name="boatParty"
                          value="yes"
                          onChange={() => setAttendingBoatParty(true)}
                          checked={attendingBoatParty === true}
                        />
                        Yes, I'll be there!
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="boatParty"
                          value="no"
                          onChange={() => setAttendingBoatParty(false)}
                          checked={attendingBoatParty === false}
                        />
                        No, I can't make it
                      </label>
                    </div>
                  </div>
                )}

                <div className="balpi">
                  <p className="naki">Will you be bringing a plus one?</p>
                  <div className="so">
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
                  {hasPlusOne === true && (
                    <p className="note-text">
                      Note: We are only able to accommodate a limited number of
                      plus ones, all requests will be reviewed and confirmed
                      shortly.
                    </p>
                  )}
                </div>

                {hasPlusOne && (
                  <>
                    <div className="balpi">
                      <label>Plus One's Full Name:</label>
                      <input
                        type="text"
                        name="plusOneName"
                        value={formData.plusOneName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="balpi">
                      <label>Plus One's Email Address:</label>
                      <input
                        type="email"
                        name="plusOneEmail"
                        value={formData.plusOneEmail}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="balpi">
                      <label>Plus One's Phone Number:</label>
                      <input
                        type="tel"
                        name="plusOnePhone"
                        value={formData.plusOnePhone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </>
                )}

                <div className="balpi">
                  <p className="mals">
                    Would you be interested in a group booking flight discount
                    using South African Airways from Accra to Cape Town?
                  </p>
                  <div className="so">
                    <label>
                      <input
                        type="radio"
                        name="groupFlight"
                        value="yes"
                        onChange={() => setInterestedInGroupFlight(true)}
                        checked={interestedInGroupFlight === true}
                      />
                      Yes, I'm interested
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="groupFlight"
                        value="no"
                        onChange={() => setInterestedInGroupFlight(false)}
                        checked={interestedInGroupFlight === false}
                      />
                      No, I'll make my own arrangements
                    </label>
                  </div>
                </div>

                {interestedInGroupFlight && (
                  <>
                    <div className="balpi">
                      <label>Email for flight discount information:</label>
                      <input
                        type="email"
                        name="groupFlightEmail"
                        value={formData.groupFlightEmail}
                        onChange={handleChange}
                        required={interestedInGroupFlight}
                      />
                    </div>
                    <div className="balpi">
                      <label>
                        Phone number for flight discount information:
                      </label>
                      <input
                        type="tel"
                        name="groupFlightPhone"
                        value={formData.groupFlightPhone}
                        onChange={handleChange}
                        required={interestedInGroupFlight}
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
                    {isSubmitting ? <Spin size="small" /> : "Submit RSVP"}
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