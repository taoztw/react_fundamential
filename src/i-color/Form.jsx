import { useState } from "react";
import "./main.css";
function Form({ addColor }) {
  const [color, setColor] = useState("#f15025");

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <div className="container">
      <h3>Color Generator</h3>

      <form onSubmit={handleSubmit} className="color-form">
        <input
          type="color"
          name="color"
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder={color}
        />
        <button className="btn" style={{ background: color }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
