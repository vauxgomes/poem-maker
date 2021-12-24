import { useState } from "react";
import Builder from "./components/Builder";
import Poem from "./components/Poem";

import { originals } from "./assets/stories";

import "./App.css";

function App() {
    const [name, setName] = useState("");
    const [sex, setSex] = useState("M");

    // Preparing originals
    originals.forEach((story) => {
        story.questions.forEach((question) => {
            if ("onChange" in question) {
                if (question.onChange === "setName") {
                    question.onChange = setName;
                } else if (question.onChange === "setName") {
                    question.onChange = setName;
                }
            }
        });
    });

    const [stories, setStories] = useState(originals);
    const [story, setStory] = useState(originals[0]);
    const [poem, setPoem] = useState(null);

    function handleChangeAnswer(questionId, value) {
        let stories_ = [...stories];
        let storyIndex = stories_.findIndex((story_) => story_.id === story.id);

        let questionIndex = stories_[storyIndex].questions.findIndex(
            (question) => question.id === questionId
        );

        let question = stories_[storyIndex].questions[questionIndex];
        question.value = value;

        if (question.hasOwnProperty("onChange")) {
            question.onChange(value);
        }

        setStories(stories_);
    }

    function handleBuildPoem() {
        const questions = story.questions;
        const verses = [];

        if (questions.some((question) => question.value === "")) {
            return;
        }

        questions.forEach((question) => {
            if (question.hasOwnProperty("build")) {
                verses.push(...question?.build(question.value, sex));
                if (question.breakLine) {
                    verses.push("");
                }
            }
        });

        setPoem({
            title: story.title,
            author: name,
            verses,
        });
    }

    function handleChangeStory(id) {
        let idx = stories.findIndex((story) => story.id === id);
        setStory(stories[idx]);
    }

    return (
        <div className="App">
            {/* HEADER */}
            <header className="header noprint">
                <div className="header-container">
                    <div className="logo">
                        <span className="material-icons"> history_edu </span>
                        <span>Poemador</span>
                    </div>

                    <button onClick={handleBuildPoem}>
                        <span className="material-icons">play_arrow</span>
                    </button>
                </div>
            </header>

            <div className="container content">
                {/* SELECTOR */}
                <div className="story-selector shadow-sm">
                    <small>Selecione uma História</small>
                    <select
                        value={story.id}
                        onChange={(e) => handleChangeStory(e.target.value)}
                    >
                        {stories.map((story) => (
                            <option value={story.id} key={story.id}>
                                {story.title}
                            </option>
                        ))}
                    </select>
                </div>
                {/* BUILDER */}
                <Builder
                    story={story}
                    handleChangeAnswer={handleChangeAnswer}
                />

                <Poem poem={poem} />
            </div>
        </div>
    );
}

export default App;
