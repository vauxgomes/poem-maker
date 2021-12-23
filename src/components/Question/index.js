import React, { useEffect, useRef } from "react";
import { useContext } from "react/cjs/react.development";

import { StoryContext } from "../../Context/StoryContext";

import "./style.css";

export default function Question({ question, isActive }) {
    const { handleChange } = useContext(StoryContext);
    const inputRef = useRef(null);

    function onChangeAnswer(e) {
        handleChange(question.id, e.target.value);
    }

    useEffect(() => {
        if (isActive) {
            inputRef.current?.focus();
        }
    }, [isActive]);

    return (
        <div className={`question fade ${isActive ? "active" : ""}`}>
            <p className="title">{question.text}</p>

            {question.options?.map((option, idx) => (
                <div className="answer" key={option.id}>
                    <input
                        type="radio"
                        value={option.value}
                        name={`q-${question.id}`}
                        id={`q-${question.id}-${idx}`}
                        onChange={onChangeAnswer}
                    />

                    <label htmlFor={`q-${question.id}-${idx}`}>
                        {option.text}
                    </label>
                </div>
            ))}

            {question.options?.length ? (
                ""
            ) : (
                <div className="answer">
                    <input
                        type="text"
                        value={question.value}
                        onChange={onChangeAnswer}
                        ref={inputRef}
                    />
                </div>
            )}
        </div>
    );
}
