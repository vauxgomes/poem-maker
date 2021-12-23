import React, { useState, useContext, useEffect } from "react";
import uuid from "react-uuid";

import Question from "../Question";

import { StoryContext } from "../../Context/StoryContext";
import "./styles.css";

export default function Builder() {
    const { story } = useContext(StoryContext);

    const [index, setIndex] = useState(0);
    const [touchX, setTouchX] = useState(false);
    const sensibility = 20;

    useEffect(() => {
        setIndex(0);
    }, [story]);

    function increaseIndex() {
        setIndex(Math.min(index + 1, story.questions.length - 1));
    }

    function decreaseIndex() {
        setIndex(Math.max(index - 1, 0));
    }

    function isQuestionActive(idx) {
        return idx === index;
    }

    function handleTouchStart(e) {
        setTouchX(e.touches[0].clientX);
    }

    function handleTouchEnd(e) {
        const X = e.changedTouches[0].clientX;

        if (Math.abs(X - touchX) < sensibility) return;

        if (X > touchX) {
            decreaseIndex();
        } else {
            increaseIndex();
        }
    }

    return (
        <div
            className="builder"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* HEADER */}
            <div className="title d-flex align-center justify-content-between">
                <h2>{story.title}</h2>

                <div className="d-flex align-center gap-2">
                    <span
                        className={`prev material-icons ${
                            index > 0 ? "active" : ""
                        }`}
                        onClick={decreaseIndex}
                    >
                        navigate_before
                    </span>

                    <span
                        className={`next material-icons ${
                            index < story.questions.length - 1 ? "active" : ""
                        }`}
                        onClick={increaseIndex}
                    >
                        navigate_next
                    </span>
                </div>
            </div>

            {/* QUESTIONS */}
            <div className="questions">
                {story.questions.map((question, idx) => (
                    <Question
                        question={question}
                        key={question.id}
                        isActive={isQuestionActive(idx)}
                    />
                ))}
            </div>

            {/* SELECTOR */}
            <div className="selector">
                {story.questions.map((question, idx) => (
                    <span
                        key={uuid()}
                        className={`dot ${
                            isQuestionActive(idx) ? "active" : ""
                        } ${question.value ? "success" : ""}`}
                        onClick={(e) => setIndex(idx)}
                    ></span>
                ))}
            </div>
        </div>
    );
}
