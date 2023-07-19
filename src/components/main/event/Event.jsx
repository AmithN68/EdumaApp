import React from 'react'
import Styles from "./event.module.css";
import { TfiTimer } from "react-icons/tfi";
import { GrLocation } from "react-icons/gr";

const Events = () => {
  return (
    <section id={Styles.eventBlock}>
      <article>
        <aside className={Styles.eventBlock1}>
          <div className={Styles.event}>
            <h1>Events</h1>
            <p>Upcoming Education Events to feed your brain.</p>
          </div>
          <div className={Styles.eventButton}>
            <button>View All</button>
          </div>
        </aside>
        <hr className={Styles.horizontal} />
        <aside className={Styles.eventBlock2}>
          <div className={Styles.number}>
            <h1>1 5</h1>
            <p>December</p>
          </div>
          <div className={Styles.place}>
            <h1>Applying Natural Laws to Technology and Society</h1>
            <p>
              <span>
                <TfiTimer /> 08:00 - 17:00
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>
                <GrLocation /> VENICE, ITALY
              </span>
            </p>
            <p>
              Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor
              a ornare odio. Sed non mauris itae erat conuat
            </p>
          </div>
          <div className={Styles.image}>
            <img
              src="https://eduma.thimpress.com/wp-content/uploads/2015/06/course-6-450x233.jpg"
              alt=""
              height="150px"
              width="280px"
            />
          </div>
        </aside>
        <hr className={Styles.horizontal} />
        <aside className={Styles.eventBlock3}>
          <div className={Styles.number}>
            <h1>3 0</h1>
            <p>September</p>
          </div>
          <div className={Styles.place}>
            <h1>Roundtable discussion on STEAM education</h1>
            <p>
              <span>
                <TfiTimer /> 08:00 - 17:00
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>
                <GrLocation /> NEWYORK, USA
              </span>
            </p>
            <p>
              Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor
              a ornare odio. Sed non mauris itae erat conuat
            </p>
          </div>
          <div className={Styles.image}>
            <img
              src="https://eduma.thimpress.com/wp-content/uploads/2015/06/course-7-450x233.jpg"
              alt=""
              height="150px"
              width="280px"
            />
          </div>
        </aside>
      </article>
    </section>
  );
}

export default Events