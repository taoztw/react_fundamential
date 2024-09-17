import styles from "@/a-birthday/Birthday.module.css";
import data from "./data";
import { useState } from "react";

function Birthday() {
  const [persons, setPersons] = useState(data);

  function clearAll() {
    setPersons([]);
  }
  return (
    <main>
      <div className={styles.container}>
        <h3>5 Birthdays Today</h3>

        {persons.map((person) => {
          return <Person key={person.id} {...person} />;
        })}
        <button className="btn btn-block" onClick={clearAll}>
          clear all
        </button>
      </div>
    </main>
  );
}

function Person({ image, name, age }) {
  return (
    <div className={styles.person}>
      <img src={image} alt="" className="img" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
}

export default Birthday;
