import React, { useState } from "react";
const Question = (props) => {
    const[visible, setVisible] = useState("");
    function toggleButton() {
        setVisible(!visible)
    }
  return (
    <article className="question">
      <header>
        <h4>{props.title}</h4>
        <button className="btn" onClick={toggleButton}>{visible? '-' : '+'} </button>
      </header>
      { visible && <p>{props.info}</p>}
    </article>
  );
};

export default Question;
