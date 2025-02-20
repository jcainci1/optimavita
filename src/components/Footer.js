import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./Footer.module.css";
import Avatar1 from "./assets/logo_icon.png";
import Instagram from "./Instagram";
import DummyAvatar from "./assets/x.svg"; // Dummy avatar for placeholder

function Footer() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 605px)").matches
  );
  const [showPolicyModal, setShowPolicyModal] = useState(false); // State for Privacy Policy modal
  const modalRef = useRef(); // Reference for modal to detect clicks outside

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 605px)");
    const handleChange = (e) => setMatches(e.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Close modal if clicked outside
  const handleOutsideClick = (e) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(e.target) &&
      !showPolicyModal
    ) {
      setShowPolicyModal(false); // Close modal if clicked outside
    }
  };

  useEffect(() => {
    if (showPolicyModal) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => document.removeEventListener("click", handleOutsideClick);
  }, [showPolicyModal]);

  // Modal transition configuration
  const transition_text = {
    duration: 0.33,
    ease: "easeInOut",
  };

  return (
    <>
      {matches && <Instagram />}
      <div className={classes.container}>
        <div className={classes.navigation}>
          {!matches && <Instagram />}
          <ul className={classes.navigationContainer}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                onClick={() => setShowPolicyModal(true)} // Trigger modal
              >
                Privacy Policy
              </NavLink>
            </li>
          </ul>
          <div className={classes.logoContainer}>
            <img className={classes.logo} src={Avatar1} alt="Logo" />
          </div>
          <div className={classes.copyrightContainer}>
            <p className={classes.copyrightText}>
              Founded by Joseph Meehan. &copy; 2024
            </p>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
    </>
  );
}

export default Footer;
