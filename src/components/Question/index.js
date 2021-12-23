import React from "react";
import uuid from "react-uuid";

import "./style.css";

export default function Question({ question, storyId, active, handleChange }) {
    function onChangeAnswer(e) {
        if (question.hasOwnProperty("onchange")) {
            question.onchange(e.target.value);
            console.log("used", e.target.value);
        } else {
            handleChange(storyId, question.id, e.target.value);
        }
    }

    return (
        <div className={`question fade ${active ? "active" : ""}`} key={uuid()}>
            <p className="statement">{question.text}</p>

            {!question.options ? (
                <div className="answer">
                    <input key={uuid()} type="text" onChange={onChangeAnswer} />
                </div>
            ) : (
                question.options.map((option) => (
                    <div className="answer" key={uuid()}>
                        <input
                            type="radio"
                            value={question.value}
                            name={`s-${storyId}-q-${question.id}`}
                            id={`s-${storyId}-q-${question.id}-o-${option.id}`}
                            onChange={onChangeAnswer}
                        />

                        <label htmlFor={`qt-${question.id}-${option.id}`}>
                            {option.text}
                        </label>
                    </div>
                ))
            )}
        </div>
    );
}
