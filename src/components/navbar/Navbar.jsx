import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine, RiArrowDropDownLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Menu = () => (
  <>
    <p className="navbar__menu-item">
      <a href="#products">Products</a>
      <RiArrowDropDownLine className="arrow" />
    </p>
    <p className="navbar__menu-item">
      <a href="#solutions">Solutions</a>
      <RiArrowDropDownLine className="arrow" />
    </p>
    <p className="navbar__menu-item">
      <a href="#resources">Resources</a>
      <RiArrowDropDownLine className="arrow" />
    </p>
    <p className="navbar__menu-item">
      <a href="#company">Company</a>
      <RiArrowDropDownLine className="arrow" />
    </p>
    <p className="navbar__menu-item">
      <a href="#blog">Blog</a>
      <RiArrowDropDownLine className="arrow" />
    </p>
    <p className="navbar__menu-item">
      <a href="#pricing">Pricing</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  // const [isNotHovering, setIsNotHovering] = useState(false);

  // const handleMouseLeave = () => {
  //   setIsNotHovering(true);
  // };

  // const handleMouseEnter = () => {
  //   setIsNotHovering(false);
  // };

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
          {/* <p
            className="navbar__menu-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#products">Products</a>
            <RiArrowDropDownLine
              className={isNotHovering ? "arrow-var": ""}
              id="arrow"
            />
          </p>
          <p
            className="navbar__menu-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#solutions">Solutions</a>
            <RiArrowDropDownLine
              className={isNotHovering ? "arrow-var" : ""}
              id="arrow"
            />
          </p>
          <p
            className="navbar__menu-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#resources">Resources</a>
            <RiArrowDropDownLine
              // className={isHovering ? "rotate-180-cw" : "rotate-0-cw"}
              id="arrow"
            />
          </p>
          <p
            className="navbar__menu-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#company">Company</a>
            <RiArrowDropDownLine
              className={isNotHovering ? "rotate-180-cw" : "rotate-0-cw"}
              id="arrow"
            />
          </p>
          <p
            className="navbar__menu-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#blog">Blog</a>
            <RiArrowDropDownLine
              className={isNotHovering ? "rotate-180-cw" : "rotate-0-cw"}
              id="arrow"
            />
          </p>
          <p
            className="navbar__menu-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#pricing">Pricing</a>
          </p> */}
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
