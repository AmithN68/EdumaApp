import React from 'react';
import Styles from "./_slider.module.css";

const RegisterNow = () => {
  return (
    <section className={Styles.registerBlock}>
      <article>
        <div>
          <aside className={Styles.aside11}>
            <h5>GET 100 OF ONLINE COURSES FOR FREE</h5>
            <h1>REGISTER NOW</h1>
            <span>
              <div>
                <h6>00</h6>
                <p>Days</p>
              </div>
              <div>
                <h6>00</h6>
                <p>Hours</p>
              </div>
              <div>
                <h6>00</h6>
                <p>Minutes</p>
              </div>
              <div>
                <h6>00</h6>
                <p>Seconds</p>
              </div>
            </span>
          </aside>
          <aside className={Styles.aside12}>
            <h2>
              Create your free account now and immediately get access to 100s of
              online courses.
            </h2>
            <form>
              <input type="text" placeholder="your name*" />
              <br />
              <input type="email" placeholder="email*" />
              <br />
              <input type="text" placeholder="phone*" />
              <br />
              <button>Get it now</button>
            </form>
          </aside>
        </div>
      </article>
    </section>
  );
}

export default RegisterNow
