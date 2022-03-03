import React from "react";
import "./CSS/Body.css";

const Body = () => {
  return (
    <>
      <div className="body">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="352"
          height="415"
          viewBox="0 0 352 415"
          fill="none"
        >
          <circle
            cx="234.5"
            cy="180.5"
            r="234.5"
            fill="#AC32E4"
            fill-opacity="0.2"
          />
        </svg>
        <LeftContainer />
        <RightContainer />
      </div>
    </>
  );
};

const img = "https://i.postimg.cc/g0c8WBth/image-2.png";

const RightContainerData = {
  h1: "EXCLUSIVE",
  h3: "newest NFT release",
  p1:
    "The BILLIONARE CLUB is a private collection of 10,000 billionare apes NFTs--unique degital collections. The apes are stored as ERC-721 tokens on the Ethureum blockchain and hosted on IPFS",
  p2: "Reveal on October 20th"
};

const LeftContainer = () => {
  return (
    <>
      <img src={img} alt="BC" />
    </>
  );
};

const RightContainer = () => {
  return (
    <>
      <div className="right-container">
        <h1>{RightContainerData.h1}</h1>
        <h2>{RightContainerData.h3}</h2>
        <p id="p1">{RightContainerData.p1}</p>
        <p id="p2">{RightContainerData.p2}</p>
        <div className="inputs">
          <input type="email" placeholder="your@email.com" />
          <button>Register</button>
        </div>
      </div>
    </>
  );
};
export default Body;
