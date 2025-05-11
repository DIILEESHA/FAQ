import React, { useState } from "react";
import { Modal, Button } from "antd";
import "./wedding.css";
import pdfFile from "../../assets/yu.pdf";

const Travel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  return (
    <div className="its ghl">
      {/* First Section */}
      <div className="gt">
        <img
          src="https://i.imgur.com/7J0wt8y.png"
          alt=""
          className="lofv_img"
        />
      </div>

      <div id="travel">
        <h2 className="it_title">Travel Information</h2>
      </div>

      <p className="travel_p">
        Our dedicated travel concierge desk is here to make your trip to Cape
        Town easy and stress-free.
        <br />
        <br />
        Need a great place to stay? Help with airport transfers? Ideas for
        things to do around Stellenbosch and Cape Town?
        <br />
        <br />
        Please don't hesitate to contact the desk!
        <br />
        <br />
        <a
          style={{ color: "#fff" }}
          href="mailto:Bemaandkwame@travelhouse.africa"
        >
          Bemaandkwame@travelhouse.africa
        </a>
      </p>

      {/* Second Section */}
      <div className="gt">
        <img
          src="https://i.imgur.com/7J0wt8y.png"
          alt=""
          className="lofv_img"
        />
      </div>

      <h2 className="it_title" id="stay">
        Where To Stay
      </h2>

      <p className="gui_para">
        We've reserved rooms at some nearby hotels to make your stay as easy as
        possible.
      </p>

      {/* First Hotel Grid */}
      <div className="place_grid">
        <div className="place_sub">
          <div className="card">
            <h2 className="place_title">CAPE TOWN</h2>
          </div>
        </div>
        <div className="place_sub">
          <div className="card">
            <h2 className="place_title">
              <a
                href="https://www.hotelsky.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                HOTEL SKY
              </a>
            </h2>
          </div>
        </div>
        <div className="place_sub">
          <div className="card">
            <h2 className="place_title">
              <a
                href="https://www.premierhotels.co.za/sea-point"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                PREMIER HOTEL
              </a>
            </h2>
          </div>
        </div>
        <div className="place_sub">
          <div className="card">
            <h2 className="place_title">
              <a
                href="https://crestagrandehotel.com-capetown.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                CRESTA GRANDE
              </a>
            </h2>
          </div>
        </div>
      </div>

      {/* Second Hotel Grid */}
      <div className="place_grid">
        <div className="place_sub">
          <div className="card">
            <h2 className="place_title">STEllenbosch</h2>
          </div>
        </div>
        <div className="place_sub">
          <div className="card">
            <h2 className="place_title">
              <a
                href="https://dezalzelodge.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                De Zalze Lodge Stellenbosch
              </a>
            </h2>
          </div>
        </div>
        <div className="place_sub">
          <div className="card">
            <h2 className="place_title">
              <a
                href="https://www.majekahouse.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                MAJEKA HOUSE
              </a>
            </h2>
          </div>
        </div>
        <div className="place_sub">
          <div className="card">
            <h2 className="place_title">
              <a
                href="https://www.asara.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                ASARA WINE ESTATE & HOTEL
              </a>
            </h2>
          </div>
        </div>
      </div>

      <p className="travel_p2">
        <i>
          For booking assistance contact:{" "}
          <a
            style={{ color: "#fff" }}
            href="mailto:Bemaandkwame@travelhouse.africa"
          >
            Bemaandkwame@travelhouse.africa
          </a>
        </i>
        <br />
        Office: +27 21 300 3493 <br />
        Karen: +27 83 383 1859
      </p>

      <div className="kpo">
        <button className="rsvp_btn" onClick={showModal}>
          CLICK HERE FOR MORE INFO
        </button>
      </div>

      {/* PDF Modal */}
      <Modal
        title="More Information"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="download" type="primary" href={pdfFile} download>
            Download PDF
          </Button>,
          <Button key="close" onClick={handleCancel}>
            Close
          </Button>,
        ]}
        width={800}
      >
        <iframe
          src={pdfFile}
          width="100%"
          height="500px"
          title="PDF Preview"
          style={{ border: "none" }}
        ></iframe>
      </Modal>
    </div>
  );
};

export default Travel;
