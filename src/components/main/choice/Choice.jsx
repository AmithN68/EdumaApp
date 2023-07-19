import React from 'react'
import Styles from "./choice.module.css";

const Choice = () => {
  return (
    <section className={Styles.choiceBlock}>
      <article>
        <aside className={Styles.contentBlock}>
          <div>
            <h1>Why Choose Us?</h1>
            <p>A choice that makes the difference</p>
          </div>
        </aside>
        <aside className={Styles.mainCardsBlock}>
          <div className={Styles.cardsBlock1}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvX8OTVf4Mum-O6O1wooTmm7f2h___RAr_3VicNrmsaP5NUwLy"
              alt=""
              width="70px"
              height="70px"
            />
            <h1>Highly experienced</h1>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur
            </p>
          </div>
          <div className={Styles.cardsBlock2}>
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQdoU77tow8I3H9OtZd-PDS5DggFngNW_JRQLweXQeBxPEdLEIE"
              alt=""
              width="70px"
              height="70px"
            />
            <h1>Question, Quiz & Course</h1>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur
            </p>
          </div>
          <div className={Styles.cardsBlock3}>
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcThX7-n5dOb9w4V5N1IDbYHMaw0v62MnN2YFbNBWWq9nsYp5yIU"
              alt=""
              width="80px"
              height="70px"
            />
            <h1>Dedicated Support</h1>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur
            </p>
          </div>
        </aside>
        <aside>
          <div className={Styles.buttonBlock}>
            <button>Learn More</button>
          </div>
        </aside>
      </article>
    </section>
  );
}

export default Choice