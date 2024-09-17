import styles from "@/b-tours/Tour.module.css";
import { useState, useEffect } from "react";
import Loading from "./Loading";

const url = "https://www.course-api.com/react-tours-project";

function Tours() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    setLoading(true);

    try {
      const reposne = await fetch(url);
      const tours = await reposne.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <div className={styles.container}>
        <h2 className="title">No Tours Left</h2>
        <button className="btn" onClick={() => fetchTours()}>
          Refresh
        </button>
      </div>
    );
  }
  return (
    <section className={styles.container}>
      <div className="title">
        <h2>Out Tours</h2>
        <div className="title-underline"></div>
      </div>

      <div className={styles.tours}>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
}

function Tour({ id, name, info, image, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className={styles.singleTour}>
      <img src={image} alt="" className={styles.img} />
      <span className={styles.tourPrice}>$ {price}</span>
      <div className={styles.tourInfo}>
        <h5>{name}</h5>
        <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
        <button
          className={styles.infoBtn}
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "show less" : "  read more"}
        </button>
      </div>
      <button
        className={`${styles.deleteBtn} btn-block btn`}
        onClick={() => {
          removeTour(id);
        }}
      >
        Not Interested
      </button>
    </article>
  );
}

export default Tours;
