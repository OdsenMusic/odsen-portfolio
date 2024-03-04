import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import background from "../../assets/images/pexels-photo-288100.png";
import logo from "../../assets/images/Logo.png";
import spotifyLogo from "../../assets/images/Spotify_logo_without_text.svg";
import linkedinLogo from "../../assets/images/LinkedIn_icon_circle.svg";
import MailIcon from "../../assets/images/mailicon.svg";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function hideSplashScreen() {
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    }

    hideSplashScreen();
  }, []);

  return (
    <div className={styles.viewport}>
      {isLoading && (
        <div className={styles.splashScreen}>
          <img className={styles.splashScreenLogo} src={logo} />
        </div>
      )}

      <div className={styles.perspectiveDiv}>
        <div className={styles.mainContainer}>
          <div className={styles.ajedrez}>
            <p className={styles.text}>Projects</p>
            <div className={styles.projectButton}>
              <img className={styles.backgroundImg} src={background} />
              <img className={styles.logo} src={logo} alt="" />
            </div>{" "}
          </div>

          <div className={styles.sideButtons}>
            <button className={styles.sideButton}>
              <img className={styles.icon} src={spotifyLogo} alt="" />
            </button>
            <button className={styles.sideButton}>
              <img className={styles.icon} src={linkedinLogo} alt="" />
            </button>
            <button className={styles.sideButton}>
              <img className={styles.icon} src={MailIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
