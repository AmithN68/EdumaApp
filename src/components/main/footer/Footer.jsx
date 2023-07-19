import React from "react";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RxTwitterLogo } from "react-icons/rx";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer id={styles.mainFooter}>
      <article>
        <div id={styles.subFooter}>
          <div id={styles.subFooter1}>
            <img
              src="https://eduma.thimpress.com/wp-content/uploads/2022/06/logo-white.png"
              width="220px"
              height="50px"
              alt=""
            />
            <div id={styles.footerPhone}>
              <BsTelephone />
              <p>800 388 80 90</p>
            </div>
            <div id={styles.footerLocation}>
              <IoLocationOutline />
              <p>58 Howard Street #2 San Francisco</p>
            </div>
            <div id={styles.footerMail}>
              {/* <img
                src="./mailimage.png"
                alt="" width="40px" height="40px"
              /> */}
              <MdOutlineForwardToInbox />
              <p>contact@eduma.com</p>
            </div>
            <div id={styles.socialIcons}>
              <span>
                <RiFacebookCircleLine />
              </span>
              <span>
                <RxTwitterLogo />
              </span>
              <span>
                <AiOutlineInstagram />
              </span>
              <span>
                <FaPinterestP />
              </span>
            </div>
          </div>
          {/* company */}
          <div id={styles.subFooter2}>
            <h1>company</h1>
            <p>About</p>
            <p>Blog</p>
            <p>Contact</p>
            <p>Become a Teacher</p>
          </div>
          <div id={styles.subFooter3}>
            <h1>Links</h1>
            <p>Courses</p>
            <p>Events</p>
            <p>Gallery</p>
            <p>FAQs</p>
          </div>
          <div id={styles.subFooter4}>
            <h1>Support</h1>
            <p>Documentation</p>
            <p>Forums</p>
            <p>Language Packs</p>
            <p>Release Status</p>
          </div>
          <div id={styles.subFooter5}>
            <h1>Recommend</h1>
            <p>WordPress</p>
            <p>LearnPress</p>
            <p>WooCommerce</p>
            <p>bbPress</p>
          </div>
        </div>
        <hr />
        <div id={styles.secondaryFooter}>
          <p>Premium LMS & Online Education WordPress Theme</p>
          <div>
            <span>Privacy</span>
            <span>Terms </span>
            <span>Sitemap </span>
            <span>Purchase</span>
          </div>
        </div>
      </article>
    </footer>
  );
};

export default Footer;