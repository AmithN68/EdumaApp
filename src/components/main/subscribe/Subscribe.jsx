import React from "react";
import { FiMail } from "react-icons/fi";
import Styles from "./subscribe.module.css";

const Subscribe = () => {
  return (
    <section className={Styles.subscribe}>
      <article>
        <div className={Styles.subscribeContent}>
          <p>
            Subscribe now and receive weekly newsletter with educational
            materials, new courses, interesting posts, popular books and much
            more!
          </p>
        </div>
        <div className={Styles.subscribeContent1}>
          <input type="email" placeholder="Your email here" />
          <span className={Styles.msgIcon}>
            <FiMail />
          </span>
          <span>
            <button>Subscribe</button>
          </span>
        </div>
      </article>
    </section>
  );
};

export default Subscribe;