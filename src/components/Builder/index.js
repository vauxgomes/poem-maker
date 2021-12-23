import React, { useState, useContext } from "react";
import uuid from "react-uuid";

import { StoryContext } from "../../Context/StoryContext";

import "./styles.css";

export default function Builder({ story }) {
    const [index, setIndex] = useState(0);

    function increaseIndex() {
        setIndex(Math.min(index + 1, story.questions.length - 1));
    }

    function decreaseIndex() {
        setIndex(Math.max(index - 1, 0));
    }

    function handleChange(storyId, questionId, value) {
        console.log(storyId, questionId, value);

        let stories_ = [...stories];
        let storyIndex = stories_.findIndex((story) => story.id === storyId);
        let questionIndex = stories_[storyIndex].questions.findIndex(
            (question) => question.id === questionId
        );

        let question = stories_[storyIndex].questions[questionIndex];
        question.value = value;

        if (question.hasOwnProperty("onchange")) {
            question.onchange(value);
        }

        setStories(stories_);
    }

    return (
        <div className="builder">
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

            <div className="questions">
                {story.questions.map((question, _index) => (
                    <div
                        className={`question fade ${
                            index === _index ? "active" : ""
                        }`}
                        key={question.id}
                    >
                        <p className="statement">{question.text}</p>

                        {!question.options ? (
                            <div className="answer">
                                <input
                                    key={uuid()}
                                    value={question.value}
                                    type="text"
                                    onChange={(e) =>
                                        handleChange(
                                            story.id,
                                            question.id,
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                        ) : (
                            question.options.map((option) => (
                                <div className="answer" key={option.id}>
                                    <input
                                        type="radio"
                                        value={question.value}
                                        name={`s-${story.id}-q-${question.id}`}
                                        id={`s-${story.id}-q-${question.id}-o-${option.id}`}
                                        onChange={(e) =>
                                            handleChange(
                                                story.id,
                                                question.id,
                                                e.target.value
                                            )
                                        }
                                    />

                                    <label
                                        htmlFor={`s-${story.id}-q-${question.id}-o-${option.id}`}
                                    >
                                        {option.text}
                                    </label>
                                </div>
                            ))
                        )}
                    </div>
                ))}
            </div>

            <div className="selector">
                {story.questions.map((question, _index) => (
                    <span
                        key={uuid()}
                        className={`dot ${index === _index ? "active" : ""} ${
                            question.value ? "success" : ""
                        }`}
                        onClick={(e) => setIndex(_index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}
