import styles from "./styles.module.css";
import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard";
import React, { useState, useEffect, useRef } from "react";
import glotonImg from "../../assets/images/glotonImg.gif";
import calculatorImg from "../../assets/images/calculatorImg.jpg";
import taskerImg from "../../assets/images/taskerImg.jpg";

export default function ProjectsPage() {
  const [isHovered, setIsHovered] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

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
      height: "30px",
      width: "30px",
    },
  };

  const mousePosition = useMousePosition();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className={styles.viewport}
    >
      <motion.div
        style={{
          top: `calc(${JSON.stringify(mousePosition.y)}px + 9px`,
          left: `calc(${JSON.stringify(mousePosition.x)}px - 8px )`,
        }}
        className={styles.cursor}
        variants={cursorVariants}
        animate={cursorVariant}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, translateY: 200 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ ease: "easeOut", duration: 0.6, delay: 0.4 }}
        d
        className={styles.mainContainer}
      >
        <ProjectCard
          img={glotonImg}
          description={`Biggest project so far. Based off of the Glovo website, its a fully
          functional website with login and able to make purchases.`}
          name={`Gloton`}
          stack={`          HTML, CSS, JavaScript, React, ExpressJS, MongoDB, JWT, Jest, Cypress
          `}
          href={"https://gloton.netlify.app/"}
          setCursorVariant={setCursorVariant}
        />

        <ProjectCard
          setCursorVariant={setCursorVariant}
          img={taskerImg}
          description={`Note and reminder taking app. Featured with backend, groups, color personalizing and trash bin`}
          name={`Tasker`}
          stack={`          HTML, CSS, JavaScript, React, ExpressJS.
          `}
        />

        <ProjectCard
          setCursorVariant={setCursorVariant}
          img={calculatorImg}
          description={`My first react project. Basic calculator with an excellent design and history.`}
          name={`Calculator`}
          stack={`HTML, CSS, JavaScript, React.
            `}
          href="https://odsencalculator.netlify.app/"
        />
      </motion.div>
    </motion.div>
  );
}
