import React from "react";
import "./CSS/Footer.css";

const Footer = () => {
  return (
    <>
      <main className="footer-container">
        <div className="upper">
          <div className="left">
            <h1>The Golden Guests</h1>
            <p>
              The Golden Guests edition by the Billionaire Club are the rarest
              NFTs. They are all hand drawn and have no element in common with
              the regular collection.
            </p>
            <h2>Join us to register for the Presale</h2>
          </div>
          <div className="right">
            <img
              src="https://i.postimg.cc/jSjWQNqp/image-7.png"
              alt="The Golden Ticket"
            />
          </div>
        </div>

        <div className="mid">
          <div className="top">
            <h1>Get Aped with Us!</h1>
          </div>
          <div className="bottom">
            <p>Sign up for our newsletter</p>
            <img src="https://i.postimg.cc/rmNCQwp0/pointerpng.png" />
          </div>
        </div>

        <div className="lower">
          <div className="left">
            <img
              src="https://i.postimg.cc/GmY7Tbxs/footerBC.png"
              alt="Footer-Image"
            />
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
          <div className="right">
            <img
              src="https://i.postimg.cc/DwV5Tt3f/image-6.png"
              alt="Twitter"
            />
            <img
              src="https://i.postimg.cc/6qvjVwxS/image-4.png"
              alt="Discord"
            />
            <img
              src="https://i.postimg.cc/4x58QBjJ/image-5.png"
              alt="Instagram"
            />
          </div>
        </div>
      </main>
    </>
  );
};
export default Footer;
