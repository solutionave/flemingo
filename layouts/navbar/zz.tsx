import React,{useState} from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import {
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa";

function Navbar() {
  const [navBar, setNavBar] = useState(1);
  return (
    <div>
      {/* <Router> */}
        <nav className="navbar px-5 pt-3 navbar-expand-lg ">
          <a className="navbar-brand navLogo" href="#">
            <img
              src="https://www.nayapay.com/images/orange-logo.svg"
              alt="logo"
            ></img>
          </a>
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
              <li className="nav-item ">
                <Link
                  className={navBar === 1 ? "active nav-link" : "nav-link "}
                  href="/"
                  onClick={() => {
                    setNavBar(1);
                  }}
                >
                  Personal <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={navBar === 2 ? "active nav-link" : "nav-link "}
                  href="/business"
                  onClick={() => {
                    setNavBar(2);
                  }}
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className={navBar === 3 ? "active nav-link" : "nav-link "}
                  href="#"
                  onClick={() => {
                    setNavBar(3);
                  }}
                >
                  Help Center
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={navBar === 4 ? "active nav-link" : "nav-link "}
                  href="#"
                  onClick={() => {
                    setNavBar(4);
                  }}
                >
                  Newsroom
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={navBar === 5 ? "active nav-link" : "nav-link "}
                  href="#"
                  onClick={() => {
                    setNavBar(5);
                  }}
                >
                  Careers
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={navBar === 6 ? "active nav-link" : "nav-link "}
                  href="#"
                  onClick={() => {
                    setNavBar(6);
                  }}
                >
                  <button className="navButton">Get NayaPay</button>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      {/* </Router> */}
    </div>
  );
}
export default Navbar;
