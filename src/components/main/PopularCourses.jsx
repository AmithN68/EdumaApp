import React from "react";
import { HiOutlineUsers } from "react-icons/hi";
import { HiOutlineDocumentText } from "react-icons/hi";
import Styles from "./_slider.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BsArrowUpRightSquare } from "react-icons/bs";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const PopularCourses = () => {
  return (
    <section className={Styles.courseBlock}>
      <article>
        <div className={Styles.heading}>
          <h1>Popular Courses</h1>
          <p>Limitless learning, more possibilities</p>
        </div>
        <Carousel responsive={responsive} className={Styles.courseBlock1}>
          <div>
            <aside className={Styles.imgBlock}>
              <img
                src="https://eduma.thimpress.com/wp-content/uploads/2022/10/course-2.jpg"
                alt=""
                width="100%"
                height="50%"
              />
              <p className={Styles.arrow}>
                <BsArrowUpRightSquare />
              </p>
            </aside>

            <img
              src="https://secure.gravatar.com/avatar/b08d0d3bc9bf251a412e53566ac82b54?s=500&r=g"
              alt=""
              width="10vw"
              height="10vh"
              className={Styles.logo}
            />
            <h5>keny white</h5>
            <h3>the complete online teaching masterclass</h3>
            <ul>
              <li>
                <span>
                  <HiOutlineDocumentText />
                </span>
                6
              </li>
              <li>
                <span>
                  <HiOutlineUsers />
                </span>
                26
              </li>
              <li>$36.00</li>
            </ul>
          </div>
          <div>
            <aside className={Styles.imgBlock}>
              <img
                src="https://eduma.thimpress.com/wp-content/uploads/2022/10/react-course-17-768x512.jpg"
                alt=""
                width="100%"
                height="50%"
                className={Styles.imgBlock}
              />
              <p className={Styles.arrow}>
                <BsArrowUpRightSquare />
              </p>
            </aside>

            <img
              src="https://secure.gravatar.com/avatar/b08d0d3bc9bf251a412e53566ac82b54?s=500&r=g"
              alt=""
              width="10vw"
              height="10vh"
              className={Styles.logo}
            />
            <h5>keny white</h5>
            <h3>the complete online teaching masterclass</h3>
            <ul className={Styles.freeLi}>
              <li>
                <span>
                  <HiOutlineDocumentText />
                </span>
                6
              </li>
              <li>
                <span>
                  <HiOutlineUsers />
                </span>
                26
              </li>
              <li>Free</li>
            </ul>
          </div>
          <div>
            <aside className={Styles.imgBlock}>
              <img
                src="https://eduma.thimpress.com/wp-content/uploads/2022/10/course-4-768x512.jpg"
                alt=""
                width="100%"
                height="50%"
                className={Styles.imgBlock}
              />
              <p className={Styles.arrow}>
                <BsArrowUpRightSquare />
              </p>
            </aside>

            <img
              src="https://secure.gravatar.com/avatar/b08d0d3bc9bf251a412e53566ac82b54?s=500&r=g"
              alt=""
              width="10vw"
              height="10vh"
              className={Styles.logo}
            />
            <h5>keny white</h5>
            <h3>the complete online teaching masterclass</h3>
            <ul className={Styles.freeLi}>
              <li>
                <span>
                  <HiOutlineDocumentText />
                </span>
                6
              </li>
              <li>
                <span>
                  <HiOutlineUsers />
                </span>
                26
              </li>
              <li>Free</li>
            </ul>
          </div>
          <div>
            <aside className={Styles.imgBlock}>
              <img
                src="https://eduma.thimpress.com/wp-content/uploads/2022/10/course-5-768x512.jpg"
                alt=""
                width="100%"
                height="50%"
                className={Styles.imgBlock}
              />
              <p className={Styles.arrow}>
                <BsArrowUpRightSquare />
              </p>
            </aside>

            <img
              src="https://secure.gravatar.com/avatar/b08d0d3bc9bf251a412e53566ac82b54?s=500&r=g"
              alt=""
              width="10vw"
              height="10vh"
              className={Styles.logo}
            />
            <h5>keny white</h5>
            <h3>the complete online teaching masterclass</h3>
            <ul>
              <li>
                <span>
                  <HiOutlineDocumentText />
                </span>
                6
              </li>
              <li>
                <span>
                  <HiOutlineUsers />
                </span>
                26
              </li>
              <li>$36.00</li>
            </ul>
          </div>
          <div>
            <aside className={Styles.imgBlock}>
              <img
                src="https://eduma.thimpress.com/wp-content/uploads/2022/12/create-an-lms-website-with-learnpress-3-1.jpg"
                alt=""
                width="100%"
                height="50%"
                className={Styles.imgBlock}
              />{" "}
              <p className={Styles.arrow}>
                <BsArrowUpRightSquare />
              </p>
            </aside>

            <img
              src="https://secure.gravatar.com/avatar/b08d0d3bc9bf251a412e53566ac82b54?s=500&r=g"
              alt=""
              width="10vw"
              height="10vh"
              className={Styles.logo}
            />
            <h5>keny white</h5>
            <h3>the complete online teaching masterclass</h3>
            <ul>
              <li>
                <span>
                  <HiOutlineDocumentText />
                </span>
                6
              </li>
              <li>
                <span>
                  <HiOutlineUsers />
                </span>
                26
              </li>
              <li>$36.00</li>
            </ul>
          </div>
          <div>
            <aside className={Styles.imgBlock}>
              <img
                src="https://eduma.thimpress.com/wp-content/uploads/2022/12/introduction-learnpress-lms-plugin-2-1-768x512.jpg"
                alt=""
                width="100%"
                height="50%"
                className={Styles.imgBlock}
              />
              <p className={Styles.arrow}>
                <BsArrowUpRightSquare />
              </p>
            </aside>
            <img
              src="https://secure.gravatar.com/avatar/b08d0d3bc9bf251a412e53566ac82b54?s=500&r=g"
              alt=""
              width="10vw"
              height="10vh"
              className={Styles.logo}
            />
            <h5>keny white</h5>
            <h3>the complete online teaching masterclass</h3>
            <ul>
              <li>
                <span>
                  <HiOutlineDocumentText />
                </span>
                6
              </li>
              <li>
                <span>
                  <HiOutlineUsers />
                </span>
                26
              </li>
              <li>$36.00</li>
            </ul>
          </div>
        </Carousel>
        <button className={Styles.button}>View All</button>
      </article>
    </section>
  );
};

export default PopularCourses;
