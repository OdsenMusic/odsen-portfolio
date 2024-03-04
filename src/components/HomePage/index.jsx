import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import background from "../../assets/images/pexels-photo-288100.png";
import logo from "../../assets/images/Logo.png";
import spotifyLogo from "../../assets/images/Spotify_logo_without_text.svg";
import linkedinLogo from "../../assets/images/LinkedIn_icon_circle.svg";
import MailIcon from "../../assets/images/mailicon.svg";
import { motion } from "framer-motion";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");
  const hoverTimeoutRef = useRef(null);

  useEffect(() => {
    function hideSplashScreen() {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    }

    hideSplashScreen();
  }, []);

  const useMousePosition = () => {
    const [mousePosition, setMousePosition] = React.useState({
      x: null,
      y: null,
    });

    React.useEffect(() => {
      const updateMousePosition = (ev) => {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
      };

      window.addEventListener("mousemove", updateMousePosition);

      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
      };
    }, []);

    return mousePosition;
  };

  const cursorVariants = {
    default: {
      border: "3px solid transparent",
    },

    hover: {
      border: "3px solid white",
    },
  };

  const mousePosition = useMousePosition();

  const mouseInHandler = (text) => {
    setCursorVariant("hover");

    clearTimeout(hoverTimeoutRef.current);
    setIsHovered(true);
    setPopupText(text);
  };

  const mouseOutHandler = () => {
    setCursorVariant("default");
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 0);
  };

  return (
    <div className={styles.viewport}>
      <motion.div
        style={{
          top: `calc(${JSON.stringify(mousePosition.y)}px + 9px`,
          left: `calc(${JSON.stringify(mousePosition.x)}px - 8px )`,
        }}
        className={styles.cursor}
        variants={cursorVariants}
        animate={cursorVariant}
      >
        <div
          className={`${styles.flecha} ${isHovered ? styles.active : ""}`}
        ></div>
      </motion.div>
      <p
        style={{
          top: `calc(${JSON.stringify(mousePosition.y)}px - 5px`,
          left: `calc(${JSON.stringify(mousePosition.x)}px + 100px)`,
        }}
        className={`${styles.popupText} ${isHovered ? styles.active : ""}`}
      >
        {popupText}
      </p>
      {/* <p
        style={{
          position: "fixed",
          height: "300px",
          width: "300px",
          backgroundColor: "red",
          top: `${JSON.stringify(mousePosition.y)}px`,
          left: `${JSON.stringify(mousePosition.x)}px`,
          zIndex: "9999999999",
        }}
      >
        {popupText} {JSON.stringify(mousePosition.y)}
      </p> */}
      {isLoading && (
        <div className={styles.splashScreen}>
          <img className={styles.splashScreenLogo} src={logo} />
        </div>
      )}{" "}
      <div className={styles.perspectiveDiv}>
        <div className={styles.mainContainer}>
          <div className={styles.sideButtons}>
            <div className={styles.ajedrez}>
              <div
                onMouseLeave={() => mouseOutHandler()}
                onMouseEnter={() => {
                  mouseInHandler("Projects");
                }}
                className={styles.projectButton}
              >
                <img className={styles.backgroundImg} src={background} />
                <img className={styles.logo} src={logo} alt="" />
              </div>{" "}
            </div>
            <div className={styles.buttonContainer}>
              <button
                className={styles.sideButton}
                onMouseLeave={() => mouseOutHandler()}
                onMouseEnter={() => {
                  mouseInHandler("Spotify");
                }}
              >
                <img className={styles.icon} src={spotifyLogo} alt="" />
              </button>
              <button
                onMouseLeave={() => mouseOutHandler()}
                onMouseEnter={() => {
                  mouseInHandler("LinkedIn");
                }}
                className={styles.sideButton}
              >
                <img className={styles.icon} src={linkedinLogo} alt="" />
              </button>
              <button
                onMouseLeave={() => mouseOutHandler()}
                onMouseEnter={() => {
                  mouseInHandler("Email");
                }}
                className={styles.sideButton}
              >
                <img className={styles.icon} src={MailIcon} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
