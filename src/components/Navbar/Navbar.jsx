import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import Navbar1 from './Navbar1';
import Styles from "./_navbar.module.css";

const Navbar = () => {
  return (
    <section className={Styles.navBlock}>
      <article>
        <aside>
          <Logo />
          <Menu />
        </aside>
      </article>
    </section>
  );
}

export default Navbar