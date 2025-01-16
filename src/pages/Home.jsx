import React, { useState, useRef, useEffect } from "react";

import Avatar1 from "../pages/assets/full_icon_adjacent.svg";
import Avatar2 from "../pages/assets/full_icon_adjacent_phone.svg";
import Avatar3 from "../pages/assets/fatih-kgqu_qs3B78-unsplash.jpg";
import Avatar4 from "../pages/assets/jene-stephaniuk--MCrF6hnojU-unsplash.jpg";
import Avatar5 from "../pages/assets/katrina-wright-yMg_SMqfoRU-unsplash.jpg";
import Avatar6 from "../pages/assets/khadeeja-yasser-FHT0KEOwtyg-unsplash.jpg";
import Avatar7 from "../pages/assets/chooseyou_img_2.png";
import Avatar8 from "../pages/assets/doing_my_best.jpg";
import Avatar9 from "../pages/assets/pregnant_belly.jpg";
import Avatar10 from "../pages/assets/happy balloons.jpg";
import Avatar11 from "../pages/assets/painted hand.jpg";
import { ReactComponent as Logo } from "./assets/chooseyou-mission-img.svg";
import classes from "./Home.module.css";
import Principles from "../components/Principles";
import { motion, AnimatePresence } from "framer-motion";
// import PageContent from "../components/PageContent";

function HomePage() {
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

  const modalSetting = () => {
    setShowAboutModal(!showAboutModal);

    if (showAboutModal == false) {
      showOverlay();
    } else {
      removeOverlay();
    }
  };

  function showOverlay() {
    const mainEl = document.querySelector("html");
    mainEl.style.overflow = "hidden";
  }

  function removeOverlay() {
    const mainEl = document.querySelector("html");
    mainEl.style.overflow = "auto";
  }
  const transition_text = {
    duration: 0.33,
    ease: "easeInOut",
  };
  return (
    <motion.div className={classes.homeBody}>
      <div className={classes.logoContainer}>
        {matches ? (
          <img className={classes.logo} src={Avatar1} />
        ) : (
          <img className={classes.logo} src={Avatar2} />
        )}
      </div>
      <section>
        <h2 className={classes.homeHeader}>Mission statement</h2>
        <p>
          At OptimaVita, we believe that true health is not just the absence of
          illness, but the presence of vitality, energy, and balance in every
          aspect of life. We are a wellness and longevity consulting company
          dedicated to helping individuals restore, optimize, and maintain their
          health through the power of functional medicine.
        </p>
        <p>
          Our mission is simple: to guide you on your journey toward peak
          wellness. Whether you're looking to enhance your fitness or overcome
          challenges like obesity, our holistic approach integrates personalized
          nutrition, sleep optimization, exercise strategies, and stress
          reduction techniques to create a path to long-lasting health.
        </p>
        <p>
          What sets OptimaVita apart is our unwavering commitment to your unique
          needs. Our highly attentive consulting and coaching services are
          designed to provide tailored support and guidance, ensuring you
          receive the best care at every step. We focus on the root causes of
          health issues and work with you to develop a sustainable plan for a
          healthier, more vibrant life.
        </p>
        <p>
          Join us at OptimaVita, and take the first step toward an optimized
          you.
        </p>
      </section>
      <Principles />
    </motion.div>
  );
}

export default HomePage;
