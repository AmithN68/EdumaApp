import React from 'react';
import Styles from "./_slider.module.css";
import { MdNavigateNext } from "react-icons/md";

const Division = () => {
  return (
    <section className={Styles.divBlock}>
      <article>
        <aside className={Styles.aside1}>
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTkB4yB4b88DE2VRfqVuD1oNEor80fshQEGRCjkuNqj753gPXkT"
            alt=""
            width="60%"
            height="60%"
          />
          <div>
            <h2>Best Industry Leaders</h2>
            <h5>
              View More{" "}
              <span>
                <MdNavigateNext />
              </span>
            </h5>
          </div>
        </aside>
        <aside className={Styles.aside2}>
          <img
            src="https://www.hypersomniafoundation.org/wp-content/uploads/2017/10/gold-graduation-cap-512-1.gif"
            alt=""
            width="40%"
            height="60%"
          />
          <div>
            <h2>Learn Courses Online</h2>
            <h5>
              View More
              <span>
                <MdNavigateNext />
              </span>
            </h5>
          </div>
        </aside>
        <aside className={Styles.aside3}>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5c08222cfcf7fd79d6d69d9b/1545160107890-0XZ6NTXS4T3MMIZ5K1N9/group.png?format=300w"
            alt=""
            width="40%"
            height="60%"
          />
          <div>
            <h2>Book Library and Store</h2>
            <h5>
              View More
              <span>
                <MdNavigateNext />
              </span>
            </h5>
          </div>
        </aside>
      </article>
    </section>
  );
}

export default Division
