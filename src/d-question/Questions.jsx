import styles from "./Questions.module.css";
import data from "./data";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Questions() {
  const [questions, setQuestions] = useState(data);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1>Questions</h1>
        <section>
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </div>
    </div>
  );
}

function Question({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className={styles.question}>
      <header>
        <h5>{title}</h5>
        <button
          onClick={() => setShowInfo(!showInfo)}
          className={styles.questionBtn}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </div>
  );
}

export default Questions;
