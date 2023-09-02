import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div id={styles.border_box}>
        <p>
          India's fastest growing audio & wearables brand. The most incredible
          range of wireless earphones, earbuds, headphones, smart watches, and
          home audio. From workouts to adventures, boAt will get you sailing!
        </p>
      </div>
      <div id={styles.footer1}>
        <div className={styles.subsDiv}>
          <img
            src="https://mma.prnewswire.com/media/1631809/Masai_Logo.jpg?w=200"
            alt=""
          />
          <p>Subscribe to email alerts. We promise not to spam your inbox.</p>
          <div className={styles.emailSubmit}>
            <input type="email" placeholder="Email Address" />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className={styles.varieties}>
          <h3>SHOP</h3>
          <p>True Wireless Earbuds</p>
          <p>Wired Headphones</p>
          <p>Home Audio</p>
          <p>Smart Watches</p>
          <p>Misfit</p>
          <p>Rock in India</p>
        </div>
        <div className={styles.vLine}></div>
        <div className={styles.varieties}>
          <h3> </h3>
          <br />
          <p>Wireless Headphones</p>
          <p>Wireless Speakers</p>
          <p>Mobile Accessories</p>
          <p>TRebel</p>
          <p>Gift Card</p>
          <p>Earn Rs. 100</p>
        </div>
        <div className={styles.vLine}></div>
        <div className={styles.varieties}>
          <h3>HELP</h3>
          <p>Track your order</p>
          <p>Return policy</p>
          <p>Bulk order</p>
          <p>Why buy direct</p>
        </div>
        <div className={styles.vLine}></div>
        <div className={styles.varieties}>
          <h3></h3>
          <br />
          <p>Warranty & Support</p>
          <p>Service Centers</p>
          <p>FAQs</p>
        </div>
        <div className={styles.vLine}></div>
        <div className={styles.varieties}>
          <h3>COMPANY</h3>
          <p>About boAt</p>
          <p>News</p>
          <p>Read Our Blog</p>
          <p>Careers</p>
          <p>Security</p>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Investor Relations</p>
          <p>Social Responsibility</p>
          <p>Warranty Policy</p>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.footLine}>
        <hr />
      </div>
      <div className={styles.socialMedia}>
        <p>
          <i class="fa-brands fa-facebook-f"></i>
        </p>
        <p>
          <i class="fa-brands fa-twitter"></i>
        </p>
        <p>
          <i class="fa-brands fa-instagram"></i>
        </p>
        <p>
          <i class="fa-brands fa-youtube"></i>
        </p>
        <p>
          <i class="fa-brands fa-linkedin-in"></i>
        </p>
      </div>
      <div className={styles.footLine}>
        <hr />
      </div>
      <div className={styles.line}></div>
      <div className={styles.extra}>
        <div>
          <h3 style={{ fontSize: "1rem" }}>Download the App</h3>
          <div className={styles.playStore}>
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/google-play.png?v=1608620293"
              alt=""
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/app-store.png?v=1608620293"
              alt=""
            />
          </div>
        </div>
        <div className={styles.paymtOp}>
          <h3 style={{ fontSize: "1rem" }}>We Accept</h3>
          <img
            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Fotter_payment_icn_2_900x_aff68517-98f4-4a82-9aee-2405cea66251_350x.png?v=1650262054"
            alt=""
          />
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.footLine}>
        <hr />
      </div>
      <p>© 2022 Imagine Marketing Limited. All Rights Reserved.</p>
      <br />
    </div>
  );
};
