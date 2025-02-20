import classes from "./PageContent.module.css";
import { useState } from "react";
import { motion } from "framer-motion"; // Import motion
import CopyIcon from "./assets/copy.svg";

function PageContent({ title, children }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const layoutTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    duration: 1, // Makes it slower
  };

  const copyToClipboard = (e, text, index) => {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopiedIndex(index);
          setTimeout(() => setCopiedIndex(null), 1000);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.opacity = 0;
      document.body.appendChild(textArea);
      textArea.select();

      try {
        const successful = document.execCommand("copy");
        if (successful) {
          setCopiedIndex(index);
          setTimeout(() => setCopiedIndex(null), 1000);
        } else {
          console.error("Fallback: Unable to copy");
        }
      } catch (err) {
        console.error("Fallback: Error copying text", err);
      }

      document.body.removeChild(textArea);
    }
  };

  return (
    <div className={classes.contentBody}>
      <section>
        <h1 className={classes.contentHeader}>Contact</h1>
        <div className={classes.locationNameContainer}>
          {/* Make the email text clickable */}
          <div
            className={`${classes.location} ${classes.locationName}`}
            onClick={(e) =>
              copyToClipboard(e, "Joe_Meehan@OptimaVitaConsulting.com", 0)
            }
            style={{ cursor: "pointer" }} // Makes it obvious it's clickable
          >
            Joe_Meehan@OptimaVitaConsulting.com
          </div>

          <div
            onClick={(e) =>
              copyToClipboard(e, "Joe_Meehan@OptimaVitaConsulting.com", 0)
            }
            className={classes.copyButtonContainer}
          >
            {copiedIndex === 0 ? (
              <motion.div
                className={classes.copiedActionContainer}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div className={classes.copiedActionText}>
                  Copied!
                </motion.div>
              </motion.div>
            ) : (
              <motion.img
                src={CopyIcon}
                alt="copy"
                className={classes.copyButton}
                whileHover={{ scale: 1.1 }}
                transition={layoutTransition}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PageContent;
