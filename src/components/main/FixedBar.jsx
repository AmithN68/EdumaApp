import React from "react";
import Styles from "./_slider.module.css";
import { FaLayerGroup } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const FixedBar = () => {
  return (
    <section className={Styles.fixedBlock}>
      <article>
        <div className={Styles.divBlock1}>
          <h1 className={Styles.head1}>
            <FaLayerGroup />
          </h1>
          <h2>Demos</h2>
        </div>
        <div className={Styles.divBlock2}>
          <h1 className={Styles.head2}>
            <BsCart3 />
          </h1>
          <h2>Buy Now</h2>
        </div>
        <div className={Styles.divBlock3}>
          <h1 className={Styles.head3}>
            <BiSupport />
          </h1>
          <h2>Support</h2>
        </div>
      </article>
    </section>
  );
};

export default FixedBar;
