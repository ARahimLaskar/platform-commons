import React from "react";
import styles from "./Nav.module.css";

export const Nav = () => {
  return (
    <div className={styles.nav}>
      <a href="index.html">
        <img
          class="logo"
          src="https://mma.prnewswire.com/media/1631809/Masai_Logo.jpg?w=200"
          alt="BOAT"
        />
      </a>
      <div className={styles.nav_bar}>
        <ul>
          <li>
            <a className={styles.nav_bar_hover} href="">
              CATEGORIES &nbsp;
            </a>
            <i className="fa-solid fa-chevron-down"></i>
          </li>
          <li>
            <a className={styles.nav_bar_hover} href="">
              DAILY DEALS
            </a>
          </li>
          <li>
            <a className={styles.nav_bar_hover} href="">
              MORE &nbsp;
            </a>
            <i className="fa-solid fa-chevron-down"></i>
          </li>
        </ul>
      </div>
      <div className={styles.right_section}>
        <div className={styles.input_icons}>
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search Products" />
        </div>
        <div className={styles.icons}>
          <i class="fa-solid fa-user"></i>

          <i class="fa-solid fa-headset"></i>

          <i class="fa-solid fa-cart-shopping"></i>
          <span className={styles.nitems}></span>
        </div>
      </div>
    </div>
  );
};
