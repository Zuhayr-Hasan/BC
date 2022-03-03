import React from "react";
import "./CSS/Header.css";

const Header = () => {
  return (
    <>
      <Navigation />
    </>
  );
};

const Navigation = () => {
  return (
    <div className="nav">
      <Leftwing />
      <Rightwing />
    </div>
  );
};

const Leftwing = () => {
  return (
    <>
      <img src={img} alt="BC" />
    </>
  );
};

const Rightwing = () => {
  return (
    <>
      <div className="right">
        <ul>
          <li>{listItems.item1}</li>
          <li>{listItems.item2}</li>
          <li>{listItems.item3}</li>
          <li>{listItems.item4}</li>
        </ul>
        <button>Join our Discord</button>
      </div>
    </>
  );
};

let img = "https://i.postimg.cc/FRpXHMfy/image-1.png";

let listItems = {
  item1: "Home",
  item2: "Features",
  item3: "Roadmap",
  item4: "Team"
};

export default Header;
