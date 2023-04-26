import React from "react";
import styles from "./Download.module.css";
import androidLogo from "../../pictures/androidLogo.png";

function Download() {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div className={styles.downloadBox}>
        <div className={styles.table}>
          <div className={styles.col}>
            <img src={androidLogo} alt="androidLogo" />
          </div>
          <div className={styles.col}>
            <a href="https://connectpolyu-my.sharepoint.com/:u:/g/personal/18058599d_connect_polyu_hk/EX8AuGL6UmhHgfvCfEUkWroB1VcOt4G0cAe9a8Zjm5cn5g?e=W9g3iK"> Click Me!</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
