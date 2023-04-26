import React from "react";
import introduction from "../../pictures/introduction.png";
import styles from "./Introduction.module.css";

function Introduction() {
  return (
    <div className={styles.Intro_Container}>
      <article className={styles.article}>
        <picture className={styles.image}>
          <img src={introduction} alt="background " />
        </picture>
        <div className={styles.testInsideImg}>
          GPS Expense Tracker
          <div className={styles.border}>
            <div className={styles.testInsideImg_prefix}>Use</div>
            <div className={styles.testInsideImg_suffix}>
              It records the locations where require you to spend moeny. To
              achieve this, it will use the GPS of the mobile device and use
              Place API of Google Cloud Platform.
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Introduction;
