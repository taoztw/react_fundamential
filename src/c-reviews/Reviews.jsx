import styles from "@/c-reviews/Reviews.module.css";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import reviews from "./data";
import { useState } from "react";

function Reviews() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomIndex = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <div className={styles.main}>
      <div className={styles.review}>
        <div className={styles.imgContainer}>
          <img src={image} alt="" className={styles.personImg} />
          <span className={styles.quoteIcon}>
            <FaQuoteRight />
          </span>
        </div>

        <h4 className={styles.author}>{name}</h4>
        <p className={styles.job}>{job}</p>
        <p className={styles.info}>{text}</p>

        <div className={styles.btnContainer}>
          <button className={styles.prevBtn} onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className={styles.nextBtn} onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>

        <button className="btn btn-hipster" onClick={randomIndex}>
          Surprise Me
        </button>
      </div>
    </div>
  );
}

export default Reviews;
