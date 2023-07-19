import React from 'react';
import Styles from "./_navbar.module.css";
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <section id={Styles.logoBlock}>
      <article>
        <aside>
          <Link to="/">
            <img
              src="https://eduma.thimpress.com/wp-content/uploads/2022/06/logo-white.png"
              alt="Logo"
              className={Styles.imgBlock}
            />
          </Link>
        </aside>
      </article>
    </section>
  );
}

export default Logo
