import styles from "./styles.module.css";
import glotonImg from "../../assets/images/glotonImg.gif";

export default function ProjectCard() {
  return (
    <div className={styles.fullContainer}>
      <h1 className={styles.projectTitle}>Gloton</h1>
      <div className={styles.mainContainer}>
        <img className={styles.projectImg} src={glotonImg} alt="" />
      </div>
    </div>
  );
}
