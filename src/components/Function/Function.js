import React from "react";
import memo from "../../pictures/memo.png";
import image1 from "../../pictures/part1.png";
import image2 from "../../pictures/part2.png";
import image3 from "../../pictures/part3.png";
import image4 from "../../pictures/part4.png";
import image5 from "../../pictures/part5.png";

import styles from "./Function.module.css";
import { useSelector } from "react-redux";

function Function() {
  const whichVideo = useSelector((state) => state.whichVideo);
  return (
    <div className={styles.Function_Container}>
      {/* ================================================================================================ */}
      {whichVideo === "Location" && (
        <div className={styles.Function_each}>
          <div className={styles.LEFT}>
            <article className={styles.article}>
              <div className={styles.image}>
                <img src={memo} alt="background " />
              </div>
              <div className={styles.testInsideImg}>
                <div className={styles.testInsideImg_header}>
                  1. Detect Shops
                </div>
                <div className={styles.testInsideImg_text}>
                  It will send request to the Place API to see if there is shop
                  around. Once you stay longer than 2 mins, it will record the
                  shop
                </div>
              </div>
            </article>
          </div>
          <div className={styles.RIGHT}>
            <div className={styles.image}>
              <img src={image1} alt="background " />
            </div>
          </div>
        </div>
      )}
      {/* ================================================================================================ */}
      {whichVideo === "Record" && (
        <div className={styles.Function_each_reverse}>
          <div className={styles.RIGHT}>
            <article className={styles.article}>
              <div className={styles.image}>
                <img src={memo} alt="background " />
              </div>
              <div className={styles.testInsideImg}>
                <div className={styles.testInsideImg_header}>
                  2a. Input Expense
                </div>
                <div className={styles.testInsideImg_text}>
                  You can remove/input the money you spend in the recorded shops
                </div>
              </div>
            </article>
          </div>
          <div className={styles.LEFT}>
            <div className={styles.resized_image}>
              <img src={image2} alt="background " />
            </div>
          </div>
        </div>
      )}
      {whichVideo === "Record" && (
        <div className={styles.Function_each_reverse}>
          <div className={styles.RIGHT}>
            <article className={styles.article}>
              <div className={styles.image}>
                <img src={memo} alt="background " />
              </div>
              <div className={styles.testInsideImg}>
                <div className={styles.testInsideImg_header}>
                  2b. Check the Recorded Expenses
                </div>
                <div className={styles.testInsideImg_text}>
                  You can check the daily/monthly/annully expenses records. If
                  you accidentally enter a wrong expense, you can edit it
                </div>
              </div>
            </article>
          </div>
          <div className={styles.LEFT}>
            <div className={styles.resized_image}>
              <img src={image3} alt="background " />
            </div>
          </div>
        </div>
      )}
      {/* ================================================================================================ */}
      {whichVideo === "Bill" && (
        <div className={styles.Function_each}>
          <div className={styles.LEFT}>
            <article className={styles.article}>
              <div className={styles.image}>
                <img src={memo} alt="background " />
              </div>
              <div className={styles.testInsideImg}>
                <div className={styles.testInsideImg_header}>3. Bills</div>
                <div className={styles.testInsideImg_text}>
                  Apart from spending money in shops, you also need to pay
                  bills. The order of recorded bills follows the "Days Left"
                </div>
              </div>
            </article>
          </div>
          <div className={styles.RIGHT}>
            <div className={styles.resized_image}>
              <img src={image4} alt="background " />
            </div>
          </div>
        </div>
      )}
      {/* ================================================================================================ */}
      {whichVideo === "Statistic" && (
        <div className={styles.Function_each_reverse}>
          <div className={styles.RIGHT}>
            <article className={styles.article}>
              <div className={styles.image}>
                <img src={memo} alt="background " />
              </div>
              <div className={styles.testInsideImg}>
                <div className={styles.testInsideImg_header}>4. Statistics</div>
                <div className={styles.testInsideImg_text}>
                  This will record all the expenses you have made, and you can
                  go back to the previous month to see how much you spent.
                </div>
              </div>
            </article>
          </div>
          <div className={styles.LEFT}>
            <div className={styles.resized_image}>
              <img src={image5} alt="background " />
            </div>
          </div>
        </div>
      )}
      {/* ================================================================================================ */}
    </div>
  );
}

export default Function;
