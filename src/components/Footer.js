import { NavLink } from "react-router-dom";
<<<<<<< HEAD

import classes from "./Footer.module.css";
import Avatar1 from "./assets/logo_icon.png";

function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.navigation}>
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
          {/* <li
            to="/yoga"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            Yoga
          </li> */}
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
          {/* <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              About
            </NavLink>
          </li> */}
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
              to="/privacy-policy"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Privacy Policy
            </NavLink>
          </li>
        </ul>
        <div className={classes.logoContainer}>
          <img className={classes.logo} src={Avatar1} />
        </div>
        <div className={classes.copyrightContainer}>
          <p className={classes.copyrightText}>
            Founded by Joseph Meehan. &copy; 2024
          </p>
        </div>
      </div>
    </div>
=======
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
            {/* Update Privacy Policy to external link */}
            <li>
              <a
                href="https://app.termly.io/policy-viewer/policy.html?policyUUID=272305ab-39a6-4588-a009-863e8d0e172a"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                Privacy Policy
              </a>
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
      <AnimatePresence>
        {showPolicyModal && (
          <motion.div
            key="policy-modal"
            className={classes.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition_text}
          >
            <motion.div
              key="modal-content"
              className={classes.modalContent}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={transition_text}
              ref={modalRef}
            >
              <button
                className={classes.closeButton}
                onClick={() => setShowPolicyModal(false)} // Close modal
              >
                <img
                  src={DummyAvatar}
                  alt="Close"
                  className={classes.closeIcon}
                />
              </button>
              <h2>Privacy Policy</h2>
              <p>This is a dummy privacy policy text.</p>
              <button onClick={() => setShowPolicyModal(false)}>Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
>>>>>>> 6cf45cfed (second commit)
  );
}

export default Footer;
