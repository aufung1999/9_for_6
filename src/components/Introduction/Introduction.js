import React from "react";
import introduction from "../../pictures/introduction.png";
import styles from "./Introduction.module.css";

function Introduction() {
  return (
    <div className={styles.Intro_Container}>
      <article className={styles.article}>
        <div className={styles.image}>
          <img src={introduction} alt="background " />
        </div>
        <div className={styles.testInsideImg}>
          <div className={styles.header}>GPS Expense Tracker</div>
          <div className={styles}>
            {/* <div className={styles.testInsideImg_prefix}>Use</div> */}
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
