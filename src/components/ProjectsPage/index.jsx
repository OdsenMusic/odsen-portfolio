import styles from "./styles.module.css";
import { motion } from "framer-motion";
import ProjectCard from "../ProjectCard";

export default function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className={styles.viewport}
    >
      <motion.div
        initial={{ opacity: 0, translateY: 500 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ ease: "easeOut", duration: 1, delay: 0.4 }}
        d
        className={styles.mainContainer}
      >
        <ProjectCard />
        <ProjectCard />
      </motion.div>
    </motion.div>
  );
}
