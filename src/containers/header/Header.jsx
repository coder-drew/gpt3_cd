import React from "react";
import "./header.css";
// import hero from "../../assets/hero.png";

const Header = () => {
  return (
    <div className="hero">
      <div className="hero__body">
        <div className="hero__body-text">
          <h1>
            Startup toolkit for <br /> building successful <br /> web3 companies
          </h1>
          <p>
            All-in-one access to accredited investors, grants, launchpads <br />
            listing solutions, and strategic marketing partners
          </p>
          <button className="button"> Get Started</button>
        </div>

        {/* <img src={hero} alt="hero pic" /> */}
      </div>
    </div>
  );
};

export default Header;
