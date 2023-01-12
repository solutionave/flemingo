import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="navbar px-5 pt-3 navbar-expand-md mb-5">
        <div className="navbar-brand">
          <Link className="nav-link" href={"/"}>
            <img src="Flemingo.png"></img>
          </Link>
        </div>
        <button
          className="navbar-toggler navbar-light"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
          <div className="nav-item">
            <Link className="nav-link text-secondary mr-4" href={"/features"}>
              Features
            </Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link text-secondary mr-4" href={"/pricing"}>
              Pricing
            </Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link text-secondary mr-4" href={"/testimonials"}>
              Testimonials
            </Link>
          </div>
          <div className="nav-item">
            <button className="Btn ">Login</button>
          </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
