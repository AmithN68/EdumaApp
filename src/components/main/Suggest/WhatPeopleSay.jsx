import React from "react";
import { IoIosQuote } from "react-icons/io";
import styles from "./suggession.module.css"

const WhatPeopleSay = () => {
  return (
    <div id={styles.mainPeople}>
      <article>
        <h1>What People Say</h1>
        <p>How real people said about Education WordPress Theme.</p>
        <div id={styles.whatImage}>
          <div id={styles.whatImage1}>
            <img
              src="https://eduma.thimpress.com/wp-content/uploads/2015/11/team-6.jpg"
              alt=""
            />
          </div>
          <div id={styles.whatImage2}>
            <img
              src="https://eduma.thimpress.com/wp-content/uploads/2015/11/team-7.jpg"
              alt=""
            />
          </div>
          <div id={styles.whatImage3}>
            <span>
              <IoIosQuote />
            </span>
            <div id={styles.quoteBackground}></div>
            <img
              src="	https://eduma.thimpress.com/wp-content/uploads/2015/11/team-1.jpg"
              alt=""
            />
          </div>
          <div id={styles.whatImage4}>
            <img
              src="https://eduma.thimpress.com/wp-content/uploads/2015/11/team-5.jpg"
              alt=""
            />
          </div>
          <div id={styles.whatImage5}>
            <img
              src="https://eduma.thimpress.com/wp-content/uploads/2015/11/team-3.jpg"
              alt=""
            />
          </div>
        </div>
        <h2>Anothony</h2>
        <p>CEO</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          provident voluptatem iste pariatur! Dolore sint aperiam repudiandae ad
          optio adipisci ullam tenetur ex error exercitationem soluta, ducimus,
          ipsa quos culpa nostrum consequuntur nihil enim quas doloremque atque!
          Impedit harum accusamus doloremque, libero magni pariatur deleniti,
          expedita, voluptate nihil fugiat corporis!
        </p>
      </article>
    </div>
  );
};

export default WhatPeopleSay;