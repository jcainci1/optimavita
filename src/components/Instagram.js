import classes from "./Instagram.module.css";
import Avatar1 from "./assets/Instagram_icon.png";
import { NavLink, Form, useRouteLoaderData } from "react-router-dom";

import React, { useState, useRef, useEffect } from "react";

function Instagram() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1000px)").matches
  );
  const [showAboutModal, setShowAboutModal] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1000px)");
    const handleChange = (e) => setMatches(e.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  return (
    <div className={classes.headerBody}>
      <section className={classes.headerSection}>
        {matches ? (
          <NavLink
            to="https://www.instagram.com/optimavita_/?igsh=c2VlemY4MDZibzNh&utm_source=qr#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={classes.logo} src={Avatar1} />
          </NavLink>
        ) : (
          <NavLink
            to="https://www.instagram.com/optimavita_/?igsh=c2VlemY4MDZibzNh&utm_source=qr#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={classes.logo} src={Avatar1} />
          </NavLink>
        )}
      </section>
    </div>
  );
}

export default Instagram;
