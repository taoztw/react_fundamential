import "./main.css";
import { longList } from "./data";
import { useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
function Slider() {
  const [people] = useState(longList);
  const [currentItem, setCurrentItem] = useState(0);

  const prevSlide = () => {
    setCurrentItem((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length;
      return result;
    });
  };
  const nextSlide = () => {
    setCurrentItem((oldPerson) => {
      const result = (oldPerson + 1) % people.length;
      return result;
    });
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(sliderId);
    };
  });

  return (
    <div className="slider-container">
      {people.map((person, index) => {
        const { id, image, name, title, quote } = person;
        return (
          <div
            className="slide"
            key={id}
            style={{
              transform: `translateX(${100 * (index - currentItem)}%)`,
              opacity: index === currentItem ? 1 : 0,
              visibility: index === currentItem ? "visible" : "hidden",
            }}
          >
            <img src={image} alt="" className="person-img" />
            <h4 className="name">{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <span className="icon">
              <FaQuoteRight />
            </span>
          </div>
        );
      })}

      <button className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </div>
  );
}

export default Slider;
