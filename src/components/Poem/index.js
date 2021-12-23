import React, { useContext } from "react";

import { StoryContext } from "../../Context/StoryContext";
import "./styles.css";

export default function Poem() {
    const { poem } = useContext(StoryContext);

    if (!poem) {
        return <></>;
    }

    return (
        <div className="poem">
            <h3>{poem.title}</h3>

            {poem.verses.map((verse, index) => (
                <span className="verse" key={index}>
                    {verse}
                </span>
            ))}

            <h4>{poem.author}</h4>
        </div>
    );
}
